console.log("tv series page loaded")

var sliderThumb = new Swiper(".main-slider .thumb .swiper", {
    spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
  });
  
  var sliderTop = new Swiper(".main-slider .top .swiper", {
    spaceBetween: 10,
    thumbs: {
      swiper: sliderThumb,
    },
  });

  var archive_series = new Swiper(".archive-series .swiper", {
    spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
  });