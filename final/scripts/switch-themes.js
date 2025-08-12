import { loadTheme, toggleTheme } from '../data/theme.mjs';

loadTheme(); // Apply saved theme on page load


function switchImage() {
  let themeButton = document.getElementById("theme-button");
  themeButton.includes = themeButton.src.includes('../images/lightmode.svg') ? '../images/dark-mode.svg' : '../images/lightmode.svg';
}

// Switch theme on button click
document.getElementById('toggle-theme').addEventListener('click', () => {
  toggleTheme();
});

document.getElementById('toggle-theme').addEventListener('click', () => {
  switchImage();
});