function Time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    // Variable to store AM / PM
    var period = "";
    // Assigning AM / PM according to the current hour
    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }
    // Converting the hour in 12-hour format
    if (hour == 0) {
        hour = 12;
    } else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }

    hour = update(hour);
    minute = update(minute);
   
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " " + period;
    document.getElementById("digital-clock").style.color = "black";
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);
}
// Function to update time elements if they are less than 10
// Append 0 before time elements if they are less than 10
function update(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}
Time();