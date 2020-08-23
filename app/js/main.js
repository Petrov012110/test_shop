$(function(){
    $(".product__item").click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
      })

    var mixer = mixitup('.showcase__inner-items');

});