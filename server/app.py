# Main Flask App

from flask import Flask, request, jsonify, make_response
from flask_cors import CORS, cross_origin
import pandas as pd
import pickle
import json
import numpy as np


app = Flask(__name__)
# CORS(app)
cors = CORS(app, resource={
    r"/*":{
        "origins":"http://localhost:3000"
    }
})
# app.config['CORS_HEADERS'] = 'Content-Type'

salarymodel = pickle.load(open("model.pkl","rb"))

class NpEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.integer):
            return int(obj)
        if isinstance(obj, np.floating):
            return float(obj)
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        elif isinstance(obj, np.bool_):             
            return bool(obj)
        return super(NpEncoder, self).default(obj)

def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response

def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/api/salary', methods=['POST'])
@cross_origin(supports_credentials=True)
def predictionsalary():
    json_ = [request.json]
    df = pd.DataFrame(json_)
    predictionsalary = salarymodel.predict(df)[0]
    predictionsalary = json.dumps(predictionsalary, cls=NpEncoder)
    return jsonify({'Prediction': (predictionsalary)})

if __name__ == "__main__":
    app.run(debug=True)