module.exports = function() {
  var values = {
    prev: {
      start: '-100%',
      norm: '0%',
      end: '100%'
    },
    next: {
      start: '100%',
      norm: '0%',
      end: '-100%'
    }
  };

  const $allTextSlides = $('.slider__description-item');
  const $allPrevSlides = $('.slider__button-prev-item ');
  const $allNextSlides = $('.slider__button-next-item');
  const $allBigSlides = $('.slider__current-item');
  const slidesCount = $allBigSlides.toArray().length - 1;

  var currentSlideBig = 0,
    currentSlidePrev = slidesCount,
    currentSlideNext = 1;

  function slideInit() {
    for (let index = 0; index <= slidesCount; index++) {
      $($allTextSlides[index]).css({
        opacity: 0
      });
      $($allBigSlides[index]).css({
        opacity: 0
      });
      $($allPrevSlides[index]).css({
        transition: 'all 0.5s',
        top: values.prev.start
      });
      $($allNextSlides[index]).css({
        transition: 'all 0.5s',
        top: values.next.start
      });
    }
    $($allTextSlides[currentSlideBig]).css({
      opacity: 1
    });
    $($allBigSlides[currentSlideBig]).css({
      opacity: 1
    });
    $($allPrevSlides[currentSlidePrev]).css({
      top: values.prev.norm
    });
    $($allNextSlides[currentSlideNext]).css({
      top: values.next.norm
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
    // description
    $($allTextSlides[currentSlideBig]).css({
      opacity: 0
    });
    //big picture
    $($allBigSlides[currentSlideBig]).css({
      opacity: 0
    });
    // button prev
    let currentPrev = currentSlidePrev;
    $($allPrevSlides[currentPrev]).on(
      'transitionend webkitTransitionEnd oTransitionEnd',
      function() {
        $($allPrevSlides[currentPrev]).css({
          transition: 'none',
          top: values.prev.start
        });
        $($allPrevSlides[currentPrev]).unbind(
          'transitionend webkitTransitionEnd oTransitionEnd'
        );
      }
    );
    $($allPrevSlides[currentPrev]).css({
      top: values.prev.end
    });
    //button next
    let currentNext = currentSlideNext;
    $($allNextSlides[currentNext]).on(
      'transitionend webkitTransitionEnd oTransitionEnd',
      function() {
        $($allNextSlides[currentNext]).css({
          transition: 'none',
          top: values.next.start
        });
        $($allNextSlides[currentNext]).unbind(
          'transitionend webkitTransitionEnd oTransitionEnd'
        );
      }
    );
    $($allNextSlides[currentNext]).css({
      top: values.next.end
    });
  }

  function slideShow() {
    // description
    $($allTextSlides[currentSlideBig]).css({
      opacity: 1
    });
    //big picture
    $($allBigSlides[currentSlideBig]).css({
      opacity: 1
    });
    // button prev
    $($allPrevSlides[currentSlidePrev]).css({
      transition: 'all 0.5s',
      top: values.prev.norm
    });
    //button next
    $($allNextSlides[currentSlideNext]).css({
      transition: 'all 0.5s',
      top: values.next.norm
    });
  }

  function slideChange(num) {
    slideHide();
    currentSlidePrev = slideLimiter(currentSlidePrev + num);
    currentSlideBig = slideLimiter(currentSlideBig + num);
    currentSlideNext = slideLimiter(currentSlideNext + num);
    slideShow();
  }

  slideInit();

  $('.slider__button--prev').click(function(e) {
    e.preventDefault();
    slideChange(-1);
  });

  $('.slider__button--next').click(function(e) {
    e.preventDefault();
    slideChange(1);
  });
};
