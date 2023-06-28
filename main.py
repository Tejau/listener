import pandas as pd

# Load the dataset
df = pd.read_csv('fine_food_reviews_1k.csv')

# Display the first few rows of the dataset
print(df.head())

# Check the shape of the dataset (number of rows and columns)
print(df.shape)

# Check the summary statistics of the dataset
print(df.describe())

# Check for missing values
print(df.isnull().sum())

