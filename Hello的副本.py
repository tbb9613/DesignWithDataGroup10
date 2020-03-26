from flask import Flask, redirect, url_for, request,render_template
import RAKE
import re
from gensim.models import word2vec
import nltk
import flash
app = Flask(__name__)
app.config["SECRET_KEY"] = "12345678"
keywords_global = []

@app.route('/login',methods = ['POST', 'GET'])
def login():
   if request.method == 'POST':
      user = request.form['textContent']
      return redirect(url_for('success',name = user))
   else:
      user = request.args.get('textContent')
      return redirect(url_for('success',name = user))

@app.route('/success/<name>')
def success(name):

   Rake = RAKE.Rake("SmartStoplist.txt")
   a = Rake.run(name)
   for i in range(0, len(a)):
      s_1 = re.findall("\w+", str.lower(a[i][0]))
      pos_tags = nltk.pos_tag(s_1)
      for m in range(0, len(pos_tags)):
         if (pos_tags[m][1] == 'NN' or pos_tags[m][1] == 'NNP' or pos_tags[m][1] == 'NNS' or pos_tags[m][1] == 'NNPS'):
            global keywords_global
            keywords_global.append(pos_tags[m][0])
   keywords_sub = keywords_global
   keywords = ' '.join(keywords_sub)

   return render_template('kindle.html', keywords = keywords)

@app.route('/success/Kindle',methods = ['POST', 'GET'])
def choose_Kindle():
   asso_word = []
   model = word2vec.Word2Vec.load("kindle_reviews.model")
   for items in keywords_global:
      try:
         model_list = model.most_similar(items)
         for n in range(0, 3):
            asso_word.append(model_list[n][0])
      except KeyError:
         a = "Keyword:"
         b = "not in vocabulary."
         error_text = ' '.join([a, b])
         asso_word.append(error_text)
   keywords_sub = keywords_global
   keywords_1 = ' '.join(keywords_sub)
   asso_word_1 = ' '.join(asso_word)
   return render_template('tem.html', keywords_2=keywords_1, asso_words_2=asso_word_1)

@app.route('/success/Food', methods=['POST', 'GET'])
def choose_Food():
   asso_word = []
   model = word2vec.Word2Vec.load("food.model")
   for items in keywords_global:
      try:
         model_list = model.most_similar(items)
         for n in range(0, 3):
            asso_word.append(model_list[n][0])
      except KeyError:
         a = "Keyword:"
         b = "not in vocabulary."
         error_text = ' '.join([a, b])
         asso_word.append(error_text)

   #return redirect(url_for('associate'))
   keywords_sub = keywords_global
   keywords_1 = ' '.join(keywords_sub)
   asso_word_1 = ' '.join(asso_word)

   return render_template('tem.html',keywords_2=keywords_1, asso_words_2=asso_word_1)

   #keywords = ' '.join(keywords)
@app.route('/success/Steam', methods=['POST', 'GET'])
def choose_Steam():
   asso_word = []
   asso_word.append('b')
   model = word2vec.Word2Vec.load("steam_reviews.model")
   for items in keywords_global:
      try:
         model_list = model.most_similar(items)
         for n in range(0, 3):
            asso_word.append(model_list[n][0])
      except KeyError:
         a = "Keyword:"
         b = "not in vocabulary."
         error_text = ' '.join([a,b])
         asso_word.append(error_text)

      # return redirect(url_for('associate'))
   keywords_sub = keywords_global
   keywords_1 = ' '.join(keywords_sub)
   asso_word_1 = ' '.join(asso_word)

   return render_template('tem.html', keywords_2=keywords_1, asso_words_2=asso_word_1)

   #return redirect(url_for('associate', asso_word = asso_word))

@app.route('/associate/<keywords>')
def associate(keywords):

   return keywords







if __name__ == '__main__':
   app.run(debug = True)