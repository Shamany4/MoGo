/* Slide Hide-block */
$("[data-collapse]").on("click", function (event) {
  event.preventDefault();
  let $this = $(this),
    blockId = $this.data('collapse');
  $this.toggleClass("photography_active");
  $(blockId).slideToggle();
});

/*  Animation Arrow  */
$(document).ready(function () {
  $('#photography').click(function () {
    $('.photography-arrow:first').toggleClass('photography-arrow_active');
    return false;
  });
  $('#creativity').click(function () {
    $('.photography-arrow:eq(1)').toggleClass('photography-arrow_active');
    return false;
  });
  $('#webdesign').click(function () {
    $('.photography-arrow:last').toggleClass('photography-arrow_active');
    return false;
  });
});

/* Slick Slaider */
$('.wrap-slaider').slick({
  infinite: true,
  arrows: true,
  autoplaySpeed: 3000,
  autoplay: true,
  slidesToShow: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
      infinite:true,
      dots: true,
      arrows: false
     }
    }]
});

/* Menu Active */
$(document).ready(function(){
  $('.menu-icon').click(function(){
    $('.menu-icon__item').toggleClass('menu-icon__item_active'); 
    return false;
  });
});