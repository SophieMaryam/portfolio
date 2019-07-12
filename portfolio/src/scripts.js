// <!-- jQuery Slick --> 
  $(document).ready(() => {

    $(window).scroll( () => {
      let scroll = $(window).scrollTop();
      let offset = $('.cover').offset().top; 
      let height = $('.cover').height(); 
      if (scroll > offset + height) {
        $('.nav-link').css("color","black");
        $('.navbar-brand').css("color","black");
      } else {
        $('.nav-link').css("color","white");
        $('.navbar-brand').css("color","white");
      }
    });
  });