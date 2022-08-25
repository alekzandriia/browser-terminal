$('#main').t({
    delay: 0,//start delay (s)
    speed: 25,//typing speed in ms (min: 10)
    beep: true,
    caret: '<span style="color:hotpink; font-size:24px;">❤︎</span>',
    blink: true,
    blink_perm:false,
    typing: function (elm, chr) {
        if (chr.match(/\-trigger/))
            $('#pow-txt').show().delay(500).fadeOut(0);
    },
    fin:function(elm){
        $('#skip').hide();
    }
})




function skipIntro() {
console.log('hello')
$('#main').hide();
$('#skipped').show();
$('#skip').hide();
}






