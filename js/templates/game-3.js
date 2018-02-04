import getElementByTemplate from "../util";
import {resizeImage} from "../util";
import data from "../data/data";

import header from "../blocks/header";
import footer from "../blocks/footer";
import levelStats from "../blocks/level-stats";

import screen from "../screen";
import getGameTwo from "./game-2";
import getStats from "./stats";

const gameOption = `
  ${data.levels[`3`].answers.map((answer, i) => `
    <div class="game__option">
      <img src="${answer}" alt="Option ${i + 1}">
    </div>`).join(``)}
`;

export default function getGameThree() {
  const elem = getElementByTemplate(`
    ${header(data.initialState)}
    <div class="game">
      <p class="game__task">${data.levels[`3`].question}</p>
      <form class="game__content  game__content--triple">
        ${gameOption}
      </form>
      <div class="stats">
        ${levelStats(data.stats)}
      </div>
    </div>
    ${footer}`);

  const form = elem.querySelector(`form.game__content`);
  const onImageClick = () => {
    screen.show(getStats());
  };
  form.addEventListener(`click`, onImageClick);

  const back = elem.querySelector(`.header__back`);
  back.addEventListener(`click`, () => {
    screen.show(getGameTwo());
  });

  const images = elem.querySelectorAll(`.game__option > img`);
  for (let img of images) {
    img.addEventListener(`load`, () => {
      resizeImage(img);
    });
  }

  return elem;
}
