/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function topmenu1() {
    document.getElementById("listlink-menu1").classList.toggle("show");
  }
  // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
  window.onclick = function(event) {
    if (!event.target.matches('.link-menu')) {
      var dropdowns = document.getElementsByClassName("list_link-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  /* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function topmenu2() {
    document.getElementById("listlink-menu2").classList.toggle("show");
  }
  // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
  window.onclick = function(event) {
    if (!event.target.matches('.link-menu')) {
      var dropdowns = document.getElementsByClassName("list_link-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  /* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function topmenu3() {
    document.getElementById("listlink-menu3").classList.toggle("show");
  }
  // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
  window.onclick = function(event) {
    if (!event.target.matches('.link-menu')) {
      var dropdowns = document.getElementsByClassName("list_link-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }