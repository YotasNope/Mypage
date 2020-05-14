$(document).ready(function(){
    var altura = $('Colum3').offset().top;
    
    $(window).on('scroll' , function(){
        if ( $(window).scrollTop() > altura){
            $('Colum3').addClass('desplegable');
        }else{
            $('Colum3').removeClass('desplegable');
        }
    });
});