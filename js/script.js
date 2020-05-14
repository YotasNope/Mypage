var elementTop = $('.Colum3').offset().top;

$(window).scroll(function(){
    if ( $(window).scrollTop() >= elementTop){
        $('body').addClass('.Colum3_fixed');
    }else{
        $('body').removeClass('.Colum3_fixed');
    }
});

$('.btn-menu').on('click' , function(){
    $('nav').toggleClass('.Colum3-toggle');
});

