import pandas as pd

# 文件名
filename = "test.xlsx"

df = []
for i in range(0, 5):
    sheet_data = pd.read_excel(filename, sheet_name=i, header=None)
    df.append(sheet_data)

# 合并表格
output = "merged.xlsx"
df = pd.concat(df)
df.to_excel(output)