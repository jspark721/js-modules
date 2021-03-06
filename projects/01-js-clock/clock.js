function getClock() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let ampm = hour < 12 ? "AM" : "PM";

  //making it a 12-hour clock format
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour === 0 ? 12 : hour;
  // add 0 before min & sec if it's less than 10
  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;

  let time = `${hour}:${min}:<span class="sec">${sec}</span> ${ampm}`;

  document.getElementById("time").innerHTML = time;

  setTimeout(getClock, 1000); //update every second
}

getClock();
