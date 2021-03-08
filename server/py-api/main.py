from typing import Optional
import spacy
from spacy.lang.nl.stop_words import STOP_WORDS
from string import punctuation
from heapq import nlargest
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import pickle
from summa.summarizer import summarize
import re
import pandas as pd
from sklearn.preprocessing import OneHotEncoder
from collections import Counter

with open('nb_model.pkl', 'rb') as f:
    model = pickle.load(f)

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.options("/summary")
def read_root():
    return {"Hello": "World"}


@app.get("/")
def read_root():
    return {"Hello": "World"}


class Article(BaseModel):
    text: str


@app.post("/summary")
def getSummary(article: Article):
    summ = createSummary(article.text)
    print(summ)
    return {'summary': summ}


stopwords = list(STOP_WORDS)


nlp = spacy.load('nl_core_news_lg')


def readingTime(docs):
    total_words_tokens = [token.text for token in nlp(docs)]
    estimatedtime = len(total_words_tokens)/200
    return round(estimatedtime)


def containsNumbers(sentence):
    return len(re.findall('\d', sentence))


def avgWordLen(sentence):
    if len(sentence.split()) == 0:
        return 0
    return sum(len(word) for word in sentence.split()) / len(sentence.split())


def isQuote(sentence):
    return len(re.findall('\"\w*\"', sentence))


def encodeLabels(ents):
    labels = pd.DataFrame()
    for ent in ents:
        labels.append([ent.label_, ent])
    enc = OneHotEncoder(handle_unknown='ignore')
    if len(labels) != 0:
        enc.fit(labels)
        return pd.DataFrame(enc.transform(labels), colums=enc.get_feature_names())
    return []


def getPos(token):
    return nlp(token).pos


def getWord(token):
    return token.text


def getParameters(sentences, expectedOutcome):
    params = [dict() for x in range(len(sentences))]
    for idx, sentence in enumerate(sentences):
        params[idx]['length'] = len(sentence)
        params[idx]['containsNumbers'] = containsNumbers(sentence)
        params[idx]['avgWordLen'] = avgWordLen(sentence)
        #params[idx]['originalSentence'] = sentence.text
        #params[idx]['labels'] = encodeLabels(sentence.ents)
        #params[idx]['isQuote'] = isQuote(sentence)
        params[idx]['locationInText'] = idx/len(sentences)

        if expectedOutcome is not None:
            if expectedOutcome == '0':
                params[idx]['isExpected'] = None
            else:
                if sentence.text in expectedOutcome:
                    params[idx]['isExpected'] = True
                else:
                    params[idx]['isExpected'] = False

        #posTags = map(getPos, sentence)
        #counter = Counter(list(posTags))
        # for c in counter.most_common():
        #    params[idx]['pos' + str(c[0])] = c[1]

        #wordFreq = map(getWord,sentence)
        # print(list(wordFreq))
        #counter = Counter(list(wordFreq))
        # for c in counter.most_common():
        #    params[idx]['word' + str(c[0])] = c[1]

    return pd.DataFrame(data=params)


def createSummary(articleText):
    summ = summarize(articleText, ratio=0.2, split=True)
    params = getParameters(summ, None)
    pred = model.predict(params)
    res = []
    for i in range(len(pred)):
        if pred[i] == 1:
            res.append(summ[i])
    return res


""" def summarize(articleText):
    docx = nlp(articleText)
    mytokens = [token.text for token in docx]
    word_frequencies = {}
    for word in docx:
        if word.text not in stopwords:
            if word.text not in word_frequencies.keys():
                word_frequencies[word.text] = 1
            else:
                word_frequencies[word.text] += 1
    maximum_frequency = max(word_frequencies.values())

    maximum_frequency = max(word_frequencies.values())

    for word in word_frequencies.keys():
        word_frequencies[word] = (word_frequencies[word]/maximum_frequency)

    sentence_list = [sentence for sentence in docx.sents]
    sentence_scores = {}
    for sent in sentence_list:
        for word in sent:
            if word.text.lower() in word_frequencies.keys():
                if len(sent.text.split(' ')) < 30:
                    if sent not in sentence_scores.keys():
                        sentence_scores[sent] = word_frequencies[word.text.lower()]
                    else:
                        sentence_scores[sent] += word_frequencies[word.text.lower()]

    summarized_sentences = nlargest(
        5, sentence_scores, key=sentence_scores.get)
    final_sentences = [w.text for w in summarized_sentences]
    summary = ' '.join(final_sentences)

    return {
        "summary": summary,
        "readingTimeOriginal": readingTime(articleText),
        "readingTimeSummary": readingTime(summary)
    } """
