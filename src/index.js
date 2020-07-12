import './styles.css';

const DOM = {
  //   cDays: document.querySelector('[data-value="days"]'),
  //   cHours: document.querySelector('[data-value="hours"]'),
  //   cMins: document.querySelector('[data-value="mins"]'),
  //   cSecs: document.querySelector('[data-value="secs"]'),
  timer1: document.querySelector('#timer-1'),
};

//console.log(DOM.timer1.innerHTML.trim());

let TimeToEnd = new Date();
TimeToEnd.setTime(1595950514000);
// TimeToEnd.setTime(1594568146345);
console.dir(`Time of end: ${TimeToEnd}`);

const terminalId = setInterval(countDownTimer, 1000);

function countDownTimer() {
  let timeNow = Date.now();
  let time = TimeToEnd - timeNow;
  clockRefresher(time);
  // console.log(timeNow);
}

function clockRefresher(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  htmlUpdate(days, hours, mins, secs);
  //   DOM.cDays.textContent = days;
  //   DOM.cHours.textContent = hours;
  //   DOM.cMins.textContent = mins;
  //   DOM.cSecs.textContent = secs;
}

function htmlUpdate(days, hours, mins, secs) {
  DOM.timer1.innerHTML = `<div class="field">
    <span class="value" data-value="days">${days}</span>
    <span class="label">Days</span>
    </div>
    
    <div class="field">
    <span class="value" data-value="hours">${hours}</span>
    <span class="label">Hours</span>
    </div>
    
    <div class="field">
    <span class="value" data-value="mins">${mins}</span>
    <span class="label">Minutes</span>
    </div>
    
    <div class="field">
    <span class="value" data-value="secs">${secs}</span>
    <span class="label">Seconds</span>
    </div>`;
}

/* <div class="timer" id="timer-1"> 1595952000
<div class="field">
  <span class="value" data-value="days">11</span>
  <span class="label">Days</span>
</div>

<div class="field">
  <span class="value" data-value="hours">11</span>
  <span class="label">Hours</span>
</div>

<div class="field">
  <span class="value" data-value="mins">11</span>
  <span class="label">Minutes</span>
</div>

<div class="field">
  <span class="value" data-value="secs">11</span>
  <span class="label">Seconds</span>
</div>
</div> */
