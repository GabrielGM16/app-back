# backend/scripts/analysis.py
import sys
import json
from sklearn.cluster import KMeans
import pandas as pd

data = json.loads(sys.argv[1])

df = pd.DataFrame(data)

# Convertir los datos a una matriz de características
features = df[['zodiacSign', 'personalityType']].copy()
features = pd.get_dummies(features)

kmeans = KMeans(n_clusters=3)
kmeans.fit(features)
clusters = kmeans.predict(features)

df['cluster'] = clusters

print(df.to_json(orient='records'))
