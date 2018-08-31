"use strict";
(function($){
window.addEventListener("load", function(){
    $("#spinner").toggle();
    $.get("https://blog.bm.com.vc/wp-json/wp/v2/posts?_embed&per_page=3", function(a){
        artigos(a);
    })
    .always(function(){
        $("#spinner").toggle();
    });

    function artigos(retorno){
        retorno.forEach(function(el) {
            var artigo = `
            <div class="col-sm-4 item-artigos text-left">
                <img class="img-responsive" src="${el._embedded["wp:featuredmedia"]  ?  el._embedded["wp:featuredmedia"][0].source_url : "https://blog.bm.com.vc/wp-content/themes/bmblog/img/default-img.jpg"}" alt="Blog">
                <h4 class="text-main titulo">${el.title.rendered}</h4>
                <p>
                ${el.excerpt.rendered}
                </p><a href="${el.link}">Saiba Mais</a>
            </div>`; 
            $('#artigos').append(artigo);          
        });
        


    }
      
});
  
})($)