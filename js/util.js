const KeyCode = {
  leftArrow: 37,
  rightArrow: 39,
  esc: 27,
  enter: 13
};

const KeyPress = {
  isEscPress: (e) => {
    return e.keyCode === KeyCode.esc;
  },
  isEnterPress: (e) => {
    return e.keyCode === KeyCode.enter;
  },
  isLeftArrowPress: (e) => {
    return e.keyCode === KeyCode.leftArrow;
  },
  isRightArrowPress: (e) => {
    return e.keyCode === KeyCode.rightArrow;
  },
  isAltLeftArrowPress: (e) => {
    return e.keyCode === KeyCode.leftArrow && e.altKey;
  },
  isAltRightArrowPress: (e) => {
    return e.keyCode === KeyCode.rightArrow && e.altKey;
  },
};

export default {
  KeyPress
};
