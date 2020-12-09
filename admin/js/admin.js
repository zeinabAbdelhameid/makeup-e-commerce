(function($) {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

 

})(jQuery);

$(function(){
  $('.months li .bar').each(function(key,bar){
	  var percentage = $(this).data('percentage');
	  $(this).animate({
		  'height' : percentage + '%'
	  },1000);
  });
  });