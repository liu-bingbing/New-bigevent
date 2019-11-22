//把基础信息提取，当作变量来使用；
var baseUrl = 'http://localhost:8000/';
var user = {
    logout: function(callback) {
        $.post(baseUrl + 'admin/logout', function(res) {
            callback(res)
        })
    },
    login: function(myName, myPassword, callback) {
        $.post(baseUrl + 'admin/login', {
            user_name: myName,
            password: myPassword
        }, function(res) {
            callback(res)
        })
    },
    getInfo: function(callback) {
        $.get(baseUrl + 'admin/getuser', function(res) {
            callback(res)
        })
    }
}