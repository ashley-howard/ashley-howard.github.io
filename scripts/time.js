const schedule = document.getElementById("schedule");
var today = new Date();
var offset = today.getTimezoneOffset();
var h = (today.getHours() - Math.abs((offset / 60)));
var m = today.getMinutes();
var time;
var plan;

if (m < 10) {
    time = h + ":0" + m;
} else {
    time = h + ":" + m;
}

if (h >= 20 & h <= 23) {
    plan = "chilling out";
}
else if (h >= 19) {
    plan = "eating";
}
else if (h >= 14) {
    plan = "coding";
}
else if (h >= 13) {
    plan = "having another coffee";
}
else if (h >= 10) {
    plan = "coding";
}
else if (h == 9 && m <= 30) {
    plan = "having breakfast";
}
else if (h == 9 && m >= 31) {
    plan = "having coffee";
}
else {
    plan = "asleep";
}

schedule.innerText = "(It's " + time + " so I'm probably " + plan + ")";