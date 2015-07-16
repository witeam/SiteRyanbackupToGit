$(document).ready(function() {
	$("#nav .navbar-nav li").click(function() {
		var idx = $(this).data("name");
    $('html, body').animate({
      scrollTop: $("#"+idx).offset().top
    }, 750);
});
});