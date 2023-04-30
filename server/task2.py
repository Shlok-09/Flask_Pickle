# Normal Flask Working
from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return  "Home Page"

@app.route('/demo')
def demo():
    res = {'VALUES':[11,9]}
    return res


app.run(host='localhost',port = 5000)