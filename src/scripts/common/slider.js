module.exports = function() {
  var slides = [];

  const $allTextSlides = $('.slider__description-item');
  const $allPrevSlides = $('.slider__button-prev-item ');
  const $allNextSlides = $('.slider__button-next-item');
  const $allBigSlides = $('.slider__current-item');
  const slidesCount = $allBigSlides.toArray().length - 1;

  var currentSlideBig = 0,
    currentSlidePrev = slidesCount,
    currentSlideNext = 1;
  console.log(
    currentSlidePrev + ' ' + currentSlideBig + ' ' + currentSlideNext
  );

  function slideInit() {
    for (let index = 0; index <= slidesCount; index++) {
      $($allTextSlides[index]).css({
        opacity: 0
      });
      $($allBigSlides[index]).css({
        opacity: 0
      });
      $($allPrevSlides[index]).css({
        opacity: 0
      });
      $($allNextSlides[index]).css({
        opacity: 0
      });
    }
    $($allTextSlides[currentSlideBig]).css({
      opacity: 1
    });
    $($allBigSlides[currentSlideBig]).css({
      opacity: 1
    });
    $($allPrevSlides[currentSlidePrev]).css({
      opacity: 1
    });
    $($allNextSlides[currentSlideNext]).css({
      opacity: 1
    });
  }

  function slideLimiter(eq) {
    if (eq > slidesCount) {
      return 0;
    } else if (eq < 0) {
      return slidesCount;
    } else {
      return eq;
    }
  }

  function slideHide() {
    $($allTextSlides[currentSlideBig]).css({
      opacity: 0
    });
    $($allBigSlides[currentSlideBig]).css({
      opacity: 0
    });
    $($allPrevSlides[currentSlidePrev]).css({
      opacity: 0
    });
    $($allNextSlides[currentSlideNext]).css({
      opacity: 0
    });
  }
  function slideShow() {
    $($allTextSlides[currentSlideBig]).css({
      opacity: 1
    });
    $($allBigSlides[currentSlideBig]).css({
      opacity: 1
    });
    $($allPrevSlides[currentSlidePrev]).css({
      opacity: 1
    });
    $($allNextSlides[currentSlideNext]).css({
      opacity: 1
    });
  }

  slideInit();

  $('.slider__button--prev').click(function(e) {
    console.log('prev');
    e.preventDefault();
    slideHide();
    currentSlidePrev = slideLimiter(currentSlidePrev - 1);
    currentSlideBig = slideLimiter(currentSlideBig - 1);
    currentSlideNext = slideLimiter(currentSlideNext - 1);
    slideShow();
    console.log(
      currentSlidePrev + ' ' + currentSlideBig + ' ' + currentSlideNext
    );
  });
  $('.slider__button--next').click(function(e) {
    console.log('next');
    e.preventDefault();
    slideHide();
    currentSlidePrev = slideLimiter(currentSlidePrev + 1);
    currentSlideBig = slideLimiter(currentSlideBig + 1);
    currentSlideNext = slideLimiter(currentSlideNext + 1);
    slideShow();
    console.log(
      currentSlidePrev + ' ' + currentSlideBig + ' ' + currentSlideNext
    );
  });
  // btnNext.addEventListener('click', function() {
  //   currentSlide = slideLimiter(currentSlide + 1);
  //   //showingSlide.classList.add('animate');
  //   fillSlider();
  //   //showingSlide.classList.remove('animate');
  // });

  // btnPrev.addEventListener('click', function() {
  //   currentSlide = slideLimiter(currentSlide - 1);
  //   fillSlider();
  // });
};
