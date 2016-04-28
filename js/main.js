var $title = $('.title2');
var $html = $('html');
var $leaves = $('.leaves');

$('.title2').on('click', function () {
  $('.title3').toggleClass('is-clicked');
});

$(document).load('js/main.js', function () {
  $('.intro').addClass('load');
});

$(document).load('js/main.js', function () {
  $title.addClass('wiggle');
});

$('.candy2').on('mouseenter', function () {
  $('.candy2').addClass('pulse');
});

$('.candy2').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy3').on('mouseenter', function () {
  $('.candy3').toggleClass('pulse');
});

$('.candy3').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy4').on('mouseenter', function () {
  $('.candy4').toggleClass('pulse');
});

$('.candy4').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy5').on('mouseenter', function () {
  $('.candy5').toggleClass('pulse');
});

$('.candy5').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy6').on('mouseenter', function () {
  $('.candy6').toggleClass('pulse');
});

$('.candy6').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy7').on('mouseenter', function () {
  $('.candy7').toggleClass('pulse');
});

$('.candy7').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy8').on('mouseenter', function () {
  $('.candy8').toggleClass('pulse');
});

$('.candy8').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy9').on('mouseenter', function () {
  $('.candy9').addClass('pulse');
});

$('.candy9').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy10').on('mouseenter', function () {
  $('.candy10').toggleClass('pulse');
});

$('.candy10').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy11').on('mouseenter', function () {
  $('.candy11').toggleClass('pulse');
});

$('.candy11').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy12').on('mouseenter', function () {
  $('.candy12').toggleClass('pulse');
});

$('.candy12').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy13').on('mouseenter', function () {
  $('.candy13').toggleClass('pulse');
});

$('.candy13').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy14').on('mouseenter', function () {
  $('.candy14').toggleClass('pulse');
});

$('.candy14').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy15').on('mouseenter', function () {
  $('.candy15').toggleClass('pulse');
});

$('.candy15').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.leaves').waypoint(function () {
  $('.leaves').toggleClass('leaves-animate');
}, {offset: '60%'});

$('.spoons').waypoint(function () {
  $('.spoons').toggleClass('spoons-animate');
}, {offset: '70%'});

$('.leaves').on('transitionend', function () {
  $('.leaf1').addClass('white');
    }
);

$('.wrapper').waypoint(function () {
  $('.wrapper').toggleClass('wrapper-animate');
}, {offset: '100%'});

$('.spoons').waypoint(function () {
  $('.spoonmove').toggleClass('spoonmover');
}, {offset: '100%'});
