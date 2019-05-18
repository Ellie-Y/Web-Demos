var oWrapper = document.getElementsByClassName('wrapper')[0];
var oItem = document.getElementsByClassName('item');
var oClose = document.getElementsByClassName('close');

setTimeout(function() {
    oWrapper.classList.remove('init');
}, 500);

for(var i = 0; i < oItem.length; i++) {
    oItem[i].onclick = function() {
        this.classList.add('active');
        oWrapper.classList.add('wrapper-active');
    }
}

for(var i = 0; i < oClose.length; i++) {
    oClose[i].onclick = function(e) {
        e.stopPropagation();
        var oActive = document.getElementsByClassName('active')[0];
        oActive.classList.remove('active');
        oWrapper.classList.remove('wrapper-active');
    }
}
