// 封装一个可以兼容ie9和ie6/7/8的事件监听器
function addEvent(对象, 事件类型, 处理函数) {
    // try/catch增强
    try {
        if (对象 != null && typeof 对象 == 'object') {
            // 进行监听器判断
            if (window.addEventListener) {
                对象.addEventListener(事件类型, 处理函数, false)
            } else {
                对象.attachEvent('on' + 事件类型, 处理函数)
            }
        } else {
            throw new Error('对象为空或不是对象！')
        }
    } catch (err) {
        alert(err.message);
    }
}