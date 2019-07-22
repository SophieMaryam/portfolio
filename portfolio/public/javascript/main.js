// <!-- jQuery Slick --> 
  $(document).ready(() => {

    $(window).scroll( () => {
      let scroll = $(window).scrollTop();
      let offset = $('#home').offset().top; 
      let height = $('#home').height(); 
      if (scroll > offset + height - 28) {
        $('.nav-link').css("color","black");
        $('.navbar-brand').css("color","black");
      } else {
        $('.nav-link').css("color","white");
        $('.navbar-brand').css("color","white");
      }
    });
  });