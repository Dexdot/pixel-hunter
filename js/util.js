const KeyCode = {
  leftArrow: 37,
  rightArrow: 39,
  esc: 27,
  enter: 13
};

const KeyPress = {
  isEsc: (e) => {
    return e.keyCode === KeyCode.esc;
  },
  isEnter: (e) => {
    return e.keyCode === KeyCode.enter;
  },
  isLeftArrow: (e) => {
    return e.keyCode === KeyCode.leftArrow;
  },
  isRightArrow: (e) => {
    return e.keyCode === KeyCode.rightArrow;
  },
  isAltLeftArrow: (e) => {
    return e.keyCode === KeyCode.leftArrow && e.altKey;
  },
  isAltRightArrow: (e) => {
    return e.keyCode === KeyCode.rightArrow && e.altKey;
  },
};

export default {
  KeyPress,
  getElementByTemplate: (str) => {
    const template = document.createElement(`template`);
    template.innerHTML = str;
    const clone = template.content.cloneNode(true);
    return clone;
  }
};
