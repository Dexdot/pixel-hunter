export default {
  show: (newScreen) => {
    const mainScreen = document.querySelector(`main`);
    mainScreen.innerHTML = ``;
    mainScreen.appendChild(newScreen);
  }
};
