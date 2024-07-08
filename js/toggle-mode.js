let lightMode = true;

const buttonToggle = document.querySelector("#toggle-mode");

buttonToggle.addEventListener("click", (even) => {
  document.body.classList.toggle("dark");

  const mode = lightMode ? "light" : "dark";

  even.currentTarget.querySelector("span").textContent = `ativar ${mode} mode.`;

  lightMode = !lightMode;
});
