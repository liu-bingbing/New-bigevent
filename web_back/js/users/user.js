//把基础信息提取，当作变量来使用；
var baseUrl = 'http://localhost:8000/';
var user = {
    logout: function(callback) {
        $.post(APIURLS.user_logout, function(res) {
            callback(res)
        })
    },
    login: function(myName, myPassword, callback) {
        $.post(APIURLS.user_login, {
            user_name: myName,
            password: myPassword
        }, function(res) {
            callback(res)
        })
    },
    getInfo: function(callback) {
        $.get(APIURLS.user_getInfo, function(res) {
            callback(res)
        })
    }
}