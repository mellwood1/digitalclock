// display the current time

function currentTime() {
    let theTime = new Date();
    let hours = theTime.getHours();
    let minutes = theTime.getMinutes();
    let seconds = theTime.getSeconds();
    let theDay = theTime.getDay();
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];


    let ampm = "AM";
    if (hours >= 12) {
        ampm = "PM";
    }

    if (hours > 12) {
        hours = hours % 12;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    } 

    document.getElementById("day").innerHTML = days[theDay];
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
    document.getElementById("ampm").innerHTML = ampm;
  
    let evenSecond = seconds % 2;

    if (evenSecond === 0) {
        document.getElementById("c1").style.color = "red";
        document.getElementById("c2").style.color = "red";
    } 
    else { 
        document.getElementById("c1").style.color = "black";
        document.getElementById("c2").style.color = "black";
    }
}

// set interval for time
setInterval(() => {
    currentTime();
}, 1000);

window.onload = currentTime();
