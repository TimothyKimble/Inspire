function currentTime() {
  let date = new Date(); /* creating object of Date class */
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let midday = "AM";
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  midday = (hour >= 12) ? "PM" : "AM";
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + ' ' + midday; /* adding time to the div */
  let t = setTimeout(function () { currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

export default class Clock {
  constructor() {


    currentTime()
  }
}