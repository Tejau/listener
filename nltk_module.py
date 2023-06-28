from main import df
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer

# Download NLTK resources (run this once)
nltk.download('stopwords')
nltk.download('punkt')

# Lowercasing
df['Text'] = df['Text'].str.lower()

# Tokenization
df['Tokens'] = df['Text'].apply(word_tokenize)

# Removing Punctuation
df['Tokens'] = df['Tokens'].apply(lambda tokens: [token for token in tokens if token.isalnum()])

# Removing Stop Words
stop_words = set(stopwords.words('english'))
df['Tokens'] = df['Tokens'].apply(lambda tokens: [token for token in tokens if token not in stop_words])

# Stemming (optional)
stemmer = PorterStemmer()
df['Tokens'] = df['Tokens'].apply(lambda tokens: [stemmer.stem(token) for token in tokens])
