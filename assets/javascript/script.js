var hoverText = "";

$(".logo").hover(function(){
    hoverText = $(".logo").text();
    console.log("hoverText",hoverText);
    $("#myName").text("The Freck");
}, function(){
    $("#myName").text(hoverText);
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

