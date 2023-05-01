# Normal Pickle Working
import pandas as pd
import pickle

rows = [['Shlok',9],['Rujuta',11],['Python',19]]
columns = ['Name','Number']

df = pd.DataFrame(rows, columns=columns)

pickle.dump(df,open('demo.pkl','wb'))
