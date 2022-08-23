$('#main').t({
    delay: 0,//start delay (s)
    speed: 35,//typing speed in ms (min: 10)
    beep: true,
    caret: '<span style="color:hotpink; font-size:24px;">❤︎</span>',
    typing: function (elm, chr) {
        if (chr.match(/\-trigger/))
            $('#pow-txt').show().delay(500).fadeOut(0);
    }
})
