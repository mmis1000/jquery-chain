
$('#bg').then()
  .then(function (next) {
    var width = $(window).outerWidth();
    var height = $(window).outerHeight();
    var cols = Math.floor(width / 20);
    var rows = Math.floor(height / 40);
    var i, j;
    for (j = 0; j < rows; j++) {
      for (i = 0; i < cols; i++) {
        this.append(
          $('<div>')
          .css({
            top: j * height / rows,
            left: i * width / cols,
            width: width / cols,
            height: height / rows,
            position: 'absolute'
          })
          .addClass('B' + (i + j) % 2)
        )
      }
    }
    next();
  })
  .find('.B0')
  .css({backgroundColor: "#777"})
  .animate({backgroundColor: "#f7f7f7"}, 5000)
  .parent()
  .find('.B1')
  .css({backgroundColor: "#777"})
  .animate({backgroundColor: "#111"}, 5000)
  .exec();
$('#a').then()
  .animate({'width': '200px'})
  .animate({'height': '200px'})
  .css({
    'position': 'fixed',
    'overflow': 'hidden',
    'margin': '0px',
    'left': '0px',
    'top': '0px'
  })
  .animate({
    'margin': '-100px',
    'left': '50%',
    'top': '50%'
  })
  .animate({
    'border-radius': '40px'
  })
  .append($('<div>'))
  .find('div')
  .css({
    'background': '#444',
    'text-align': 'center',
    'width': '4px',
    'height': '4px',
    'opacity': '0',
    'line-height': '200px',
    'color': 'white'
  })
  .animate({'opacity': '1'})
  .animate({'width': '200px'})
  .animate({'height': '200px'})
  //.append($('<span>').text('T'))
  .thenEach(function (next, character) {
    $('<span>').addClass('L1').text(character).css('opacity', 0).appendTo(this)
      .then()
      .animate({
        'opacity': 1, 
        'font-size': '40px'}, 100)
      .then(next).exec()
  }, 'teamEOW'.split(''))
  .append('<br>')
  .animate({
    'line-height': '100px'
  })
  .thenEach(function (next, character) {
    $('<span>').addClass('L2').text(character).css('opacity', 0).appendTo(this)
      .then()
      .animate({
        'opacity': 1, 
        'font-size': '25px'}, 100)
      .then(next).exec()
  }, 'coming sooooon'.split(''))
  .then(function (next) {
    setTimeout(next, 2000)
  })
  .thenEach(function (next, character) {
    $(character).css('text-decoration', 'line-through');
    setTimeout(next, 50);
  }, function () {
    return this.find('.L1').toArray();
  })
  .then(function (next) {
    setTimeout(next, 500)
  })
  .thenEach(function (next, character) {
    $(character).css('text-decoration', 'line-through');
    setTimeout(next, 50);
  }, function () {
    return this.find('.L2').toArray();
  })
  .parent()
  .parent()
  .append($('<div>').addClass('dialog'))
  .find('.dialog')
  .css({
    'background': 'blue',
    'width': '400px',
    'height': '150px',
    'position': 'fixed',
    'top': '50%',
    'left': '50%',
    'margin-top': '-95px',
    'margin-left': '-220px',
    'opacity': '0',
    'padding': '20px'
  })
  .animate({'opacity': 1})
  .append($('<div>').addClass('dialog-inner'))
  .find('.dialog-inner')
  .css({
    'border': '5px #ff0 solid',
    'background': 'blue',
    'width': '390px',
    'height': '140px',
    'opacity': '0',
    'line-height': '140px',
    'text-align': 'center',
    'font-size': '30px',
    'color': '#ff0',
    'font-family': 'monospace'
  })
  .text('所以那個teamEOW呢？')
  .animate({'opacity': 1})
  .then(function (next) {
    setTimeout(next, 2000)
  })
  .parent()
  .parent()
  .parent()
  .find('#bsod')
  .css('display', 'block')
  .animate({
    opacity: 1
  }, 500)
  .exec()
var messages = [
  'TEAM_EOW_NOT_IMPLEMENT',
  'BACKEND_DEVELOPMENT_TOO_SLOW',
  'YAMIODYMEL_FAPPING',
  'EYAMI_NO_BOYFRIEND',
  'BEGINNING_OF_SPRING_PASSED'
]
$('.error').text(messages[Math.floor(messages.length * Math.random())])
