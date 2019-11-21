//把基础信息提取，当作变量来使用；
var baseUrl = 'http://localhost:8000/';
var user = {
    logout: function() {
        $.post(baseUrl + 'admin/logout', function(res) {
            if (res.code === 200) {
                window.location.href = './login.html';
            }
        })
    },
    login: function(myName, myPassword) {
        $.post(baseUrl + 'admin/login', {
            user_name: myName,
            password: myPassword
        }, function(res) {
            console.log(res)
            if (res.code === 200) {
                alert('登陆成功');
                window.location.href = './index.html';
            } else {
                alert(res.msg)
            }
        })
    },
    getInfo: function() {
        $.get(baseUrl + 'admin/getuser', function(res) {
            if (res.code === 200) {
                $('#userImg').prop('src', res.data.user_pic)
                $('#userName').text(res.data.nickname)
            }
        })
    }
}