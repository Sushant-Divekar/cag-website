import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import pickle

# Load the dataset
dataset = pd.read_csv("MarksToPercentileFinal.csv")


# Preparing the data
X = dataset.iloc[:, :-1].values  # Assuming 'Marks' and 'Shift' are from the second column onwards
y = dataset.iloc[:, -1].values  # Assuming 'Percentile' is the first column

# Since 'Shift' is a categorical variable, we need to convert it into dummy variables
# X = pd.get_dummies(X, columns=['Shift'], drop_first=True)

# Create a Linear Regression model and fit it
# from sklearn.linear_model import LinearRegression
regressor = LinearRegression()
regressor.fit(X, y)

# Save the model to a pickle file
with open("model1.pkl", "wb") as f:
    pickle.dump(regressor, f)

print("Model has been saved successfully.")
