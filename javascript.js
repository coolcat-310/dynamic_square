/**
 * Created by juancarlosnavarrete on 12/20/16.
 */
$("#boxGrow").on("click", function() {
    $("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#colorBlue").on("click", function(){
    $("#box").css("background", "blue")
})

$("#fade").on("click", function () {
    $("#box").animate({opacity:"-=.1"}, "fast");
})

$("#reset").on("click", function () {
    $("#box").css("background","orange");
    $("#box").css("opacity","1");
    $("#box").css("height","150px");
    $("#box").css("width","150px");
})