"use strict";

class Carousel {
  slides = [
    {
      id: 0,
      title: "BEST LAPTOP DEALS",
      img: "./assets/images/default-slide-img.jpg"
    },
    {
      id: 1,
      title: "BEST HEADPHONES DEALS",
      img: "./assets/images/default-slide-img.jpg"
    },
    {
      id: 2,
      title: "BEST SPEAKERS DEALS",
      img: "./assets/images/default-slide-img.jpg"
    }
  ];

  constructor(element) {
    this.el = element;
    const baseComponents = `
        <div id="mainCarousel" class="main-carousel carousel slide">
            <ol class="carousel-indicators">
                <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
                <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
                <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
            </ol>
            <div class="carousel-inner">
                <!--Вот здесь будет активный слайд-->
            </div>

            <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
        </div>`;

    this.el.innerHTML = baseComponents; // вставляем верстку основы компоненты
    let slideId = this.slides[0].id; //слайд по умолчанию - 0
    const slideLength = this.slides.length;
    this.buildSlide(slideId);
    this.el.addEventListener("click", event =>
      this.onClick(event, slideId, slideLength)
    );
  } //к конструктору

  onClick(event, slideId, slideLength) {
    const target = event.target;
    let currentSlideId = +this.el.querySelector(".carousel-inner").dataset
      .currentSlideId;
    switch (target.className) {
      case "carousel-control-next":
        let nextSlideId = currentSlideId + 1;
        if (nextSlideId == slideLength) {
          nextSlideId = 0;
        }
        this.buildSlide(nextSlideId);
        break;
      case "carousel-control-prev":
        let prevSlideId = currentSlideId - 1;
        if (prevSlideId < 0) {
          prevSlideId = slideLength - 1;
        }
        this.buildSlide(prevSlideId);
        break;
      case "carousel-indicator":
        slideId = target.getAttribute("data-slide-to");
        this.buildSlide(slideId);
        break;
    }
  }
  buildSlide(slideId) {
    const carouselInner = this.el.querySelector(".carousel-inner");
    carouselInner.innerHTML = `
    <div class="carousel-item active">
        <img src="${this.slides[slideId].img}" alt="Activelide">
        <div class="container">
            <div class="carousel-caption">
                <h3 class="h1">${this.slides[slideId].title}</h3>
                  <div>
                      <a class="btn" href="#" role="button">
                        View all DEALS
                        <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                      </a>
                  </div>
            </div>
        </div>
    </div>`;
    carouselInner.setAttribute(
      "data-current-slide-id",
      this.slides[slideId].id
    );
    let carouselIndicator = this.el.querySelectorAll(`*[data-slide-to]`);
    for (let i = 0; i < carouselIndicator.length; i++) {
      if (carouselIndicator[i].dataset.slideTo == slideId) {
        carouselIndicator[i].classList.add("active");
      } else {
        carouselIndicator[i].classList.remove("active");
      }
    }
  }
} // к классу
// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
