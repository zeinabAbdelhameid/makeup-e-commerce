window.onscroll = function() {myFunction()};

var navbar = document.getElementsByClassName('navbar');
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
$('.slider-area').slick({
Infinit: true,	
dots: true,	
  centerMode: true,
 slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
	 lazyLoad: 'ondemand',

});


$('.mac-brand').slick({
  infinite: true,
	centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoPlay: true,
	autoplaySpeed: 2000,
	 lazyLoad: 'ondemand',
	
});
$(document).ready(function(){
  $("#here").click(function(){
	  $("#here").animate({fontSize: '3em'});
					   
	  
  });
	});
$('.essence-brand').slick({
  centerMode: true,
  dots: true,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 5000,	
  
});
$('.catrice-brand').slick({
Infinit: true,	
dots: true,	
  centerMode: true,
 slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
	 lazyLoad: 'ondemand',

});
