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
    }
}