$(function(){
  $.fn.followTo = function (pos) {
    var $this = this,
        $window = $(window);

    $window.scroll(function (e) {
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'fixed',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0
            });
        } else {
            $this.css({
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0
            });
        }
    });
};

$('.background, .float-block').followTo(1);
});
