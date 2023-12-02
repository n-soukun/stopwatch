let time = 0;
let flag = 0;

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

setInterval(()=>{
  setTime(time + flag);
},10);

function z(num) {
  return `0${~~num}`.slice(-2);
}

function setTime(num) {
  time = num;

  const hour = z(num / 6000);
  const min = z(num % 6000 / 100);
  const sec = z(num);
  const text = hour + ":" + min + ":" + sec;

  const elm = document.getElementById("time");
  elm.textContent = text;
}

function start() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  flag = 1;
}

function stop() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  flag = 0;
}

function reset(){
  stop();
  setTime(0);
}
