from datetime import datetime, timedelta
from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

app.NEXT_WAKE_UP = None

@app.route('/')
def return_current_clock_state():
    # Scenarios:
    # 0 - 60 mins after wake up show green
    # No wake up or over 60 min past wake up show pink
    # 1 hr prior to wake up show red
    # 15 min piror to wake up show yellow / orange
    # 9pm to 6am show black
    color = "deeppink"
    now = datetime.now()

    if app.NEXT_WAKE_UP:
        delta = (app.NEXT_WAKE_UP - now).total_seconds()/60
        print(delta)

    if now.hour >= 21 or now.hour <= 5:
        color = "black"
        print("decision is sleep mode")
    elif not app.NEXT_WAKE_UP:
        color = "deeppink"
        print("decision is no wake up value set")
    elif delta >=15:
        color = "red"
        print("decision is wake up is over 15 min out")
    elif delta <15 and delta >=0:
        color = "yellow"
        print("decision is wake up is in range")
    elif delta <= 0 and delta >= -60:
        color = "green"
        print("decision is to wake up")
    else:
        print("decision to fall through")

    return {
        "number_color":color,
        "background_color":"grey",
        "next_wakeup":app.NEXT_WAKE_UP
    }

@app.route('/wakeup')
def start_wake_up_routine():
    app.NEXT_WAKE_UP = datetime.now() + timedelta(minutes=60)
    return {"msg":"okkk"}

if __name__ == '__main__':
    app.run()
