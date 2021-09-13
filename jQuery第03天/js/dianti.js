$(function () {
	function showTool () {
		if ($(window).scrollTop() >= $('.recommend').offset().top) {
			$('.fixedtool').fadeIn();
		} else {
			$('.fixedtool').fadeOut();
		}
	}
	showTool();
	// 1、在滚动的过程中显示或者隐藏
	$(window).scroll(function () {
		showTool();
	});


	// 2、点击电梯导航到达指定的楼层
	// 3、滚动的时候到达指定的楼层就让对应的电梯栏添加背景
});