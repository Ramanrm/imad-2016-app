$(document).ready(function() {
	$(".pill").click(function() {
		$(".pill").removeClass("active");
		$(this).addClass("active");
	});
});