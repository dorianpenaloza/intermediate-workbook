'use strict';
$(document).on('ready', function() {
  var $block = null;
  $('[data-stack]').click (function () {
    var $children = $(this).children();
    if ($block === null) {
      if ($children.length > 1) {
        $block = $children.last().detach();
      }
    }
    else {
      if ($children.length === 1 || $children.last().data('block') > $block.data('block')) {
        $(this).append($block);
        $block = null;
      }
    }
    checkForWin();
  });

  function checkForWin() {
     $('[data-stack]').each(function() {
      if (($(this).data('stack') > 2) && ($(this).children().length === 5)) {
            $('#announce-congrats').text('Congrats');
            $('#announce-you').text('You');
            $('#announce-won').text('Won!');
      }
    });
  }
});
