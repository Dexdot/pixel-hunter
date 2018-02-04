import getElementByTemplate from "../util";
import {resizeImage} from "../util";
import data from "../data/data";

import header from "../blocks/header";
import footer from "../blocks/footer";
import levelStats from "../blocks/level-stats";

import screen from "../screen";
import getGreeting from "./greeting";
import getGameTwo from "./game-2";

const gameOption = `
  ${data.levels[data.initialState.level].answers.map((answer, i) => `
    <div class="game__option">
      <img src="${answer}" alt="Option ${i + 1}">
      <label class="game__answer game__answer--photo">
        <input name="question${i + 1}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question${i + 1}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>`).join(``)}`;

export default function getGameOne() {
  const elem = getElementByTemplate(`
    ${header(data.initialState)}
    <div class="game">
      <p class="game__task">${data.levels[data.initialState.level].question}</p>
      <form class="game__content">
        ${gameOption}
      </form>
      <div class="stats">
        ${levelStats(data.stats)}
      </div>
    </div>
    ${footer}`);

  const form = elem.querySelector(`form.game__content`);
  const onRadioChange = (e) => {
    if (
      form.querySelector(`[name="question1"]:checked`) &&
      form.querySelector(`[name="question2"]:checked`)
    ) {
      screen.show(getGameTwo());
    }
  };
  form.addEventListener(`change`, onRadioChange);

  const back = elem.querySelector(`.header__back`);
  back.addEventListener(`click`, () => {
    screen.show(getGreeting());
  });

  const images = elem.querySelectorAll(`.game__option > img`);
  for (let img of images) {
    img.addEventListener(`load`, () => {
      resizeImage(img);
    });
  }

  return elem;
}
