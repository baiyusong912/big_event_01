(function () {
    let setFont = function () {
        let html = document.documentElement;
        let width = html.clientWidth;
        if (width <= 1024) width = 1024;
        if (width >= 1920) width = 1920;
        let fontSize = width / 80 + 'px';
        html.style.fontSize = fontSize;
    }

    setFont();

    window.onresize = function () {
        setFont();
    }
}

)();
(function () {
    $('.monitor').on('click', '.tabs a', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.monitor .content').eq($(this).data('index')).show().siblings('.content').hide();
    })
    $('.marquee').each(function (i, d) {
        let lists = $(d).children().clone();
        $(this).append(lists);
    })
})();