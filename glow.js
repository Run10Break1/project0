function glow(e) {
    var label = e.currentTarget.parentNode.firstElementChild;
    var i = 0, v = 105, o = 0.5;
    var t = setInterval(function() {
        label.style.backgroundColor = "rgba(" + v + "," + v + "," + v + "," + o + ")";
        v += 8;
        if(i % 4 == 0) o -= 0.1;
        if(i++ == 18) {
            label.style.backgroundColor = "rgba(" + 255 + "," + 255 + "," + 255 + "," + o + ")";
            clearInterval(t);
        }
    }, 20);
}

function glowBack(e) {
    var label = e.currentTarget.parentNode.firstElementChild;
    var i = 0, v = 255, o = 0;
    var t = setInterval(function() {
        label.style.backgroundColor = "rgba(" + v + "," + v + "," + v + "," + o + ")";
        v -= 8;
        if(i % 4 == 0) o += 0.1;
        if(i++ == 18) {
            label.style.backgroundColor = "rgba(110, 110, 110," + o + ")";
            clearInterval(t);
        }
    }, 20);
}