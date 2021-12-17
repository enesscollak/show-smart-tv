console.log("main page loaded");

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

var trailer = new Swiper(".trailer .swiper", {
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
});

var series = new Swiper(".series .swiper", {
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
});

var programs = new Swiper(".programs .swiper", {
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
});