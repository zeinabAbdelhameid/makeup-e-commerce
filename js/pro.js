
$('.mas-cara').slick({
	
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  
  prevArrow: '<span class="priv-arrow"><i class="fas fa-angle-left"></i></span> ',
  nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span> ',	
  
});
$('.lip-gloss').slick({
	
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
   prevArrow: '<span class="priv-arrow"><i class="fas fa-angle-left"></i></span> ',
  nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span> ',	
  
});
$('.eye-brow').slick({
	
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
   prevArrow: '<span class="priv-arrow"><i class="fas fa-angle-left"></i></span> ',
  nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span> ',	
  
  
});
$('.conc-elar').slick({
  
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
 prevArrow: '<span class="priv-arrow"><i class="fas fa-angle-left"></i></span> ',
  nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span> ',	
  
});
$('.bro').slick({
  
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
 prevArrow: '<span class="priv-arrow"><i class="fas fa-angle-left"></i></span> ',
  nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span> ',	
  
});
$('.powder').slick({
  
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
 prevArrow: '<span class="priv-arrow"><i class="fas fa-angle-left"></i></span> ',
  nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span> ',	
  
});
$(document).ready(function(){
	$(document).on("click","#mm",function(){
		
	
		$(this).toggleClass("fav");
	
		
	});
});
