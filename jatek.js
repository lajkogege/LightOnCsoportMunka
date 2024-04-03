import classNevAdas from "./classNevAdas.js";
import classNevek from "./classNevek.js";
import classRandomizalas from "./classRandomizalas.js";
import htmlosszerak from "./htmlosszerak.js";
import lampaKattint from "./lampaKattint.js";

function jatek() {
  htmlosszerak();
  classRandomizalas(classNevek);
  classNevAdas(classNevek);
  const gombok = $("button");
  for (let i = 0; i < gombok.length; i++) {
    const gomb = gombok.eq(i);
    gomb.on("click", (event) => {
      lampaKattint(event, i, gombok);
    });
  }
}

export default jatek;
