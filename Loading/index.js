var oPageLoading = document.getElementsByClassName('pageLoading')[0];
var oLoadingBar = document.getElementsByClassName('loadingBar')[0];
var oHelloText = document.getElementsByClassName('helloText')[0];

var percentage = 0;
var timer;
timer = setInterval(function(){
    oLoadingBar.style.width = percentage + '%'
    percentage += 1;
    if(percentage > 100) {
        oPageLoading.classList.add('disappear');
        setTimeout(function() {
            var newH2 = '<h2>We Are Monsters </h2>';
            oHelloText.innerHTML = newH2;
        }, 2200);
        clearInterval(timer);
    }
}, 25);
