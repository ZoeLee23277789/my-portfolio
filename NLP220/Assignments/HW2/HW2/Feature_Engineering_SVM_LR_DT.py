import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import time
import optuna
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix
from sklearn.svm import LinearSVC
from sklearn.metrics import roc_curve, auc, precision_recall_curve, accuracy_score, f1_score
from sklearn.multiclass import OneVsRestClassifier
from sklearn.preprocessing import label_binarize
from sklearn.metrics import roc_auc_score

column_names = ['Category', 'Description']

# load the dataset
file_path = './ecommerceDataset.csv'
ecommerce_data = pd.read_csv(file_path, names=column_names, header=None)
ecommerce_data.dropna(subset=['Category', 'Description'], inplace=True)

print(" NaN Value:", ecommerce_data.isnull().sum().sum())
print("Column names:", ecommerce_data.columns)
print("data.head = ", ecommerce_data.head())

# 檢查類別分佈
category_counts = ecommerce_data['Category'].value_counts()

# 繪製類別分佈圖
plt.figure(figsize=(8, 6))
category_counts.plot(kind='bar')
plt.title('Class Distribution')
plt.xlabel('Category')
plt.ylabel('Count')
plt.show()

# train =>70% vail => 10% test => 20%
train_data, temp_data = train_test_split(ecommerce_data, test_size=0.3, stratify=ecommerce_data['Category'], random_state=42)
val_data, test_data = train_test_split(temp_data, test_size=2/3, stratify=temp_data['Category'], random_state=42)

print("Training set size:", train_data.shape[0])
print("Validation set size:", val_data.shape[0])
print("Test set size:", test_data.shape[0])
# ===============
# 分割數據集
X_train, y_train = train_data['Description'], train_data['Category']
X_test, y_test = test_data['Description'], test_data['Category']
# =========================================
# Feature 
bow_vectorizer = CountVectorizer()  # Bag of Words
tfidf_vectorizer = TfidfVectorizer()  # TF-IDF
ngram_vectorizer = CountVectorizer(ngram_range=(1, 2))  # 1-gram & 2-gram
print("ngram_vectorizer = " , ngram_vectorizer)
X_train_bow = bow_vectorizer.fit_transform(X_train)
X_train_tfidf = tfidf_vectorizer.fit_transform(X_train)
X_train_ngram = ngram_vectorizer.fit_transform(X_train)

X_test_bow = bow_vectorizer.transform(X_test)
X_test_tfidf = tfidf_vectorizer.transform(X_test)
X_test_ngram = ngram_vectorizer.transform(X_test)
# ====================================================

# used the best hyper
models = {
    'Logistic Regression (BoW)': LogisticRegression(C=53.99766408775696, solver='lbfgs', max_iter=2000),
    'Logistic Regression (TF-IDF)': LogisticRegression(C=53.99766408775696, solver='lbfgs', max_iter=2000),
    'Logistic Regression (N-gram)': LogisticRegression(C=53.99766408775696, solver='lbfgs', max_iter=2000),
    'Decision Tree (BoW)': DecisionTreeClassifier(max_depth=32, min_samples_split=6),
    'Decision Tree (TF-IDF)': DecisionTreeClassifier(max_depth=32, min_samples_split=6),
    'Decision Tree (N-gram)': DecisionTreeClassifier(max_depth=32, min_samples_split=6),
    'LinearSVC (BoW)': LinearSVC(C=6.833211804184336, max_iter=7783),
    'LinearSVC (TF-IDF)': LinearSVC(C=6.833211804184336, max_iter=7783),
    'LinearSVC (N-gram)': LinearSVC(C=6.833211804184336, max_iter=7783)
}

# Train and Test
feature_sets = {
    'BoW': (X_train_bow, X_test_bow),
    'TF-IDF': (X_train_tfidf, X_test_tfidf),
    'N-gram': (X_train_ngram, X_test_ngram)
}

# evaluate_model
def evaluate_model(name, model, X_train, y_train, X_test, y_test):
    # Train Time
    start_train = time.time()
    model.fit(X_train, y_train)
    end_train = time.time()
    train_time = end_train - start_train

    # Inference Time
    start_inference = time.time()
    y_pred = model.predict(X_test)
    end_inference = time.time()
    inference_time = end_inference - start_inference

    # Eval
    accuracy = accuracy_score(y_test, y_pred)
    f1 = f1_score(y_test, y_pred, average='macro')
    cm = confusion_matrix(y_test, y_pred)

    print(f"{name} - Accuracy: {accuracy:.4f}, Macro F1 Score: {f1:.4f}")
    print("Confusion Matrix:\n", cm)
    print(f"Training Time: {train_time:.4f} seconds")
    print(f"Inference Time: {inference_time:.4f} seconds")
    print("--------------------------------------------------")
    
    return {
        'Model': name,
        'Accuracy': accuracy,
        'Macro F1 Score': f1,
        'Training Time (s)': train_time,
        'Inference Time (s)': inference_time
    }

# save the result
results = []
for name, model in models.items():
    feature_type = name.split(' ')[-1].strip('()')
    X_train_features, X_test_features = feature_sets[feature_type]
    result = evaluate_model(name, model, X_train_features, y_train, X_test_features, y_test)
    results.append(result)

# Result =>DataFrame 
results_df = pd.DataFrame(results)
print(results_df)

# Change it to binary
y_train_bin = label_binarize(y_train, classes=np.unique(y_train))
y_test_bin = label_binarize(y_test, classes=np.unique(y_test))

# used OneVsRestClassifier
ovr_model = OneVsRestClassifier(LogisticRegression(max_iter=2000))
ovr_model.fit(X_train_tfidf, y_train_bin)
y_pred_bin = ovr_model.predict(X_test_tfidf)
y_score = ovr_model.decision_function(X_test_tfidf)

# Cal F1 score and Accuracy
accuracies = []
f1_scores = []
for i in range(y_test_bin.shape[1]):
    acc = accuracy_score(y_test_bin[:, i], y_pred_bin[:, i])
    f1 = f1_score(y_test_bin[:, i], y_pred_bin[:, i], average='macro')
    accuracies.append(acc)
    f1_scores.append(f1)
    print(f"Class {i+1} - Accuracy: {acc:.4f}, Macro F1 Score: {f1:.4f}")


average_accuracy = np.mean(accuracies)
average_f1 = np.mean(f1_scores)
print(f"Average Accuracy (OneVsRest): {average_accuracy:.4f}")
print(f"Average Macro F1 Score (OneVsRest): {average_f1:.4f}")

# plt ROC & Precision-Recall Curve
plt.figure(figsize=(12, 5))

for i in range(y_test_bin.shape[1]):
    # ROC 
    fpr, tpr, _ = roc_curve(y_test_bin[:, i], y_score[:, i])
    roc_auc = auc(fpr, tpr)
    plt.subplot(1, 2, 1)
    plt.plot(fpr, tpr, label=f"Class {i+1} (area = {roc_auc:.2f})")
    
    # Precision-Recall 
    precision, recall, _ = precision_recall_curve(y_test_bin[:, i], y_score[:, i])
    plt.subplot(1, 2, 2)
    plt.plot(recall, precision, label=f"Class {i+1}")

# ROC 
plt.subplot(1, 2, 1)
plt.plot([0, 1], [0, 1], 'k--')
plt.xlabel("False Positive Rate")
plt.ylabel("True Positive Rate")
plt.title("ROC Curve (OneVsRest)")
plt.legend(loc="best")

# Precision-Recall 
plt.subplot(1, 2, 2)
plt.xlabel("Recall")
plt.ylabel("Precision")
plt.title("Precision-Recall Curve (OneVsRest)")
plt.legend(loc="best")

plt.tight_layout()
plt.show()


# Hyper-parameter Exploration using OPTUNA

# def objective_logistic_regression(trial):
#     # Logistic Regression 超參數
#     C = trial.suggest_loguniform("C", 1e-4, 1e2)
#     solver = trial.suggest_categorical("solver", ["liblinear", "lbfgs"])
#     model = LogisticRegression(C=C, solver=solver, max_iter=2000)

#     # 訓練模型
#     model.fit(X_train_tfidf, y_train)
#     # 預測並評估準確率
#     y_pred = model.predict(X_test_tfidf)
#     accuracy = accuracy_score(y_test, y_pred)
    
#     return accuracy

# def objective_decision_tree(trial):
#     # Decision Tree 超參數
#     max_depth = trial.suggest_int("max_depth", 2, 32)
#     min_samples_split = trial.suggest_int("min_samples_split", 2, 20)
#     model = DecisionTreeClassifier(max_depth=max_depth, min_samples_split=min_samples_split)

#     # 訓練模型
#     model.fit(X_train_tfidf, y_train)
#     # 預測並評估準確率
#     y_pred = model.predict(X_test_tfidf)
#     accuracy = accuracy_score(y_test, y_pred)
    
#     return accuracy

# def objective_linear_svc(trial):
#     # LinearSVC 超參數
#     C = trial.suggest_loguniform("C", 1e-4, 1e2)
#     max_iter = trial.suggest_int("max_iter", 1000, 10000)
#     model = LinearSVC(C=C, max_iter=max_iter)

#     # 訓練模型
#     model.fit(X_train_tfidf, y_train)
#     # 預測並評估準確率
#     y_pred = model.predict(X_test_tfidf)
#     accuracy = accuracy_score(y_test, y_pred)
    
#     return accuracy

# # 分別為每個分類器創建一個 study
# study_logistic = optuna.create_study(direction="maximize")
# study_logistic.optimize(objective_logistic_regression, n_trials=50)

# study_decision_tree = optuna.create_study(direction="maximize")
# study_decision_tree.optimize(objective_decision_tree, n_trials=50)

# study_linear_svc = optuna.create_study(direction="maximize")
# study_linear_svc.optimize(objective_linear_svc, n_trials=50)

# # 顯示每個分類器的最佳結果
# print("Best trial for Logistic Regression:")
# print("  Value: ", study_logistic.best_trial.value)
# print("  Params: ")
# for key, value in study_logistic.best_trial.params.items():
#     print(f"    {key}: {value}")

# print("\nBest trial for Decision Tree:")
# print("  Value: ", study_decision_tree.best_trial.value)
# print("  Params: ")
# for key, value in study_decision_tree.best_trial.params.items():
#     print(f"    {key}: {value}")

# print("\nBest trial for LinearSVC:")
# print("  Value: ", study_linear_svc.best_trial.value)
# print("  Params: ")
# for key, value in study_linear_svc.best_trial.params.items():
#     print(f"    {key}: {value}")
