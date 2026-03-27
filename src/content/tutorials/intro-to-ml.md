---
title: "A Beginner's Guide to Machine Learning"
description: "An introduction to machine learning fundamentals — supervised vs. unsupervised learning, feature selection, train-test splits, and model evaluation using the Iris dataset."
order: 4
image: /images/tutorials/intro-to-ml.webp
---

## What is Machine Learning?

Machine learning is a subset of artificial intelligence where computers use data to identify patterns and make predictions. These models improve over time by learning from new data and experiences.

Machine learning algorithms work by identifying patterns in the data, specifically between the independent variables (features, often represented as **X**) and the dependent variables (targets, often represented as **y**). These patterns enable the model to make predictions or classifications based on new, unseen data.

## Labeled & Unlabeled Data

Data is the foundation of all machine learning. There are two broad categories:

**Labeled data** contains both the input and the corresponding correct output/target. For example, a dataset of images labeled "cat" or "dog" — the model is trained to predict the label.

**Unlabeled data** contains only the input, leaving the model to identify patterns without guidance.

<img src="/images/tutorials/labelled-unlabeled.png" alt="Labeled vs unlabeled data" style="max-width: 60%; margin: 1.5rem auto;" />

## Two Categories of Machine Learning

Machine learning is broadly divided into two primary categories:

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.5rem 0;">
<div style="background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: 8px; padding: 1.25rem;">

#### Supervised Learning
- Uses **labeled** training data
- Majority of ML applications
- Used for classification and regression

*Common algorithms:* Linear/Logistic Regression, Support Vector Machines, Decision Trees, K-Nearest Neighbours

</div>
<div style="background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: 8px; padding: 1.25rem;">

#### Unsupervised Learning
- Uses **unlabeled** training data
- Less common but powerful for exploration
- Used for clustering, content personalization, and dimensionality reduction

*Common algorithms:* PCA, K-Means Clustering, t-SNE

</div>
</div>

### Supervised Machine Learning — Pros & Cons

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.5rem 0;">
<div style="background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: 8px; padding: 1.25rem;">

**Pros**
- High accuracy — ability to learn from known examples
- Excellent predictive power for classifying new data

</div>
<div style="background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: 8px; padding: 1.25rem;">

**Cons**
- Requires labeled data — time-consuming and expensive to obtain
- Risk of overfitting — models may become too tailored to training data

</div>
</div>

### Unsupervised Machine Learning — Pros & Cons

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.5rem 0;">
<div style="background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: 8px; padding: 1.25rem;">

**Pros**
- Powerful for data exploration — uncovers hidden structures
- Useful for dimensionality reduction

</div>
<div style="background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: 8px; padding: 1.25rem;">

**Cons**
- Lower interpretability — patterns harder to understand without labels
- Challenging model evaluation — difficult to assess without clear metrics

</div>
</div>

## How Does Machine Learning Work?

The [UC Berkeley School of Information](https://ischoolonline.berkeley.edu/blog/what-is-machine-learning/) defines 3 components of most supervised ML algorithms:

### 1. A Decision Process

Machine learning algorithms make a **prediction or classification** based on input data. The algorithm produces an **estimate about a pattern** in the data.

### 2. An Error Function

An error function **evaluates the prediction** of the model. If there are known examples, it can make a comparison to assess performance.

### 3. A Model Optimization Process

When the model does a good job matching the training data, it tweaks its settings to improve classification. This **"evaluate and optimize"** process repeats, allowing the model to adjust itself automatically.

## Mini Tutorial with the Iris Dataset

Let's dive into a hands-on example using the famous Iris dataset — a classic for illustrating basic ML concepts.

### Human Classification Exercise

Before the technical details, here's a quick exercise. I was hiking in Duncan's Cove and came across some irises. I used an app called "Seek," which leverages machine learning to identify species from your phone's camera. But before seeing the app's result — take a look yourself!

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin: 1.5rem 0;">
<div>
<img src="/images/tutorials/duncans_iris_zoom.jpg" alt="Iris from Duncan's Cove" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
<p style="font-size: 0.8rem; text-align: center; margin-top: 0.5rem; color: var(--color-text-muted);">My picture from Duncan's Cove</p>
</div>
<div>
<img src="/images/tutorials/northern blue flag (Iris versicolor)_files2.jpg" alt="Northern Blue Flag - Versicolor" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
<p style="font-size: 0.8rem; text-align: center; margin-top: 0.5rem; color: var(--color-text-muted);">"Northern Blue Flag" — Versicolor</p>
</div>
<div>
<img src="/images/tutorials/Beach-head Iris (iris setosa)2.jpeg" alt="Beach-Head Iris - Setosa" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
<p style="font-size: 0.8rem; text-align: center; margin-top: 0.5rem; color: var(--color-text-muted);">"Beach-Head" — Setosa</p>
</div>
</div>

Which one does the iris on the left resemble more? Consider what influenced your decision — shape, color, or another feature?

### Misclassification?

Interestingly, the Seek app identified the iris as a Versicolor, but two experts later claimed it was a Setosa. This highlights a critical aspect of machine learning: **the selection of features**.

<img src="/images/tutorials/inaturalist_pic.PNG" alt="iNaturalist identification screenshot" style="max-width: 60%; margin: 1.5rem auto;" />

## Choosing the Right Features

A **feature** is "an individual measurable property or characteristic of a phenomenon."[^1] In machine learning, selecting the right features is critical to model success.

Using informative, discriminative, and independent features is essential for building effective classification algorithms. In the iris example, the app's algorithm may have relied on features that led to misclassification.

[^1]: [Bishop, Christopher (2006). *Pattern recognition and machine learning*](https://en.wikipedia.org/wiki/Feature_(machine_learning)#cite_note-ml-1)

## The Iris Dataset

The Iris dataset contains three types of iris flowers: Setosa, Versicolor, and Virginica. Each iris is described by four features: **petal and sepal width and length**.

<img src="/images/tutorials/iris_ex.png" alt="Iris dataset species overview" style="max-width: 85%; margin: 1.5rem auto;" />

The dataset contains:
- 4 Features (independent variables)
- 150 total observations (50 of each species)

<img src="/images/tutorials/sepal-petal.png" alt="Sepal vs petal diagram" style="max-width: 40%; margin: 1rem auto;" />

## Separating Independent and Dependent Variables

Before training a model, we split the dataset into:

- **X** (independent variables / features): petal & sepal length and width
- **y** (dependent variable / target): species label

This separation ensures the model learns the relationship between inputs and outputs without being biased by the answers themselves.

```python
X = data.drop(['species_id', 'species'], axis=1)
y = data['species']

# X shape: (150, 4) — 150 observations, 4 features
# y shape: (150,)  — 150 species labels
```

## Train-Test Split

If a model trains on the same data it is tested with, its performance can be artificially inflated — this is called **data leakage**. To evaluate performance accurately, we split the data into **training** and **testing** sets.

<img src="/images/tutorials/train-test-split-1.png" alt="Train-test split diagram" style="margin: 1.5rem auto;" />

### Making the Train-Test Split

We keep 30% of the data for testing and use **stratification** to ensure class ratios remain consistent:

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.3,      # 30% for testing
    stratify=y,         # Preserve class ratios (33% of each species)
    random_state=42     # Reproducibility
)

# X_train shape: (105, 4)  — 70% of features
# y_train shape: (105,)    — 70% of labels
# X_test  shape: (45, 4)   — 30% of features
# y_test  shape: (45,)     — 30% of labels
```

### Why is Stratification Important?

Stratification ensures each class is proportionally represented in both splits. Without it, the model might over-focus on more prevalent classes, leading to biased performance and poor accuracy on underrepresented classes.

## Training the Models

Now let's train several supervised machine learning models using [scikit-learn](https://scikit-learn.org/stable/index.html):

```python
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

classifiers = [
    SVC(kernel='linear', random_state=42),              # Linear SVM
    SVC(kernel='rbf', random_state=42),                 # RBF SVM
    DecisionTreeClassifier(random_state=42),            # Decision Tree
    RandomForestClassifier(random_state=42),            # Random Forest
    KNeighborsClassifier(),                             # K-Nearest Neighbours
    LogisticRegression(random_state=42, max_iter=1000)  # Logistic Regression
]

for clf in classifiers:
    clf.fit(X_train, y_train)
    y_pred = clf.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Accuracy of {clf.__class__.__name__}: {accuracy:.2f}")
```

This produces accuracy scores ranging from around 0.90 to 1.00 for each classifier.

## Visualizing Machine Learning

To visualize decision boundaries, we apply PCA to reduce our 4-dimensional data into 2 dimensions, then train the models on the reduced data:

<img src="/images/tutorials/combined_PCA_decision_boundaries_with_accuracy2.png" alt="PCA decision boundaries for all classifiers" style="margin: 1.5rem auto; border-radius: 8px; border: 1px solid var(--color-border);" />

Each colored region represents where a model predicts a specific species. A new data point falling in the blue region would be classified as Iris Setosa. Errors occur when data points fall in the wrong region.

## Evaluating Model Performance

### Accuracy Score

**Accuracy** = Number of Correct Predictions / Total Number of Predictions

Since we tested each model on 45 unseen cases, a model with accuracy 0.89 correctly classified approximately 40 out of 45 cases.

### Confusion Matrices

A **confusion matrix** provides a detailed breakdown of predictions. Each row represents the actual class; each column represents the predicted class. Diagonal elements show correct predictions; off-diagonal elements show misclassifications.

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.5rem 0;">
<div>
<img src="/images/tutorials/Linear_SVM_CM.png" alt="Linear SVM confusion matrix" style="width: 100%; border-radius: 8px;" />
<p style="text-align: center; font-size: 0.85rem; margin-top: 0.5rem;">Linear SVM: 45/45 = 1.00</p>
</div>
<div>
<img src="/images/tutorials/DecisionTree_CM.png" alt="Decision Tree confusion matrix" style="width: 100%; border-radius: 8px;" />
<p style="text-align: center; font-size: 0.85rem; margin-top: 0.5rem;">Decision Tree: 43/45 ≈ 0.95</p>
</div>
</div>

<details>
<summary>Breakdown of error types (TP, TN, FP, FN)</summary>

- **True Positives (TP):** Model correctly predicted the positive class.
- **True Negatives (TN):** Model correctly predicted the negative class.
- **False Positives (FP):** Model incorrectly predicted the positive class (Type I error).
- **False Negatives (FN):** Model incorrectly predicted the negative class (Type II error).

In the context of a BCI-controlled wheelchair, false negatives (failing to detect a movement command) could leave a user stranded, while false positives (unintended movement) could be disorienting or dangerous.

</details>

## When is Accuracy Sub-optimal?

With **imbalanced classes**, accuracy can be misleading. Suppose a dataset has 80 Setosa and 20 Versicolor. A model that predicts "Setosa" for all 100 observations achieves 80% accuracy — yet distinguishes nothing!

<img src="/images/tutorials/imbalanced-dataset2.png" alt="Imbalanced dataset example" style="max-width: 60%; margin: 1.5rem auto;" />

In such cases, metrics like **F1 Score**, **Precision**, and **Recall** offer a more comprehensive assessment by considering the balance between different types of errors.

## Summary

- **Labeled Data:** Supervised ML uses labeled data, effective for classification tasks.
- **Feature Selection:** Choosing the right features is critical — informative and discriminative features lead to reliable predictions.
- **Train-Test Split:** Split data to prevent data leakage and evaluate on unseen data.
- **Stratification:** Ensures class proportions are preserved in both training and testing sets.
- **Accuracy as a Metric:** Valuable but not always sufficient — especially with imbalanced classes. Use F1 Score, Precision, and Recall for a fuller picture.
