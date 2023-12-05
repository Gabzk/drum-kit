function removeTransition(e) {
  e.target.classList.remove("playing");
}

function playSound(e) {
  const keyCode =
    e.type === "click" ? this.getAttribute("data-key") : e.keyCode;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => {
  key.addEventListener("click", playSound);
  key.addEventListener("transitionend", removeTransition);
});
window.addEventListener("keydown", playSound);
