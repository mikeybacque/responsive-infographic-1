var $title = $('.title2');
var $html = $('html');
var $leaves = $('.leaves');

$('.title2').on('click', function () {
  $('.title3').toggleClass('is-clicked');
});

$(document).load('js/main.js', function () {
  $('.intro').addClass('load');
});

$('.candy2').hover('', function () {
  $('.candy2').addClass('pulse');
});

$('.candy2').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy3').hover('', function () {
  $('.candy3').toggleClass('pulse');
});

$('.candy3').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy4').hover('', function () {
  $('.candy4').toggleClass('pulse');
});

$('.candy4').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy5').hover('', function () {
  $('.candy5').toggleClass('pulse');
});

$('.candy5').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy6').hover('', function () {
  $('.candy6').toggleClass('pulse');
});

$('.candy6').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy7').hover('', function () {
  $('.candy7').toggleClass('pulse');
});

$('.candy7').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy8').hover('', function () {
  $('.candy8').toggleClass('pulse');
});

$('.candy8').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy9').hover('', function () {
  $('.candy9').addClass('pulse');
});

$('.candy9').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy10').hover('', function () {
  $('.candy10').toggleClass('pulse');
});

$('.candy10').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy11').hover('', function () {
  $('.candy11').toggleClass('pulse');
});

$('.candy11').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy12').hover('', function () {
  $('.candy12').toggleClass('pulse');
});

$('.candy12').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy13').hover('', function () {
  $('.candy13').toggleClass('pulse');
});

$('.candy13').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy14').hover('', function () {
  $('.candy14').toggleClass('pulse');
});

$('.candy14').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.candy15').hover('', function () {
  $('.candy15').toggleClass('pulse');
});

$('.candy15').on('animationend', function () {
  $(this).removeClass('pulse');
    }
);

$('.leaves').waypoint(function () {
  $('.leaves').toggleClass('leaves-animate');
}, {offset: '70%'});

$('.spoons').waypoint(function () {
  $('.spoons').toggleClass('spoons-animate');
}, {offset: '70%'});

$('.leaves').on('transitionend', function () {
  $('.leaf1').addClass('white');
    }
);
