class CountdownTimer {
  constructor({ d, h, m, s }, targetDate) {
    this.d = d;
    this.h = h;
    this.m = m;
    this.s = s;
    this.targetDate = targetDate.getTime();

    this.updateTimer();
    this.startTimer();
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  updateTimer() {
    const { days, hours, mins, secs } = this.getTimeComponents(
      this.targetDate - Date.now()
    );

    this.d.textContent = days;
    this.h.textContent = hours;
    this.m.textContent = mins;
    this.s.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  startTimer() {
    setInterval(() => {
      this.updateTimer();
    }, 1000);
  }
}

const refs = {
  timer: document.querySelector("#timer-1"),
  d: document.querySelector('span[data-value="days"]'),
  h: document.querySelector('span[data-value="hours"]'),
  m: document.querySelector('span[data-value="mins"]'),
  s: document.querySelector('span[data-value="secs"]'),
};

const targetDate = new Date("Jan 1, 2021");
const timer = new CountdownTimer(refs, targetDate);
