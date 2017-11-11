function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var suffix = "AM";
    if (h>=12) {
    	suffix = "PM";
    	h = h - 12;
    }
    if (h == 0) {
    	h = 12;
    }
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timeInCenter').innerHTML = h + ":" + m + "  " + suffix; //":" + s + 
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
window.onload = startTime;