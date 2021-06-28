$('.owl-carousel').owlCarousel({
    loop:true, //loop da imagens
    margin:10,
    nav:true,  //botões de navegações
    responsive:{
        0:{  //0 pixel , colocar 1 elemento na tela
            items:1
        },
        600:{ //600px ou -, colocar 3 elementos na tela
            items:3
        },
        1000:{ //1000px ou -, colocar 5 itens na tela
            items:5
        }
    }
})