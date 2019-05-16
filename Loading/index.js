var percentage = 0;
var timer;
timer = setInterval(function(){
    $('.loadingBar').css('width', percentage + '%');
    percentage += 1;
    if(percentage > 100) {
        $('.pageLoading').addClass('disappear');
        setTimeout(function() {
            $('.helloText').html('<h2>We Are Monsters </h2>');
        }, 2200);
        clearInterval(timer);
    }
}, 25);
