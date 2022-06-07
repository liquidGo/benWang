addEvent(window, 'load', function() {
    function $(id) {
        return document.getElementById(id);
    }
    var hudong = $('hudong');
    var body = $('body');
    var r_t_right = $('r_t_right')
        // 右侧广告部分
    addEvent(window, 'scroll', function() {
        var Y = window.pageYOffset > body.offsetHeight ? body.offsetHeight : window.pageYOffset;
        console.log(Y);
        TweenLite(hudong, .5, {
            top: Y + 100,
            ease: Easing.Linear.easeIn,
            onComplete: function() {
                console.log(body.offsetHeight);
            }
        })
    })
    addEvent(r_t_right, 'click', function() {
        window.scrollTo(0, 0)
    })
})