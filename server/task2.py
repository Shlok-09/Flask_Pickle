# Normal Flask Working
from flask import Flask,request
app = Flask(__name__)

@app.route('/')
def home():
    return  "Home Page"

@app.route('/demo')
def demo():
    res = {'VALUES':[11,9]}
    return res

@app.route('/query')
def query():
    name = request.args.get('name')
    return '''<h1>Your Name is {} </h1>'''.format(name)


app.run(host='localhost',port = 5000)