// 入口函数
$(function () {
// 1、全选功能
// 思路：当大按钮发生改变的时候，小按钮也会跟着改变
    $('.checkall').change(function () {
        // 获取大按钮是否被选中
        var flag = $(this).prop('checked');
        // 根据flag判断出小按钮是否要选中
        $('.j-checkbox,.checkall').prop('checked', flag);

        if (flag) {
            $('.cart-item').addClass('check-cart-item');
        } else {
            $('.cart-item').removeClass('check-cart-item');
        }

        // if (flag) {
        //     $('.j-checkbox').prop('checked', true);
        // } else {
        //     $('.j-checkbox').prop('checked', false);
        // }
    });
// 2、小按钮全选功能
// 思路：如果小按钮的个数和被选中的小按钮的个数相同，就是全部小按钮选择让大按钮也选择
$('.j-checkbox').change(function () {
    // 小按钮的总个数
    var len1 = $('.j-checkbox').length;
    // 被选择的小按钮的总个数
    var len2 = $('.j-checkbox:checked').length;
    // 判断
    $('.checkall').prop('checked', len1 == len2);
    // 背景颜色
    if ($(this).prop('checked')) {
        $(this).parents('.cart-item').addClass('check-cart-item');
    } else {
        $(this).parents('.cart-item').removeClass('check-cart-item');
    }
    // 判断
    // if (len1 == len2) {
    //     $('.checkall').prop('checked', true);
    // } else {
    //     $('.checkall').prop('checked', false);
    // }

});
// 3、数量增加
// 思路：点击加按钮的时候获取value值，让其加1再赋值回去就可以啦
$('.increment').click(function () {
    // 获取value值
    var val = $(this).siblings('.itxt').val();
    // 加1
    val++;// 先赋值在自增
    // 赋值回去
    $(this).siblings('.itxt').val(val);

    // 小计
    // 计算：小计 = 单价 * 数量;
    // 思路：获取单价和数量，相乘的结果放到页面中
    var price = $(this).parent().parent().siblings('.p-price').html();
    // 截取字符串
    price = price.substring(1);
    // 计算
    var zhi = price * val;
    // 赋值给小计：num.toFixed(2)
    $(this).parent().parent().siblings('.p-sum').html('￥' + zhi.toFixed(2));
    getSum();
});
// 4、数量减少
// 思路：点击减按钮的时候获取value值，让其减1再赋值回去就可以啦
$('.decrement').click(function () {
    // 获取value值
    var val = $(this).siblings('.itxt').val();
    // 判断
    if (val == 1) {
        return;
    }
    // 减1
    val--;
    // 赋值回去
    $(this).siblings('.itxt').val(val);

    // 小计
    // 计算：小计 = 单价 * 数量;
    // 思路：获取单价和数量，相乘的结果放到页面中
    var price = $(this).parent().parent().siblings('.p-price').html();
    // 截取字符串
    price = price.substring(1);
    // 计算
    var zhi = price * val;
    // 赋值给小计：num.toFixed(2)
    $(this).parent().parent().siblings('.p-sum').html('￥' + zhi.toFixed(2));
    getSum();
});
// 5、输入数量
// 思路：当输入框发生改变的时候，计算小计
$('.itxt').change(function () {
    // 判断
    var reg = /^[1-9][0-9]*$/;
    if ( reg.test($(this).val()) ) {// 是数字
        var val = $(this).val();
    } else {
        $(this).val(1);
        var val = $(this).val();
    }
    // 小计
    // 计算：小计 = 单价 * 数量;
    // 思路：获取单价和数量，相乘的结果放到页面中
    var price = $(this).parent().parent().siblings('.p-price').html();
    // 截取字符串
    price = price.substring(1);
    // 计算
    var zhi = price * val;
    // 赋值给小计：num.toFixed(2)
    $(this).parent().parent().siblings('.p-sum').html('￥' + zhi.toFixed(2));
    getSum();
});
// 6、求总和
// 思路；把数量相加就是总件数，把小计相加就是总价格
// 因为很多地方需要求总计，所以最好封装个函数
    getSum();
    function getSum () {
        // 总件数
        var count = 0;
        // 遍历
        $('.itxt').each(function (index, elm) {
            // 获取内容
            var re = $(elm).val();
            // 累加
            count = count + parseInt(re);
        });
        // 计算完成总件数放入到页面中
        $('.amount-sum em').html(count);
        // 总价格
        var sum = 0;
        // 遍历
        $('.p-sum').each(function (index, domElm) {
            // 获取
            var re = $(domElm).html();
            // 截取字符串
            re = re.substring(1);
            // 相加
            sum = sum + parseFloat(re);
        });
        // 放入到页面中
        $('.price-sum em').html('￥' + sum.toFixed(2));
    }
// 7、删除功能
    $('.p-action a').click(function () {
        $(this).parents('.cart-item').remove();

        getSum();
    });

    $('.remove-batch').click(function () {
        $('.j-checkbox:checked').parents('.cart-item').remove();

        getSum();
    });

    $('.clear-all').click(function () {
        $('.cart-item').remove();

        getSum();
    });

});