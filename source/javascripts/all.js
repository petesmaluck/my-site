//= require_tree .

(function($) {

$(document).ready(bindReadMore);

  function bindReadMore() {
    var $button = $('.blog-link');

    $($button).click(function(e){
      e.preventDefault();
    });

    $($button)
      .off('click', handleReadMore)
      .on('click', handleReadMore);
  }

  function handleReadMore() {
    var fetch  = $(this).attr("href");

    $.ajax({
      type: 'GET',
      url: fetch
    })
    .done(function(data) {
      $('.intro').remove();
      $('.current-post').remove();
      $(data).find('p').addClass('current-post').appendTo($('.new-post'));
      
    });
  }

})(jQuery);