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
/** countries governates cities ***/
  function getAJAX(url)
  {
    var results;
    $.ajax
      ({
      type: 'GET', 
      url: url,
      dataType: 'json',
      data: {},
      async:false, //stop untill the ajax request done
      success: function (data) 
      {
        console.log(data);
        results = data;
      },
      error:function(data)
      { 
        console.log(data);
        results = data;
      }
      });
    //console.log(results);
    return results;
  }
  
  var language= $("html").attr("lang"); //get language from html set lang="en" or lang ="ar" if you don't set it
  
    /** countries **/
  var conutriesURL = 'http://api.geonames.org/countryInfoJSON?q=&country=&lang='+language+'&username=abdulnaser_mohsen'; //url that get your conuntries
  var countries = getAJAX(conutriesURL); // the importance of async test without aync or aync is true
  //console.log(countries);
  //console.log(countries.geonames);
  $(countries.geonames).each(function(index,item){
    //console.log(item.countryName , item.geonameId);
    var selectOption = $("<option>")
    selectOption.attr("value",item.geonameId).append(item.countryName);
    $('#countryId').append(selectOption);
  });
  
    /** states **/
  $(document).on("change","#countryId",function(){
    
    $('#stateId option:not(option:first)').remove(); // clear states
    
    var geonameid= $(this).val(); //get country id
    var statesURL = 'http://api.geonames.org/childrenJSON?lang='+language+'&geonameId='+geonameid+'&username=abdulnaser_mohsen'; //url that get your states
    
    var states = getAJAX(statesURL); 
    console.log(states);
    //console.log(states.geonames);
    
    $(states.geonames).each(function(index,item){
      //console.log(item.name , item.geonameId);
      var selectOption = $("<option>")
      selectOption.attr("value",item.geonameId).append(item.name);
      $('#stateId').append(selectOption);
    });
  });
  
  $(document).on("change","#stateId",function(){
    $('#cityId option:not(option:first)').remove(); // clear cities
    
    var geonameid= $(this).val(); //get country id
    var citiesURL = 'http://api.geonames.org/childrenJSON?lang='+language+'&geonameId='+geonameid+'&username=abdulnaser_mohsen'; //url that get your cities
    
    var cities = getAJAX(citiesURL); 
    //console.log(cities);
    //console.log(cities.geonames);
    
    $(cities.geonames).each(function(index,item){
      //console.log(item.name , item.geonameId);
      var selectOption = $("<option>")
      selectOption.attr("value",item.geonameId).append(item.name);
      $('#cityId').append(selectOption);
    });
  });

});