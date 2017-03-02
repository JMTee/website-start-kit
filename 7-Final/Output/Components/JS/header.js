
//This is the IIFE
(function(){

//the click event of all of the a tags in an element that has a class nav and custom

$(".nav.custom a").click(function(){

//"this" represents the current a tag that's being clicked
// this code selects the "href" attribute of the a tag and assigns it to a variable
 var hashValue =$(this).attr("href");

//this checks if it is empty
 if(hashValue !=""){
    
// this makes sure to remove the "Active" class to all a tags under div that has the class of "nav" and customs  
 $(".nav.custom  a").parent().removeClass("active");

// this adds the active class to the parent of the current element that is being clicked.
 $(this).parent().addClass("active");
 }



});

  
  
})();