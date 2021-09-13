$(function () {
// 1、全选
// 思路：当大按钮发生改变，获取大按钮的checked，判断设置小按钮的checked
	$('.checkall').change(function () {
		// 获取checked值
		var flag = $(this).prop('checked');

		// 设置小按钮
		$('.j-checkbox,.checkall').prop('checked', flag);

		// 背景
		if (flag) {
			$('.cart-item').addClass('check-cart-item');
		} else {
			$('.cart-item').removeClass('check-cart-item');
		}
		// 判断
		// if (flag) {
		// 	$('.j-checkbox').prop('checked', true);
		// } else {
		// 	$('.j-checkbox').prop('checked', false);
		// }

	});
// 2、小按钮全选
// 思路：小按钮发生改变，就要判断大按钮是否选择，
// 小按钮都选择，大按钮就选择,否则不选择
	$('.j-checkbox').change(function () {
		// 思想
		// 如果小按钮的总个数和被选中的小按钮的个数相同说明全选了
		// 小按钮的总个数
		var len1 = $('.j-checkbox').length;
		// 被选择的小按钮的总个数
		var len2 = $('.j-checkbox:checked').length;
		// 设置大按钮
		$('.checkall').prop('checked', len1 == len2);

		 // 背景
		 if ($(this).prop('checked')) {
		 	$(this).parents('.cart-item').addClass('check-cart-item')
		 } else {
		 	$(this).parents('.cart-item').removeClass('check-cart-item')
		 }
		// 判断
		// if (len1 == len2) {
		// 	$('.checkall').prop('checked', true);
		// } else {
		// 	$('.checkall').prop('checked', false);
		// }

	});
// 3、点击数量增加
// 思路：点击获取内容，增加，设置回去
	$('.increment').click(function () {
		// 获取内容
		var val = $(this).siblings('.itxt').val();
		// 增加1
		val++;
		// 设置
		 $(this).siblings('.itxt').val(val);

		 // 计算小计：公式：小计 = 单价 * 数量
		 // 获取单价，当前的单价
		 var price = $(this).parent().parent().siblings('.p-price').html();
		 // 截取字符串
		 price = price.substring(1);
		 // 计算
		 var n = price * val;
		 // 放入页面，n.toFixed(2)
		 $(this).parent().parent().siblings('.p-sum').html('￥'+ n.toFixed(2));
		 getSum();
	});
// 4、点击数量减少
	$('.decrement').click(function () {
		// 获取内容
		var val = $(this).siblings('.itxt').val();
		// 判断
		if (val == 1) {
			return;
		}
		// 减少1
		val--;
		// 设置
		 $(this).siblings('.itxt').val(val);

		 // 计算小计：公式：小计 = 单价 * 数量
		 // 获取单价，当前的单价
		 var price = $(this).parent().parent().siblings('.p-price').html();
		 // 截取字符串
		 price = price.substring(1);
		 // 计算
		 var n = price * val;
		 // 放入页面，n.toFixed(2)
		 $(this).parent().parent().siblings('.p-sum').html('￥'+ n.toFixed(2));
		  getSum();
	});
// 5、输入数量
	$('.itxt').change(function () {
		// 判断是不是数字
		// 正则表达式
		var reg = /^[1-9][0-9]*$/;
		if ( reg.test($(this).val()) ) {
			// 获取数量
			var val = $(this).val();
			
		} else {
			$(this).val(1);
			// 获取数量
			var val = $(this).val();
		}
		 // 计算小计：公式：小计 = 单价 * 数量
		 // 获取单价，当前的单价
		 var price = $(this).parent().parent().siblings('.p-price').html();
		 // 截取字符串
		 price = price.substring(1);
		 // 计算
		 var n = price * val;
		 // 放入页面，n.toFixed(2)
		 $(this).parent().parent().siblings('.p-sum').html('￥'+ n.toFixed(2));
		 getSum();
	});
// 6、求总和
// 思路：件数相加就是总和，小计相加就是总价格，因为多次要用最好封装
	getSum();
	function getSum () {
		// 总件数
		var count = 0;
		// 遍历元素累加
		$('.itxt').each(function (i, item) {
			// 求出当前项的内容累加
			// 获取内容
			var num1 = $(item).val();
			// 累加
			count = count + parseInt(num1);
		});
		// 设置到页面中
		$('.amount-sum em').html(count)

		// 总价格
		var sum = 0;
		// 遍历
		$('.p-sum').each(function (i, item) {
			// 获取内容
			var num2 = $(item).html();
			// 截取字符粗
			num2 = num2.substring(1);
			// 相加
			sum = sum + parseFloat(num2);
		});
		// 设置到页面中
		$('.price-sum em').html('￥' + sum.toFixed(2));
	}
// 7、删除功能
// 思路：点击删除cart-item
	$('.p-action a').click(function () {
		$(this).parents('.cart-item').remove();

		getSum();
	});

	$('.remove-batch').click(function () {
		// 删除选择的商品
		$('.j-checkbox:checked').parents('.cart-item').remove();

		getSum();
	});

	$('.clear-all').click(function () {
		$('.cart-item').remove();

		getSum();
	})
});