from flask import Flask, render_template, jsonify
import numpy as np

app = Flask(__name__)


@app.route('/sendData', methods=['POST'])
def sendData():
    randomValue = np.random.random(size=2).tolist()
    print(randomValue)
    return jsonify(randomValue)


@app.route('/')
def index():
    return render_template('index.html')


app.env = 'development'
app.run(debug=True)
