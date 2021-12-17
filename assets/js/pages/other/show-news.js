console.log("show news loaded")

var show_news_slider = new Swiper(".show-news-slider .swiper", {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 0,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});