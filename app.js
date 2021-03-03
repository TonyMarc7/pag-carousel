window.addEventListener("load", function(){
    new Glider(document.querySelector(".carousel_list"), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel_indicador',
        arrows: {
          prev: '.carousel_anterior',
          next: '.carousel_siguiente'
        },
        responsive: [
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },{
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            }
          ]
    });
});