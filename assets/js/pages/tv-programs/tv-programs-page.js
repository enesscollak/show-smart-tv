console.log("tv programs page loaded")

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

  var archive_programs = new Swiper(".archive-programs .swiper",{
    spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
  });