$(document).ready(function(){
  $('.product-list--slider').slick({
    dots: false, 
    infinite: false,
    arrow: true, 
    speed: 500, 
    slidesToShow: 1, 
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
  // $('.product-list--slider-sm').slick({
  //   dots: false, 
  //   infinite: false,
  //   arrow: true, 
  //   speed: 500, 
  //   slidesToShow: 2, 
  //   slidesToScroll: 1, 
  //   prevArrow: '.slick-prev',
  //   nextArrow: '.slick-next',
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       }
  //     },
      
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //       }
  //     }

  //   ]
  // });
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

  const headerOffset = bottomHeader.offsetTop;

  window.addEventListener("scroll", function () {
      if (window.scrollY > headerOffset) {
          bottomHeader.classList.add("fixed-header");
      } else {
          bottomHeader.classList.remove("fixed-header");
      }


     
  });


});
document.addEventListener("DOMContentLoaded", function () {
  // menu-toggle
  const menuButton = document.getElementById("menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const megaMenu = document.querySelector(".main-nav--mega-menu"); 
  const subMenus = document.querySelectorAll(".sub-menu"); 

  menuButton.addEventListener("click", function () {
    
    menuButton.classList.toggle("open");
    mainNav.classList.toggle("open");
    
    
    subMenus.forEach(subMenu => {
      if (subMenu.classList.contains("open")) {
        subMenu.classList.remove("open");
      }
    });

    
    if (megaMenu && megaMenu.classList.contains("sub-menu-open")) {
      megaMenu.classList.remove("sub-menu-open");
    }
  });
});


const menuItems = document.querySelectorAll('.menu-item');

function handleMenuToggle() {
  
  if (window.innerWidth < 768) {
    menuItems.forEach(item => {
      const button = item.querySelector('.nav__btn');
      if (button) {
        button.addEventListener('click', () => {
          document.querySelectorAll('.menu-item-has-children .sub-menu').forEach(subMenu => {
            
            subMenu.classList.remove('open');
          });

          
          const subMenu = item.querySelector('.sub-menu');
       
          
          if (subMenu) {
            subMenu.classList.toggle('open');

            const mainNavHolder = document.querySelector('.main-nav--mega-menu');
            if (mainNavHolder) {
                mainNavHolder.classList.toggle('sub-menu-open');
            }
        }
        });
      }
    });
  }
}


window.addEventListener('DOMContentLoaded', handleMenuToggle);


window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    
    document.querySelectorAll('.menu-item .sub-menu').forEach(subMenu => {
      subMenu.classList.remove('open');
    });
  }
});

// backbutton
document.addEventListener("DOMContentLoaded", function () {
  
  const backButtons = document.querySelectorAll(".back-btn");
  const megaMenu = document.querySelector(".main-nav--mega-menu");

  
  backButtons.forEach(backButton => {
    backButton.addEventListener("click", function () {
      
      const parentSubMenu = backButton.closest(".sub-menu");
      if (parentSubMenu && parentSubMenu.classList.contains("open")) {
        parentSubMenu.classList.remove("open");
      }

      if (megaMenu && megaMenu.classList.contains("sub-menu-open")) {
        megaMenu.classList.remove("sub-menu-open");
      }
    });
  });
});
