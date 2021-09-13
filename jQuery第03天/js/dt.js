//  入口函数
$(function () {
    // 功能：
    function showTool () {
        if ( $(window).scrollTop() >= $('.recommend').offset().top ) {// 卷起到某个高度
            $('.fixedtool').fadeIn();  // 电梯栏显示
         } else {
             $('.fixedtool').fadeOut();
         }
    }
    showTool();
    // 1、滚动的过程中，卷到一定的高度显示出电梯导航栏，否则不显示
    $(window).scroll(function () {

        showTool();

        // 3、滚动的过程中，到达指定楼层那么对应的电梯导航加类名
        // 滚动的时候，我们查看scrollTop是否大于某个楼层距离文档顶部的偏移位置
        // 如果大于等于这个位置说明到达了这个楼层，让对应的电梯加类名
        $('.floor>div').each(function (index, elm) {
            if ( Math.ceil($(window).scrollTop()) >= Math.floor($(elm).offset().top) ) {
                $('.fixedtool li').eq(index).addClass('current').siblings().removeClass('current');
            }
        });

    });
    
    // 2、点击电梯导航栏跳转到指定的位置
    $('.fixedtool li').click(function () {
        // 点击修改scrillTop、
        // 要到大的楼层距离文档顶部的偏移位置，就到大了这个楼层
        // 点击的时候要获取li的索引值，根据索引值找到对应的楼层，再得到楼层距离文档顶部偏移位置
        // 设置scrollTop的值为这个位置就到达了指定的楼层
        // 获取索引值
        var index = $(this).index();
        // 找到对应的楼层
        var topVal = $('.floor>div').eq(index).offset().top;
        // 设置scrollTop
        // $(window).scrollTop(topVal);
        // 因为：动画是要加给页面元素地
        $('html,body').animate({
            scrollTop : topVal,
        })

    });

    





});