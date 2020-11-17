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
	dots: true,
	autoplay: true,
	 infinite: true,
  speed: 2000,
  fade: true,
  
});
$('.end').slick({
	dots: true,
	slidesToShow: 3,
  slidesToScroll: 1,
	autoPlay: true,
});

$('.mac-brand').slick({
 Infinit: true,	
dots: true,	
  centerMode: true,
 slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
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
$(document).ready(function(){
	$(document).on("click",".fas",function(){
		
	
		$(this).toggleClass("fav");
	
		
	});
});