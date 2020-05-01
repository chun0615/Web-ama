$(function(){
   $('.timeline-nav').slick({ //當時間軸被點擊
      slidesToShow: 7, //輪播顯示個數
      slidesToScroll: 1,//輪播捲動個數
      asNavFor: '.timeline-slider', //跟隨timeline-slider
      centerMode: false,
      focusOnSelect: true,
       mobileFirst: true,
      arrows: false,
      infinite:false, //重複輪播
       responsive: [
           {
          breakpoint: 768,
          settings: {
            slidesToShow: 8,
           }
          },
         {
          breakpoint: 0,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        }
     ]
  });

   $('.timeline-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.timeline-nav',
      centerMode: true,
      cssEase: 'ease',
       edgeFriction: 0.5,
       mobileFirst: true,
       speed: 500,
       responsive: [
         {
          breakpoint: 0,
          settings: {
              centerMode: false
          }
        },
           {
          breakpoint: 768,
          settings: {
              centerMode: true
          }
        }
     ]
  });

});
