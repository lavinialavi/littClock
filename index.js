function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
        h = 12;

    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    var time = h + ":" + m + ":" + s + "" + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();


var x = document.getElementById("all");

function getLocation() {



    function locationNotReceived(positionError){
        console.log(positionError);
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, locationNotReceived, {timeout:0});
       var watch= navigator.geolocation.watchPosition(showPosition, locationNotReceived);
       console.log(watch);
       navigator.geolocation.clearWatch(watch);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


function showPosition(position) {
    x.innerHTML.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
console.log(position);



}


