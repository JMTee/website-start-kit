
(function () {


$("a.link-text").click(function(){

  var linkText = $(this).html();
$("#text").html(linkText);


});

 var x = 5; 
 var y = 6; 
var z = x + y;

if(z > 6){
$("#sum").html(z);
}

})();



