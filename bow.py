from nltk_module import df
from sklearn.feature_extraction.text import TfidfVectorizer

# print(df)
df['Processed_Text'] = df['Tokens'].apply(lambda tokens: ' '.join(tokens))

# Create an instance of TfidfVectorizer
vectorizer = TfidfVectorizer()

# Fit the vectorizer on the processed text
vectorizer.fit(df['Processed_Text'])

# Transform the processed text into TF-IDF features
tfidf_features = vectorizer.transform(df['Processed_Text'])

# Convert the sparse matrix to a dense matrix (optional)
tfidf_features = tfidf_features.toarray()

# Print the shape of the TF-IDF features matrix
print(tfidf_features.shape)
