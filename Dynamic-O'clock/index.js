//面向对象编程
function Index(dom, use24Hours) {
    this.column = Array.from(dom); //把 dom对象拿过来变成数组
    this.classList = ['visible', 'close', 'far', 'far', 'distance', 'distance'];
    this.use24Hours = use24Hours;
    this.createDom();
    this.start();
}

//动态生成时分秒的结构
Index.prototype.createDom = function() {
    for(var i = 0; i < 6; i++) {
        var oDiv = '<div>'+i+'</div>';
        $('.six').append(oDiv)

    }
    for(var i = 0; i < 10; i++) {
        var iDiv = '<div>'+i+'</div>';
        $('.ten').append(iDiv);
    }
}

Index.prototype.start = function() {
    var self = this;
    setInterval(function() {
        var time = self.getOclock();
        self.column.forEach(function(ele, index) {
            var timeIndex = + time[index];
            var offset = timeIndex * 86;
            $(ele).css({
                'transform': 'translateY( calc(50vh - '+ offset + 'px - 60px) )'
            });
            Array.from(ele.children).forEach(function(ele2, index2) {
                var className = self.getClass(timeIndex, index2);  //实参
                $(ele2).attr('class', className);
            })
        })
    }, 500);
};

Index.prototype.getClass = function(time, i) {
    var className = this.classList.find(function(ele, index) {
        return i - index === time || i + index === time;
    });
    return className || '';
}

//获得当前时间，并处理时间格式
Index.prototype.getOclock = function() {
    var date = new Date();
    //时分秒拼成字符串，为 0的时候取 12
    return [this.use24Hours ? date.getHours() : date.getHours % 12 || 12, date.getMinutes(), date.getSeconds()].reduce(function(p, n) {
        return p + ('0' + n).slice(-2);
    }, '')
};

new Index($('.column'), true);
