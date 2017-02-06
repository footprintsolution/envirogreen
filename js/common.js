$(".panel-heading").click(function () {
	"use strict";
	$(this).siblings(".panel-body").slideToggle(500);
	if ($(this).children("i").attr("class") === "icon-sli-arrow-down") {
		$(this).children("i").attr("class", "icon-sli-arrow-right");
	}else {
		$(this).children("i").attr("class", "icon-sli-arrow-down");
	}
	
});
$(document).ready(function () {
	"use strict";

	$('#header').load('header.html');
	$('#footer').load('footer.html');
	$('#auheader').load('../component/header.html');
	$('#aufooter').load('../component/footer.html');

});
