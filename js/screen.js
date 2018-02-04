export default {
  show: (screenNode) => {
    const mainScreen = document.querySelector(`main`);
    mainScreen.innerHTML = ``;
    mainScreen.appendChild(screenNode);
  }
};
