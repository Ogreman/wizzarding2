$(document).ready(function() {
  /*----------Facebook---------*/
  (function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.1";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
  /*----------Welcome---------*/
  $("#wizard-icon").hide();
  $("#welcome-h1").hide();
  $("#welcome-h2").hide();
  $("#welcome-enter").hide();
  $(".container").hide();
  $(".bands").hide();
  $(".venues").hide();
  $(".posters").hide();
  $(".posters-lightbox").hide();
  $(".about").hide();
  $(".contact").hide();
  $(".overlays").hide();
  $("#welcome-h2").fadeIn();
  setTimeout(function() {
    $("#welcome-h1").fadeIn();
  }, 1500);
  setTimeout(function() {
    $("#welcome-enter").fadeIn();
  }, 2500);
  $("#welcome-enter").click(function() {
    $("#wizard-icon-welcome").fadeOut(2500);
    $("#wizard-icon").show();
    $("#evil-laugh").trigger("play");
    $(".welcome").fadeOut();
    $(".container").fadeIn();
  });
  /*----------Menu---------*/
  $("#link-home").click(function() {
    $(".bands").fadeOut();
    $(".venues").fadeOut();
    $(".posters").fadeOut();
    $(".about").fadeOut();
    $(".contact").fadeOut();
    $(".overlays").fadeOut();
    $(".posters-lightbox").fadeOut();
    setTimeout(function() {
      $("#content").css({ filter: "blur(0px)" });
      $(".home").fadeIn();
    }, 500);
  });
  $("#link-bands").click(function() {
    $(".home").fadeOut();
    $(".venues").fadeOut();
    $(".posters").fadeOut();
    $(".about").fadeOut();
    $(".contact").fadeOut();
    $(".overlays").fadeOut();
    $(".posters-lightbox").fadeOut();
    setTimeout(function() {
      $("#content").css({ filter: "blur(0px)" });
      $(".bands").fadeIn();
    }, 500);
  });
  $("#link-venues").click(function() {
    $(".home").fadeOut();
    $(".bands").fadeOut();
    $(".posters").fadeOut();
    $(".about").fadeOut();
    $(".contact").fadeOut();
    $(".overlays").fadeOut();
    $(".posters-lightbox").fadeOut();
    setTimeout(function() {
      $("#content").css({ filter: "blur(0px)" });
      $(".venues").fadeIn();
    }, 500);
  });
  $("#link-posters").click(function() {
    $(".home").fadeOut();
    $(".bands").fadeOut();
    $(".venues").fadeOut();
    $(".about").fadeOut();
    $(".contact").fadeOut();
    $(".overlays").fadeOut();
    $(".posters-lightbox").fadeOut();
    setTimeout(function() {
      $("#content").css({ filter: "blur(0px)" });
      $(".posters").fadeIn();
    }, 500);
  });
  $("#link-about").click(function() {
    $(".overlays").addClass("active-overlays");
    $(".contact").fadeOut();
    $("#content").css({ filter: "opacity(0.1)" });
    $(".overlays").fadeIn();
    $("#show-1-info").fadeOut();
    $("#show-2-info").fadeOut();
    $(".about").fadeIn();
  });
  $("#link-contact").click(function() {
    $(".overlays").addClass("active-overlays");
    $(".about").fadeOut();
    $("#content").css({ filter: "opacity(0.1)" });
    $(".overlays").fadeIn();
    $("#show-1-info").fadeOut();
    $("#show-2-info").fadeOut();
    $(".contact").fadeIn();
  });
  /*----------Home---------*/
  $("#show-1").click(function() {
    $(".overlays").addClass("active-overlays");
    $(".about").fadeOut();
    $(".contact").fadeOut();
    if ($(this).hasClass("active-show")) {
      $("#content").css({ filter: "opacity(0.1)" });
      $(".overlays").fadeIn();
      $("#show-2-info").fadeOut();
      $("#show-1-info").fadeIn();
      return false;
    } else {
      $(this).addClass("active-show");
      $("#show-2").removeClass("active-show");
      return false;
    }
  });

  $("#show-2").click(function() {
    $(".overlays").addClass("active-overlays");
    $(".about").fadeOut();
    $(".contact").fadeOut();
    if ($(this).hasClass("active-show")) {
      $("#content").css({ filter: "opacity(0.1)" });
      $(".overlays").fadeIn();
      $("#show-1-info").fadeOut();
      $("#show-2-info").fadeIn();
      return false;
    } else {
      $(this).addClass("active-show");
      $("#show-1").removeClass("active-show");
      return false;
    }
  });
  /*----------Posters---------*/
  $(".qujaku-img-small").click(function() {
    $(".posters").fadeOut();
    setTimeout(function() {
      $(".posters-lightbox").fadeIn();
    }, 500);
  });
  $(".posters-img-small").click(function() {
    $(".posters").fadeOut();
    setTimeout(function() {
      $(".posters-lightbox").fadeIn();
    }, 500);
  });
  /*$("#vodun-img-small").click(function() {
    $(".posters").fadeOut();
    setTimeout(function() {
      $(".posters-lightbox").fadeIn();
      $("html,body").animate(
        {
          scrollTop: $(".posters-lightbox").offset().top
        },
        "slow"
      );
    }, 500);*/

  /*----------Contact---------*/
  $("#contact-email").click(function() {
    window.open("mailto:ogre@wizzarding.com");
  });
  /*----------Overlays---------*/
  $(".overlays").click(function() {
    if ($(".overlays").hasClass("active-overlays")) {
      $(".overlays").fadeOut();
      $("#content").css({ filter: "opacity(1)" });
    } else {
    }
  });
});
