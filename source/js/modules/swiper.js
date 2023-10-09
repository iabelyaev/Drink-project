const swiper = document.querySelector('.swiper-slider');

if (swiper) {
  const swiperList = document.querySelector('.swiper-slider__list');
  const swiperItems = document.querySelectorAll('.swiper-slider__item');
  const paginationItems = document.querySelectorAll('.swiper-slider__pagination-item');

  const prevButton = swiper.querySelector('.swiper-slider__arrow--prev');
  const nextButton = swiper.querySelector('.swiper-slider__arrow--next');

  let currentSlideIndex = 0

  function setButtonDisabled () {
    currentSlideIndex <= 0 ? prevButton.setAttribute('disabled', '') : prevButton.removeAttribute('disabled');
    currentSlideIndex + 1 >= swiperItems.length ? nextButton.setAttribute('disabled', '') : nextButton.removeAttribute('disabled');
  }

  function setPaginationItem () {
    paginationItems.forEach(button => button.classList.remove('swiper-slider__pagination-item--active'))
    paginationItems[currentSlideIndex].classList.add('swiper-slider__pagination-item--active')
  }

  function setCurrentSlide () {
    swiperList.style = `transform: translateX(-${currentSlideIndex * 100}%)`
    swiperItems.forEach((item) => {
      item.classList.remove('swiper-slider__item--current')
    })
    swiperItems[currentSlideIndex].classList.add('swiper-slider__item--current')
  }

  function showSlide () {
    setButtonDisabled();
    setPaginationItem();
    setCurrentSlide();
  }

  function showSlideTo (index) {
    currentSlideIndex = index;
    showSlide();
  }

  function buttonNextHandler () {
    currentSlideIndex++
    showSlide()
  }

 function buttonPrevHandler () {
    currentSlideIndex--
    showSlide()
  }

  function initSlider () {
    paginationItems.forEach((item, index) => item.querySelector('.swiper-slider__pagination-button').addEventListener('click', () => showSlideTo(index)))
    nextButton.addEventListener('click', buttonNextHandler);
    prevButton.addEventListener('click', buttonPrevHandler)
    showSlide();
  }

  initSlider();
}
