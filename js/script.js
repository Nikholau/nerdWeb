console.log('teste');

var carrosselElemento = document.querySelector('.swiper-container');

if (carrosselElemento) {
  var swiper = new Swiper(carrosselElemento, {
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var barraCarrossel = document.querySelector('.swiper-scrollbar');
  if (barraCarrossel) {
    barraCarrossel.style.height = '30px';
  }
}

var containerWidth = window.innerWidth * 0.6;
var padding = containerWidth * 0.2; 
containerWidth -= padding * 2; 
swiper.$el.css('width', containerWidth + 'px');

var paginationSpacing = 30; 
swiper.pagination.$el.css('margin-bottom', paginationSpacing + 'px');
