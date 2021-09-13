$(function () {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui();
    $('#int').val('').focus();
    // 点击按钮添加消息
    $('#btnSend').on('click', function () {
        // 获取消息内容
        let text = $('#int').val().trim();
        // 判断内容是否不为空
        if (text.length == 0) {
            $('#int').val('').focus();
            return alert('请规范输入内容');
        }
        // 添加li消息到页面，渲染页面
        $('#talk_list').append(`
            <li class="right_word">
            <img src="img/person02.png" /> <span>${text}</span>
            </li>
        `)
        // 重置滚动条，清除输入框
        resetui();
        $('#int').val('').focus();
        getMsg(text);
    })
    // 机器人回复消息
    function getMsg(text) {
        $.ajax({
            method: 'get',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text,
            },
            success: function (res) {
                if (res.message === 'success') {
                    let msg = res.data.info.text
                    $('#talk_list').append(`
                        <li class="left_word">
                        <img src="img/person01.png" />
                        <span>${msg}</span>
                        </li>
                    `)
                    resetui();
                    getVoice(msg);
                }
            }
        })
    }
    // 语音播放
    function getVoice(text) {
        $.ajax({
            method: 'get',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: text,
            },
            success: function (res) {
                if (res.status === 200) {
                    $('audio').prop('src', res.voiceUrl);
                }
            }
        })
    }
    // 回车发送
    $('#int').on('keyup', function (e) {
        if (e.keyCode == 13) {
            $('#btnSend').click();
        }
    })
})