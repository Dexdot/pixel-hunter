import getElementByTemplate from "../util";

import {headerBack} from "../blocks/header";
import footer from "../blocks/footer";

import screen from "../screen";
import getGreeting from "./greeting";
import getGameOne from "./game-1";

export default function getRules() {
  const elem = getElementByTemplate(`
    <header class="header">
      ${headerBack}
    </header>
    <div class="rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится 30 секунд.<br>
        Ошибиться можно не более 3 раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>
    ${footer}`);

  const input = elem.querySelector(`.rules__input`);
  const button = elem.querySelector(`.rules__button`);

  input.addEventListener(`keyup`, () => {
    button.disabled = input.value.length === 0;
  });
  button.addEventListener(`click`, () => {
    screen.show(getGameOne());
  });

  const back = elem.querySelector(`.header__back`);
  back.addEventListener(`click`, () => {
    screen.show(getGreeting());
  });

  return elem;
}
