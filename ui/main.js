console.log("Hi. I am main.js.");
$(document).ready(function() {
    $(".pill").click(function() {
        $(".pill").removeClass("active");
        $(this).addClass("active");
    });

    $("button").click(function(e){
    	$("#about").toggleClass("overlay");
    });
});

