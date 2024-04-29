import numpy as np
import pandas as pd

dataset = pd.read_csv("Book1.csv")
X = dataset.iloc[:, 1:].values
y = dataset.iloc[:, 0].values

from sklearn.ensemble import RandomForestClassifier

classifier = RandomForestClassifier()

classifier.fit(X, y)

import pickle

with open("model.pkl", "wb") as f:
  pickle.dump(classifier, f)
  