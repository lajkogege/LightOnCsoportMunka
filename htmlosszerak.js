function htmlosszerak() {
  const tarolo = $(".gomb-tarolo");
  tarolo.html("<button></button>");
  for (let index = 0; index < 8; index++) {
    tarolo.append("<button></button>");
  }
}

export default htmlosszerak;
