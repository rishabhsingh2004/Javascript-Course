// Exercise 4: JavaScript Date and Time
function getDateTime() {
        var now = new Date();
        var year = now.getFullYear();// get the full year (4 digits)
        var month = now.getMonth() + 1;// get the month (0-11, so we add 1)
        var day = now.getDate();// get the day of the month (1-31)
        var hour = now.getHours();// get the hour (0-23)
        var minute = now.getMinutes();// get the minutes (0-59)
        var second = now.getSeconds();// get the seconds (0-59)
        if (month.toString().length == 1) { 
                month = '0' + month;
        }
        if (day.toString().length == 1) {
                day = '0' + day;
        }
        if (hour.toString().length == 1) {
                hour = '0' + hour;
        }
        if (minute.toString().length == 1) {
                minute = '0' + minute;
        }
        if (second.toString().length == 1) {
                second = '0' + second;
        }
        var dateTime = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
        return dateTime; // return the formatted date and time string
}

// example usage: realtime clock
setInterval(function() {
        currentTime = getDateTime();
        document.getElementById("time").innerHTML = currentTime;
}, 1000);