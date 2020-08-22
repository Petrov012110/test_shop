$(function(){
    $(".product__item").click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
      })
});