
 $(document).ready(function() { 
    var button = $('#button-up');	
    $(window).scroll (function () {
      if ($(this).scrollTop () > 350) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
  });	 
  button.on('click', function(){
  $('body, html').animate({
  scrollTop: 0
  }, 800);
  return false;
  });		 
  });


//   



  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1000);
    return false;
  });


//! Смена темы
if(!localStorage.theme) localStorage.theme ="light"
document.body.className = localStorage.theme
toggleThemeBtn.innerText = document.body.classList.contains("dark_theme") ? "Тёмная тема" : "Светлая тема"

  toggleThemeBtn.onclick = () => {
  document.body.classList.toggle("dark_theme")
  toggleThemeBtn.innerText = document.body.classList.contains("dark_theme") ? "Тёмная тема" : "Светлая тема"
  localStorage.theme = document.body.className || "light"
 }


//  ! Смена темы для мобилки

toggleThemeBtnMobile.onclick = () => {
  document.body.classList.toggle("dark_theme")
  toggleThemeBtnMobile.innerText = document.body.classList.contains("dark_theme") ? "Тёмная тема" : "Светлая тема"
  localStorage.theme = document.body.className || "light"
 }
