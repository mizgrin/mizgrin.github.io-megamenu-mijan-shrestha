$(document).ready(function(){
  $('.product-list--slider').slick({
    dots: false, 
    infinite: false,
    arrow: true, 
    speed: 500, 
    slidesToShow: 4, 
    slidesToScroll: 1, 
    prevArrow: '.slick-prev',
    nextArrow: '.slick-next',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }

    ]
  });
  //disable arrow function
  function updateArrowStates() {
    const $slider = $('.product-list--slider');
    const $prevArrow = $('.slick-prev');
    const $nextArrow = $('.slick-next');

    const currentSlide = $slider.slick('slickCurrentSlide');
    const totalSlides = $slider.slick('getSlick').slideCount - $slider.slick('slickGetOption', 'slidesToShow');

    $prevArrow.prop('disabled', currentSlide === 0);
    $nextArrow.prop('disabled', currentSlide >= totalSlides);
}

$('.product-list--slider').on('afterChange', function () {
    updateArrowStates();
});
updateArrowStates();
});
// close announcement function

document.getElementById('close-announcement').addEventListener('click', function () {
  const announcementTape = this.closest('.announcement-tape');
  if (announcementTape) {
    announcementTape.classList.add('hidden');
  }
});


document.addEventListener("DOMContentLoaded", () => {
  // menu-tab
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach(button => {
      button.addEventListener("click", () => {
          tabButtons.forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");

          const targetID = button.getAttribute("data-target");

          tabPanes.forEach(pane => pane.classList.remove("active"));

          const targetPane = document.getElementById(targetID);
          if (targetPane) {
              targetPane.classList.add("active");
          }
      });
  });
});


// Scroll-header-fixed
document.addEventListener("DOMContentLoaded", function () {
  const bottomHeader = document.querySelector(".bottom-header");
  console.log(bottomHeader);
  const headerOffset = bottomHeader.offsetTop;

  window.addEventListener("scroll", function () {
      if (window.scrollY > headerOffset) {
          bottomHeader.classList.add("fixed-header");
      } else {
          bottomHeader.classList.remove("fixed-header");
      }
  });
});