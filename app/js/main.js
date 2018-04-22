$(document).ready(function() {
    $(".burger").on("click", function() {
        $(this).toggleClass('is-active');
        $("nav ul").toggleClass("showing");
    });

    $("#catIcon span").on("click", function() {
        $(this).toggleClass('active');
        $(".sousCat ul").toggleClass("showingCat");
    });
    });
