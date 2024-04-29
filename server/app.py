# from flask import Flask, request, jsonify
# import pickle
# import numpy as np
# # from sklearn.preprocessing import StandardScaler
# import pandas as pd

# categories = ["Category", "Branch", "Percentile"]

# data = pd.read_csv('Book1.csv')
# # scaler = StandardScaler()
# # scaler.fit(data[categories])
# model = pickle.load(open("model.pkl", "rb"))

# app = Flask(__name__)


# @app.route("/predict", methods=['POST'])
# def predict_college():
#     input_data = request.json
#     # input_data["usernameDigitCount"] = len(input_data["usernameDigitCount"])
#     # input_data["userBiographyLength"] = len(input_data["userBiographyLength"])
#     # input_data["usernameLength"] = len(input_data["usernameLength"])
#     input = np.array([input_data[x] for x in categories])
#     input = input.reshape(1, -1)
#     # input = scaler.transform(input)
#     print(input)
#     prediction = model.predict(input)
#     print(prediction, type(prediction))
#     # prediction_probabilities = model.predict_proba(input)

#     return jsonify({ "prediction": prediction.tolist() })

# if __name__ == "__main__":
#     app.run(debug=True)


# from flask import Flask, request, jsonify
# import pickle
# import numpy as np
# import pandas as pd
# # CORS support
# from flask_cors import CORS

# categories = ["Category", "Branch", "Percentile"]

# data = pd.read_csv('Book1.csv')
# # Note: You have commented out the scaler, make sure you handle scaling appropriately if your model requires it.
# model = pickle.load(open("model.pkl", "rb"))

# app = Flask(__name__)
# # Enable CORS for all domains on all routes
# CORS(app)

# @app.route("/predict", methods=['POST'])
# def predict_college():
#     input_data = request.json
#     input = np.array([input_data[x] for x in categories])
#     input = input.reshape(1, -1)
#     # Assuming your model doesn't require scaling based on your comments. If it does, make sure to uncomment and use it.
#     prediction = model.predict(input)
#     # For debugging
#     print(input)
#     print(prediction, type(prediction))
#     return jsonify({ "prediction": prediction.tolist() })

# if __name__ == "__main__":
#     app.run(debug=True)

# from flask import Flask, request, jsonify
# import pickle
# import numpy as np
# import pandas as pd
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all domains on all routes

# categories = ["Category", "Branch", "Percentile"]

# data = pd.read_csv('Book1.csv')
# model = pickle.load(open("model.pkl", "rb"))

# @app.route("/predict", methods=['GET' , 'POST' ])
# def predict_college():
#     input_data = request.json
#     if not input_data:
#         return jsonify({"error": "No input data provided"}), 400
    
#     # Validate input data keys
#     if not all(key in input_data for key in categories):
#         return jsonify({"error": f"Missing one or more required keys: {categories}"}), 400
    
#     # Validate "Percentile" value
#     percentile = input_data["Percentile"]
#     if not isinstance(percentile, (float, int)) or not 0 <= percentile <= 100:
#         return jsonify({"error": "Percentile value must be a float between 0 and 100"}), 400
    
#     input_data = request.json
#     input = [input_data[x] for x in categories]
    
#     # Convert Branch to integer if it's an array of length 1
#     if isinstance(input[1], list) and len(input[1]) == 1:
#         input[1] = input[1][0]
    
#     input = np.array(input)
#     input = input.reshape(1, -1)
    
#     try:
#         prediction = model.predict(input)
#         print("Input:", input)
#         print("Prediction:", prediction, type(prediction))
#         return jsonify({"prediction": prediction.tolist()}), 200
#     except Exception as e:
#         return jsonify({"error": f"Prediction failed: {str(e)}"}), 500

# if __name__ == "__main__":
#     app.run(debug=True)


from flask import Flask, request, jsonify
import pickle
import numpy as np
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains on all routes

categories = ["Category", "Branch", "Percentile"]

data = pd.read_csv('Book1.csv')
model = pickle.load(open("model.pkl", "rb"))

@app.route("/predict", methods=['GET', 'POST'])
def predict_college():
    if request.method == 'GET':
        return jsonify({"message": "Send a POST request with JSON data to get predictions"}), 200

    input_data = request.json
    if not input_data:
        return jsonify({"error": "No input data provided"}), 400
    
    # Validate input data keys
    if not all(key in input_data for key in categories):
        return jsonify({"error": f"Missing one or more required keys: {categories}"}), 400
    
    # Validate "Percentile" value
    percentile = input_data["Percentile"]
    if not isinstance(percentile, (float, int)) or not 0 <= percentile <= 100:
        return jsonify({"error": "Percentile value must be a float between 0 and 100"}), 400
    
    input = [input_data[x] for x in categories]
    
    # Convert Branch to integer if it's an array of length 1
    if isinstance(input[1], list) and len(input[1]) == 1:
        input[1] = input[1][0]
    
    input = np.array(input)
    input = input.reshape(1, -1)
    
    try:
        prediction = model.predict(input)
        print("Input:", input)
        print("Prediction:", prediction, type(prediction))
        return jsonify({"prediction": prediction.tolist()}), 200
    except Exception as e:
        print("Prediction Error:", e)
        return jsonify({"error": f"Prediction failed: {str(e)}"}), 500
    

input_features = ["Marks", "Shift"]

data1 = pd.read_csv('MarksToPercentileFinal.csv')
model1 = pickle.load(open("model1.pkl", "rb"))
    
@app.route("/predictPercentile", methods=['POST'])
def predict_percentile():
    input_data = request.json

    print(input_data)
    # Prepare the input vector for the model, ensuring it matches the expected model input
    input_vector = np.array([int(input_data[x]) for x in input_features])
    input_vector = input_vector.reshape(1, -1)
    # Perform the prediction
    prediction = model1.predict(input_vector)
    # Print input and output for debugging
    print(input_vector)
    print(prediction, type(prediction))
    if prediction[0]>100:
        prediction[0]=100
    return jsonify({"percentile": prediction[0].tolist()})


if __name__ == "__main__":
    app.run(debug=True)