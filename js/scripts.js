$(document).ready(function() {
  var count = $("ul.strip").children().length;
  $('.expand').css('width', 100 / count + '%');
  $('.strip').css('width', count * 100 + '%');
  var heights = [];
  $( 'ul.strip [id^="expand"]' ).each(function() {
    heights.push($(this).height());
  });
  $('.dates').css({
                'position': 'absolute',
                'width': 100 / count + '%'
                });
  $('.schedule').css('height', 0);
  $('[id^="day"]').click(function() {
    var suffix = parseInt($(this).attr('id').match(/\d+/));
    $('.schedule').addClass('active');
    if ($(this).hasClass('active')) {
      $('.schedule').removeClass('active');
      $('.schedule').css('height', 0);
      $('[id^="day"]').removeClass('active');
    } else {
      $('[id^="day"]').removeClass('active');
      $(this).addClass('active');
      $('.schedule.active').css('height', heights[suffix-1] + 'px');
      $('[id^="expand"]').removeClass('active');
      //console.log(heights[suffix-1]);
      var trans = (suffix - 1) * (100 / count);
      if (suffix > 1) {
        $('.strip').css({
                     'transform' : 'translate3d(-' + trans + '%, 0, 0)',
                     '-webkit-transform' : 'translate3d(-' + trans + '%, 0, 0)',
                     '-moz-transform' : 'translate3d(-' + trans + '%, 0, 0)',
                     '-ms-transform' : 'translate3d(-' + trans + '%, 0, 0)',
                     '-o-transform' : 'translate3d(-' + trans + '%, 0, 0)'
                    });
      } else {
        $('.strip').css({
                     'transform' : 'translate3d(0, 0, 0)',
                     '-webkit-transform' : 'translate3d(0, 0, 0)',
                     '-moz-transform' : 'translate3d(0, 0, 0)',
                     '-ms-transform' : 'translate3d(0, 0, 0)',
                     '-o-transform' : 'translate3d(0, 0, 0)'
                    });
      }
      $('html, body').animate({
          scrollTop: $('[id^="expand"]').offset().top
      }, 500);
    }
  });
});