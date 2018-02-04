export default (stats) => {
  let str = ``;
  for (const val of stats) {
    str += `<li class="stats__result stats__result--${val[1]}"></li>`;
  }
  return str;
};
