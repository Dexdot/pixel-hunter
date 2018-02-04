const KeyCode = {
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  ESC: 27,
  ENTER: 13
};

export const KeyPress = {
  isEsc: (e) => {
    return e.keyCode === KeyCode.ESC;
  },
  isEnter: (e) => {
    return e.keyCode === KeyCode.ENTER;
  },
  isLeftArrow: (e) => {
    return e.keyCode === KeyCode.LEFT_ARROW;
  },
  isRightArrow: (e) => {
    return e.keyCode === KeyCode.RIGHT_ARROW;
  },
  isAltLeftArrow: (e) => {
    return e.keyCode === KeyCode.LEFT_ARROW && e.altKey;
  },
  isAltRightArrow: (e) => {
    return e.keyCode === KeyCode.RIGHT_ARROW && e.altKey;
  }
};

export function resizeImage(img) {
  const parentWidth = img.parentNode.clientWidth;
  const parentHeight = img.parentNode.clientHeight;

  const imgWidth = img.naturalWidth;
  const imgHeight = img.naturalHeight;

  if (imgWidth > imgHeight) {
    img.width = parentWidth;
  } else {
    img.height = parentHeight;
  }
}

export default function getElementByTemplate(str) {
  const template = document.createElement(`template`);
  template.innerHTML = str;
  const clone = template.content.cloneNode(true);
  return clone;
}
