var toggleSearch = 0;

$(document).ready(function() {
	$('#gnavArea li:last-child').click(function() {
		toggleSearchBar();
	});
});

function toggleSearchBar() {
	if(toggleSearch == 0) {
		$('#headerArea form').css('display','block');
		$('#headerArea form').animate({
			opacity: 1
		}, 300);
		toggleSearch = 1;
	} else {
		$('#headerArea form').animate({
			opacity: 0
		}, 300, function() {
			$('#headerArea form').css('display','none');
		});
		toggleSearch = 0;
	}
}