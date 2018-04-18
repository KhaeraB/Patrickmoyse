$(document).ready(function(){
    $('.burger').click(function(){
        $(this).toggleClass('is-active');
        $('.mobile-menu').toggle();
    });

    $('.mobile-cat').hide();
    $('.icon').click(function(x) {
        var toggleClass = $(this).hasClass('active') ? true : false;
        $('.icon').removeClass('active');
        if(!toggleClass)
            $(this).addClass('active');
        var toggle = $(this).nextUntil('.icon.active');
        toggle.slideToggle();
        $('.mobile-cat').not(toggle).slideUp();
        x.preventDefault();
    })
    }
);