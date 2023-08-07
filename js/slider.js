const categoryOption =  {
   direction: 'horizontal',
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      0: {
         slidesPerView: 3,
      },
   }
}

const productSwiperOpt =  {
   direction: 'horizontal',
   loop: true,
   slidesPerView : 3,
   effect: 'coverflow',
   coverflowEffect: {
      rotate:0,
      scale:0.5,
      opacity:0.8,
      slideShadows:false
   },
}