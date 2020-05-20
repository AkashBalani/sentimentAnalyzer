from textblob import TextBlob
from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/analyse/sentiment", methods=['POST'])
def analyse_sentiment():
    print("Data  **************************")
    print(request)
    

    sentence = request.get_json()['sentence']
    polarity = TextBlob(sentence).sentences[0].polarity

    #polarity = 1234
    return jsonify(
        sentence=sentence,
        polarity=polarity
    )




		


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6000)
