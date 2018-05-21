"use strict";
(function($){

    function fadeOutBusca(){
        $("#busca").fadeToggle(100);
    }
    $(".botao-procurar, .fechar-busca, .lupa").on("click", fadeOutBusca);
    $( "#busca" ).dblclick(fadeOutBusca);

})($)