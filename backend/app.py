from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route('/')
def return_current_clock_data():
    return {"clock_color":"blue"}



if __name__ == '__main__':
    app.run()
