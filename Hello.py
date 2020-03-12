from flask import Flask, redirect, url_for, request
import RAKE
import re
from gensim.models import word2vec
import nltk
nltk.download('averaged_perceptron_tagger')
app = Flask(__name__)

@app.route('/success/<name>')
def success(name):
   Rake = RAKE.Rake("SmartStoplist.txt")
   a = Rake.run(name)
   model = word2vec.Word2Vec.load("wiki.en.text.model")
   list_1 = []
   for i in range(0, len(a)):
      s_1 = re.findall("\w+", str.lower(a[i][0]))
      pos_tags = nltk.pos_tag(s_1)
      for m in range(0, len(pos_tags)):
         if (pos_tags[m][1] == 'NN' or pos_tags[m][1] == 'NNP' or pos_tags[m][1] == 'NNS' or pos_tags[m][1] == 'NNPS'):
            print(s_1[m])
            model_list = model.most_similar(s_1[m])
            for n in range(0, 3):
               list_1.append(model_list[n][0])
   model_list_str = ' '.join(list_1)
   return model_list_str

@app.route('/login',methods = ['POST', 'GET'])
def login():
   if request.method == 'POST':
      user = request.form['textContent']
      return redirect(url_for('success',name = user))
   else:
      user = request.args.get('textContent')
      return redirect(url_for('success',name = user))

if __name__ == '__main__':
   app.run(debug = True)