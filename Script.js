/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function topmenu1() {
  document.getElementById("listlink-menu1").classList.toggle("show");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function (event) {
  if (!event.target.matches(".link-menu")) {
    var dropdowns = document.getElementsByClassName("list_link-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function topmenu2() {
  document.getElementById("listlink-menu2").classList.toggle("show");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function (event) {
  if (!event.target.matches(".link-menu")) {
    var dropdowns = document.getElementsByClassName("list_link-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function topmenu3() {
  document.getElementById("listlink-menu3").classList.toggle("show");
}
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function (event) {
  if (!event.target.matches(".link-menu")) {
    var dropdowns = document.getElementsByClassName("list_link-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

window.onload = function () {
  window.cit = [
    " Около 99,86% массы Солнечной системы приходится на само Солнце.",
    "Ближайшая звезда, Проксима Центавра, находится на расстоянии в 4,24 световых года от нас.",
    "Наименее плотной планетой является Сатурн, его плотность ниже плотности воды.",
    "Самой плотной планетой в Солнечной системе является Земля. ",
    "Самый большой в Солнечной системе атмосферный вихрь, Большое Красное пятно на Юпитере, по размерам превосходит Землю. Он бушует уже более 350 лет",
    "На других небесных телах есть криовулканы, которые извергают лёд и воду вместо лавы. Они уже обнаружены на Тритоне, спутнике Нептуна, и Энцеладе, спутнике Сатурна, и на карликовой планете Церера",
    "Споры о наличии воды на Марсе велись давно. После того, как воду там всё-таки нашли, её обнаружили и на других небесных телах. Она есть даже в полярных кратерах Меркурия и на карликовой планете Церера.",
    "Самый крупный в нашей системе ударный кратер — Бассейн Южный Полюс — Эйткен на Луне, размером в 2400 на 2050 километров.",
    "Самая высокая в Солнечной системе гора расположена на Марсе, это древний вулкан Олимп.",
    "В Солнечной системе открыто 205 спутников планет",
  ];
  document.getElementById("citat").innerHTML =
    cit[Math.round(Math.random() * (cit.length - 1) + 0)];
};
