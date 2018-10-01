var hoverText = "";

$(".myName").hover(function(){
    hoverText = $(this).text();
    console.log("hoverText",hoverText);
    $(this).text("Freck");
}, function(){
    $(this).text(hoverText);
});




$("#profile").hover(function(){
    hoverText = $("#profile").text();
    console.log("hoverText",hoverText);
    $("#profile").text("Just some stuff about me");
}, function(){
    $("#profile").text(hoverText);
});

$("#contact").hover(function(){
    hoverText = $("#contact").text();
    console.log("hoverText",hoverText);
    $("#contact").text("Lemme know what's on your mind");
}, function(){
    $("#contact").text(hoverText);
});

$("#portfolio").hover(function(){
    hoverText = $("#portfolio").text();
    console.log("hoverText",hoverText);
    $("#portfolio").text("Just some stuff I've worked on");
}, function(){
    $("#portfolio").text(hoverText);
});



/* To Do List

update resume
get a photo
do some bad ass jquery shit magick
fix the screen width on mobile






*/