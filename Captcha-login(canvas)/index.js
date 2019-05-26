//随机生成长度6 有大小写字母和数字的字符串，并填充

var randomCode = [0,1,2,3,4,5,6,7,8,9];
for(var i = 65; i <= 122; i++) {
    if(i > 90 && i < 97) {
        continue;
    }else {
        //Convert Unicode encoding to the corresponding letter
        randomCode.push( String.fromCharCode(i) );
    }
}

var codeValue;
function createCode() {
    var codeStr = '';
    codeValue = '';
    for(var i = 0; i < 6; i++) {
        //Math.floor is for rounding down
        var randomStr = randomCode[ Math.floor(Math.random() * randomCode.length) ];
        codeStr += randomStr + ' ';
        codeValue += randomStr;
    }
    var myCanvas = document.getElementById('myCanvas');
    var paint = myCanvas.getContext('2d');
    var oImg = new Image();
    oImg.src = 'img/bg.jpg';
    oImg.onload = function() {
        var background = paint.createPattern(oImg, 'repeat');
        paint.fillStyle = background;
        //empty the paint
        paint.fillRect(0, 0, myCanvas.width, myCanvas.height);
        paint.textAlign = 'center';
        paint.fillStyle = '#ccc';
        paint.font = '46px Roboto Slab';
        paint.setTransform(1, -0.12, 0.3, 1, 0, 12);
        paint.fillText(codeStr, myCanvas.width / 2, 60);
    }
}

createCode();

var oSubmit = document.getElementsByClassName('submit')[0];
var refreshBtn = document.getElementsByClassName('refresh')[0];
var oInput = document.getElementsByTagName('input')[0];
var oSpan = document.getElementsByClassName('judge')[0];
var oError = document.getElementsByClassName('error')[0];

oSubmit.onclick = function() {
    showResult();
}

refreshBtn.onclick = function() {
    createCode();
}

function showResult() {
    var inputValue = oInput.value;
    if(codeValue == inputValue || codeValue.toLowerCase() == inputValue) {
        oSpan.style.display = 'inline-block';
        createCode();
    }
    else if(inputValue == '') {
        oSpan.style.display = 'none';
        oError.innerHTML = 'Please enter the vertification code';
        oError.style.display = 'inline-block';
    }
    else {
        oSpan.style.backgroundImage = 'url(./img/false.png)';
        oSpan.style.display = 'inline-block';
        oError.innerHTML = 'Incorrect vertification code, please enter again';
        oError.style.display = 'inline-block';
        createCode();
    }
}
