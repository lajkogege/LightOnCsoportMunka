function classNevAdas(classNevek) {
  const gombok = $("button");
  console.log(gombok);

  for (let i = 0; i < gombok.length; i++) {
    const classNev = classNevek[i];
    gombok.eq(i).addClass(classNev);
  }
}

export default classNevAdas;
