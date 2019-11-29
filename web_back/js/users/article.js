var article = {
    show: function(curPage, type, state, callback) {
        $.get(APIURLS.article_show, {
                page: curPage,
                type: type,
                state: state
            },
            function(res) {
                callback(res)
            })
    },
    del: function(id, callback) {
        $.get(APIURLS.article_del, { 'id': id }, function(res) {
            if (res.code === 200) {
                getAndshow()

            }
        })
    },
    //添加文章，参数是formdate；
    add: function(fd, callback) {
        $.ajax({
            url: APIURLS.article_add,
            type: 'post',
            data: fd,
            processData: false,
            contentType: false,
            success: function(res) {
                callback(res)

            }
        })

    }
}