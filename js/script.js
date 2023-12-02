//BurgerMenu
function navToggle() {
	document.getElementById("headerUl").classList.toggle("header__ul_active");
	document.getElementById("headerBackdrop").classList.toggle("header__backdrop_active");
}





//DarkMode
function themeToggle() {
	document.getElementById("html").classList.toggle("_theme");
	const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
	if (isDarkMode){
		localStorage.setItem('darkMode', null);
	}	else {
		localStorage.setItem('darkMode', 'enabled');
	}
}

document.addEventListener('DOMContentLoaded', function(){
	const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

	if (isDarkMode){
		document.getElementById('html').classList.add('_theme')
	}
});





//OWL-carousel settings
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items:1,
		lazyLoad:true,
		loop:true,
		dots: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 1600
	});
  });



//Update year in copyright
document.getElementById("copyright").textContent = new Date().getFullYear();

