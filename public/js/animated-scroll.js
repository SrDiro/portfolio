function animatedScroll(){
  $(document).on('click', 'a', function () {
    var idValue = this.id;
    var idRedirect = idValue.split("-");
    $("body, html").animate({
      scrollTop: $('#' + idRedirect[1]).offset().top
    }, 2000);
  });

}
