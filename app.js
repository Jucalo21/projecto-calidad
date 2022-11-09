$(document).ready(function(){
    //codigos que usan jquery
        //codigo para mostrar y ocultar menu de navegacion con el boton
        configurarInicio();
        $('.myicon').click(function(e){
            $('#navbar ul').toogleClass('lista-sm');
        })

    function configurarInicio(){
        //codigo para saber en donde se encuentra el usuario
        var urlPath=window.location.pathname;
        $('nav a').each(function(){
            var href=$(this).attr('href');
            var indice=urlPath.length - href.length;
            if(urlPath.substring(indice)==href){
                $(this).closest('li').addClass('active');
            }
        })
    }
})