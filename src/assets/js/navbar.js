$(document).ready(main);
var contador = 1;
var ancho_pantalla =$(window).width();

function main(){
    $('nav label').click(function(){
        if( contador == 1){
            $( "ul" ).css( "left", '0' );

            contador=0;
        }
        else{
            $('nav').css('position', 'relative');
            $( "ul" ).css( "left", '-120%' );

            contador=1;
        }
    });
}

$(document).ready(back);
function back(){
    $('.li-links').click(function(){
        $( "ul" ).css( "left", '-120%' );
    });
}

$(document).ready(function () {
    $(window).resize(function () {
         cambio();

    });
    
    cambio();
    
    function cambio(){
      if ($(window).width() > 991) {
            $('nav').css('background-color', 'transparent');
            $('nav').css('position', 'relative');
            
        }
        else if($(window).width() <= 991 && contador== 0){
            $('nav').css('background-color', 'transparent');
            $('nav').css('position', 'relative'); 
            $( "ul" ).css( "left", '-120%' );
        }
    }
});

