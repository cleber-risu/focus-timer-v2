import { Timer } from "./timer.js";
import * as sounds from "./sounds.js";
import { bgMusicEl } from "./elements.js";

export function toggleRunning() {
  Timer.state.isRunning = document.body.classList.toggle("running");

  Timer.countDown();

  sounds.buttonPressAudio.play();
}

export function reset() {
  Timer.state.isRunning = false;

  document.body.classList.remove("running");

  Timer.updateDisplay();

  sounds.buttonPressAudio.play();
}

export function addTime() {
  Timer.state.minutes += 5;
  Timer.updateDisplay();

  sounds.buttonPressAudio.play();
}

export function removeTime() {
  if (Timer.state.minutes >= 5) {
    Timer.state.minutes -= 5;
    Timer.updateDisplay();
  }
  sounds.buttonPressAudio.play();
}

let sound = new Audio();

export function playBgMusicForest(even) {
  sound.pause();
  sound = sounds.forestAudio;
  toggleMusic(even);
}

export function playBgMusicRain(even) {
  sound.pause();
  sound = sounds.rainAudio;
  toggleMusic(even);
}

export function playBgMusicCoffeeshop(even) {
  sound.pause();
  sound = sounds.coffeeShopAudio;
  toggleMusic(even);
}

export function playBgMusicFireplace(even) {
  sound.pause();
  sound = sounds.fireplaceAudio;
  toggleMusic(even);
}

function toggleMusic(even) {
  Timer.state.IsPlayBg = even.target.classList.toggle("selected");
  if (Timer.state.IsPlayBg) {
    sound.play();
  } else {
    sound.pause();
  }
}
