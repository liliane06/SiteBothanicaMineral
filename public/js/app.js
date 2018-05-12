"use strict";
(function($){

    
    //slick
    $('#c-banner').slick({
        dots: false,
        infinite: true,
        arrows:true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        nextArrow: '<img src="img/seta-cat-right.png" class="seta-right" />"',
		prevArrow: '<img src="img/seta-cat-left.png" class="seta-left" />"',
      });
      


    $('.goesTo, .link-footer').on('click', function (event) {
        console.log(this);
        var $anchor = $(this);

        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top }, 1000, 'swing');

        // Outras AnimaÃ§Ãµes
        // linear, swing, jswing, easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine, easeInExpo, easeInCirc, easeInElastic, easeInBack, easeInBounce, easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutElastic, easeOutBack, easeOutBounce, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInOutElastic, easeInOutBack, easeInOutBounce

    });

    function mostrarIrTopo(e){

        let btn = $('#ir-topo');
        let posY = e.currentTarget.scrollY
        if(posY > 800){
            $(btn).fadeIn(200);
        }
        else{
            $(btn).fadeOut(200);
        }
    }

    function menuLeort(e){
        var header = $('#topo');
        let posY = e.currentTarget.scrollY
        if(posY > 400){
            $(header).addClass('pos-fixed');
        }
        else{
            $(header).removeClass('pos-fixed');
        }
    }

    function bannerSize(){
        var banner = $('#banners');
        var header = $('header').height();
        $(banner).css('min-height', window.innerHeight - header)
    }

    window.addEventListener('scroll', function(e){
        menuLeort(e);
        mostrarIrTopo(e);
    });

    $('.fechar-menu').on('click', function(){
        $('#menu-mob-flutuante').fadeOut(200);
    });

    $('.menu-mob').on('click', function(){
        $('#menu-mob-flutuante').fadeIn(200);
    })

    $('.link-topo').on('click', function(){
        $('.link-topo').removeClass('ativo');
        $(this).addClass('ativo');
        $('#menu-mob-flutuante').fadeOut(200);
    })

    //esse evento acontece quando toda a página é carregada
    window.addEventListener('load', function(){
        $('#loader').fadeOut(200);
        bannerSize();

    })
})($)