const atszinez = (lampa, lampaClassNev) => {
  debugger;
  if (lampaClassNev === "felkapcsolt") {
    lampa.removeClass("felkapcsolt");
    lampa.addClass("lekapcsolt");
  } else {
    lampa.removeClass("lekapcsolt");
    lampa.addClass("felkapcsolt");
  }
};

function lampaKattint(event, i, gombok) {
  const lampa = $(event.target);
  const lampaClassNev = event.target.className;
  atszinez(lampa, lampaClassNev);

  if (i === 4) {
    atszinez(gombok.eq(i - 3), gombok.eq(i - 3).className);
    atszinez(gombok.eq(i + 3), gombok.eq(i + 3).className);
    atszinez(gombok.eq(i - 1), gombok.eq(i - 1).className);
    atszinez(gombok.eq(i + 1), gombok.eq(i + 1).className);
  }
}

export default lampaKattint;
