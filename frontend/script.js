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
    //document.getElementById("digital-clock").style.color = "black";

    console.log("Called Clock Update")
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


// api url
const api_url =
    "http://localho.st:5000/";

// Defining async function
async function getapi() {
    const api_url =
        "http://localho.st:5000/";
    // Storing response
    const response = await fetch(api_url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);

    // Set Timer to 10 sec (10000 ms)
    console.log("Called API")
    setTimeout(getapi, 10000);
}


// Calling that async function
getapi();

// Function to define innerHTML for HTML table
function show(data) {
    let h3_data =
        `${data.msg}`;
    // Setting innerHTML as tab variable
    //document.getElementById("api_data").innerHTML = h3_data;
    document.getElementById("digital-clock").style.color = data.number_color;
}