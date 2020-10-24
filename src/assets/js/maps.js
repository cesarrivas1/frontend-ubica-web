$( document ).ready(main);
$( document ).ready(()=>{
    main();
    $( ".map-container" ).hide();
});  
var contador = 1;

function main(){
    $('#search-input').click(function(){
        if( contador == 1){
            $( ".map-container" ).css( "top", '0' );
            $( ".map-container" ).hide();

            contador=0;
        }
        else{
            $('.map-container').css('top', '300');
            $('.map-container').show();
            contador=1;
        }
    });
}
