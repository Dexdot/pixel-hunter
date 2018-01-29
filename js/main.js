import util from '../js/util';

let screenIndex = 0;
const mainScreen = document.querySelector(`main.central`);
const screens = document.querySelectorAll(`template`);
const showScreen = (i = 0) => {
  mainScreen.innerHTML = screens[i].innerHTML;
};
const prevScreen = () => {
  if (screenIndex === 0) {
    showScreen(0);
  } else {
    showScreen(--screenIndex);
  }
};
const nextScreen = () => {
  if (screenIndex === screens.length - 1) {
    showScreen(screens.length - 1);
  } else {
    showScreen(++screenIndex);
  }
};
const onKeydown = (e) => {
  if (util.KeyPress.isAltLeftArrowPress(e)) {
    prevScreen();
  } else if (util.KeyPress.isAltRightArrowPress(e)) {
    nextScreen();
  }
};


showScreen(screenIndex);
document.addEventListener(`keydown`, onKeydown);

