// Карусель
//Doc : https://pawelgrzybek.github.io/siema/
const mySiema = new Siema({
  duration: 350,
});

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());

// Анимация
//Doc css : https://daneden.github.io/animate.css/
//Doc js : https://wowjs.uk/docs.html

new WOW().init();

//Cкролинг страницы
//Doc : http://dontforget.pro/javascript/plavnyiy-skrolling-k-elementu-na-jquery/

$(document).ready(function () {
  $('.go_to').click(function () { // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
  });
});

//Прилоадер страницы

document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById('page-preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 3000);

}






