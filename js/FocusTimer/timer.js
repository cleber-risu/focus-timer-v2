import * as el from "./elements.js";
import * as actions from "./actions.js";
import { kichenAudio } from "./sounds.js";

export const Timer = {
  state: {
    minutes: 30,
    seconds: 0,
    isRunning: false,
    IsPlayBg: false,
    countDownId: null,
  },
  // start
  start(minutes, seconds) {
    this.state.minutes = minutes;
    this.state.seconds = seconds;

    this.updateDisplay();

    this.registerControls();
  },
  // countDown
  countDown() {
    clearInterval(this.state.countDownId);

    if (!this.state.isRunning) return;

    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);

    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }

    if (minutes < 0) {
      actions.reset();
      kichenAudio.play();
      return;
    }

    this.updateDisplay(minutes, seconds);

    this.state.countDownId = setTimeout(() => this.countDown(), 1000);
  },
  // updateDisplay
  updateDisplay(minutes, seconds) {
    minutes = minutes ?? this.state.minutes;
    seconds = seconds ?? this.state.seconds;

    el.minutes.textContent = String(minutes).padStart(2, "0");
    el.seconds.textContent = String(seconds).padStart(2, "0");
  },
  // registerControls
  registerControls() {
    el.controls.addEventListener("click", (event) => {
      const action = event.target.dataset.action;

      if (typeof actions[action] != "function") return;

      actions[action]();
    });
    el.bgMusicEl.addEventListener("click", (event) => {
      const action = event.target.dataset.action;

      if (typeof actions[action] != "function") return;

      actions[action](event);
    });
    el.bgMusicEl.addEventListener("focusout", (event) => {
      event.target.classList.remove("selected");
    });
  },
};
