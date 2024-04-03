function classRandmozilas(classNevek) {
  for (let i = 0; i < 9; i++) {
    let random = Math.floor(Math.random() * (9 - i)) + i;
    let csere = classNevek[i];
    classNevek[i] = classNevek[random];
    classNevek[random] = csere;
  }
}

export default classRandmozilas;
