import getElementByTemplate from "../util";
import footer from "../blocks/footer";
import screen from "../screen";
import getGreeting from "./greeting";

export default function getIntro() {
  const elem = getElementByTemplate(`
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup>
        Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.
      </p>
    </div>
  </div>
  ${footer}`);

  elem.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
    screen.show(getGreeting());
  });

  return elem;
}
