from glob import glob
from pathlib import Path
import os

# dirs = [d for d in glob("./**/")]

# 用在本文件夹内则调整为下列代码
dirs = [ d for d in glob("./")]

# 提取所有的md文档路径
for dir in dirs:
    file_list = Path(dir).glob("*.md")
    for file in file_list:
        md_path = ".\\" + str(file)
        doc_path_1 = os.path.split(file)[1].replace(".md", ".docx")
        command_new_1 = "pandoc -s "+md_path+" -o "+doc_path_1
        try:
            res=os.popen(command_new_1).readlines()
            if len(res)==0:
                print(md_path,"已经转化为",doc_path_1)
        except Exception as e:
            print(e)