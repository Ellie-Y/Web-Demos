var imgBox = document.getElementsByTagName('li');

function bindEvent() {
    for (var i = 0; i < imgBox.length; i++) {
        imgBox[i].onmouseenter = function(e) {
            renderImg(e, this, 'in');
        }
        imgBox[i].onmouseleave = function(e) {
            renderImg(e, this, 'out');
        }
    }
}

function renderImg(event, dom, state) {
    var position = getPosition(event, dom);
    var direction = '';
    switch (position) {
        case 0:
            direction = '-top'
            break;
        case 1:
            direction = '-right'
            break;
        case 2:
            direction = '-bottom'
            break;
        case 3:
            direction = '-left'
            break;
    }
    dom.setAttribute('class', '');
    dom.setAttribute('class', state + direction);
}

function getPosition(event, dom) {
    var oLeft = dom.offsetLeft;
    var oTop = dom.offsetTop;
    var oWidth = dom.offsetWidth;
    var positionX = event.clientX - oLeft - oWidth / 2;
    var positionY = event.clientY - oTop - oWidth / 2;
    var direction = (Math.round(((Math.atan2(positionY, positionX) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
    return direction;
}

bindEvent();
