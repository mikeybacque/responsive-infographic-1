var $title = $('.title2');
var $html = $('html');
var $leaves = $('.leaves');

$('.title2').on('click', function () {
  $('.title3').toggleClass('is-clicked');
});

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

$('.wrapper').waypoint(function (direction) {
  if (direction == 'down') {
    $('.wrapper').addClass('wrapper-animate');
  } else {
    $('.wrapper').removeClass('wrapper-animate');
}
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove').toggleClass('spoonmover');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove2').toggleClass('spoonmover2');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove4').toggleClass('spoonmover4');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove5').toggleClass('spoonmover5');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove6').toggleClass('spoonmover6');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove7').toggleClass('spoonmover7');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove8').toggleClass('spoonmover8');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove9').toggleClass('spoonmover9');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove10').toggleClass('spoonmover10');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove11').toggleClass('spoonmover11');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove12').toggleClass('spoonmover12');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove13').toggleClass('spoonmover13');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove14').toggleClass('spoonmover14');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove15').toggleClass('spoonmover15');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove16').toggleClass('spoonmover16');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove17').toggleClass('spoonmover17');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove18').toggleClass('spoonmover18');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove19').toggleClass('spoonmover19');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove20').toggleClass('spoonmover20');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove21').toggleClass('spoonmover21');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove22').toggleClass('spoonmover22');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove23').toggleClass('spoonmover23');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove24').toggleClass('spoonmover24');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove25').toggleClass('spoonmover25');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove28').toggleClass('spoonmover28');
}, {offset: '50%'});

$('.spoons').waypoint(function () {
  $('.spoonmove29').toggleClass('spoonmover29');
}, {offset: '50%'});
