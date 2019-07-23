// <!-- jQuery Slick --> 
  $(document).ready(() => {

    $(window).scroll( () => {
      let scroll = $(window).scrollTop();
      let offset = $("#home").offset().top; 
      let height = $("#home").height(); 
      if (scroll > offset + height - 28) {
        $(".navbar-text").css("color","black");
        // $(".navbar-brand").css("color","black");
      } else {
        $(".navbar-text").css("color","white");
        // $(".navbar-brand").css("color","white");
      }
    });
  });