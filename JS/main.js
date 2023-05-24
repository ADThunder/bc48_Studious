$(window).scroll(function() {
    position = $(window).scrollTop();
    console.log(position)
    if(position > 10){
        $('.header__bottom').addClass('header__fixed')
    } else {
        $('.header__bottom').removeClass('header__fixed')
    }
});