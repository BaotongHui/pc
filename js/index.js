function getWin(attr) {
    return document.documentElement[attr] || document.body[attr];
}

//下载APP
function appBlock() {
    var app = document.getElementById("app");
    var app1 = document.getElementById("app1");
    app.onmousemove = function () {
        app1.style.display = "block";
    };
    app.onmouseout = function () {
        app1.style.display = "none";
    };
}
appBlock()
//更多
function more() {
    var ab = document.getElementById("ab_1");
    var ab1 = document.getElementById("ab_11");
    ab.onmousemove = function () {
        ab1.style.display = "block";
    };
    ab.onmouseout = function () {
        ab1.style.display = "none";
    };
}
more()

//左边
 function  right(){

 }

//轮播图
function atuomove() {

    var out = document.getElementById("zb_1_right_top");
    var inner = document.getElementById("zb_1_right_top1");
    var div = inner.getElementsByTagName("img");
    var ul = out.getElementsByTagName("ul")[0];
    var oLi = ul.getElementsByTagName("li");
    var inputL = document.getElementById("left");
    var inputR = document.getElementById("right");
    var timer1 = null;
    var interval = 4000;
    var step = 0;

    function getCss(ele, attr) {
        var val = null;
        if ("getComputedStyle" in window) {
            val = parseFloat(getComputedStyle(ele, null)[attr]);
        } else {
            val = parseFloat(ele.currentStyle[attr]);
        }
        return val;
    }

    function abc(ele, attr, target, duartion) {
        var begin = getCss(ele, attr);
        var change = target - begin;
        var time = 0;
        var interval = 15;
        clearInterval(ele.timer);
        function step() {
            time += interval;
            if (time >= duartion) {
                clearInterval(ele.timer);
                ele.style[attr] = target + "px";
            } else {
                ele.style[attr] = time / duartion * change + begin + "px"
            }
        }

        ele.timer = setInterval(step, interval);
    }

    clearInterval(timer1);
    timer1 = setInterval(bcd, interval);
    function bcd() {
        step++
        if (step > div.length - 1) {
            inner.style.left = 0;
            step = 1;
        }
        abc(inner, "left", step * -960, 2000)
        lia();
    }

    function lia() {
        var liStep = step >= div.length - 1 ? 0 : step;
        for (var i = 0; i < oLi.length; i++) {
            aLi = oLi[i];
            i === liStep ? aLi.className = "bg" : aLi.className = "";
        }
    }

    out.onmousemove = function () {
        clearInterval(timer1);
        inputL.style.display = "block";
        inputR.style.display = "block";
    }
    out.onmouseout = function () {
        timer1 = setInterval(bcd, interval);
        inputL.style.display = "none";
        inputR.style.display = "none";
    }
    cdf();
    function cdf() {
        for (var i = 0; i < oLi.length; i++) {
            var aLi = oLi[i];
            aLi.index = i;
            aLi.onclick = function () {
                step = this.index;
                abc(inner, "left", step * -960, 2000);
                lia();
            }
        }
    }

    inputR.onclick = bcd;
    inputL.onclick = function () {
        step--;
        if (step < 0) {
            step = div.length - 2;
            inner.style.left = (step + 1) * -960 + "px"
        }
        abc(inner, "left", step * -960, 2000);
        lia();
    }
}
atuomove()

//时尚美妆
function shishang() {
    var zb_61 = document.getElementById("zb_61");
    var zb_62 = document.getElementById("zb_62");
    zb_61.onmousemove = function () {
        zb_62.style.display = "block"
    };
    zb_61.onmouseout = function () {
        zb_62.style.display = "none"
    };

    var zb_63 = document.getElementById("zb_63");
    var zb_64 = document.getElementById("zb_64");
    zb_63.onmousemove = function () {
        zb_64.style.display = "block"
    };
    zb_63.onmouseout = function () {
        zb_64.style.display = "none"
    };

    var zb_65 = document.getElementById("zb_65");
    var zb_66 = document.getElementById("zb_66");
    zb_65.onmousemove = function () {
        zb_66.style.display = "block"
    };
    zb_65.onmouseout = function () {
        zb_66.style.display = "none"
    };
}
shishang();

//侧边
var goTop = document.getElementById("goTop");
var goTop1 = document.getElementById("goTop1");
var li1 = document.getElementById("li1");
var timer = null;

function move() {
    goTop.style.display = "none";
    window.onscroll = null;
    window.clearTimeout(timer);
    document.documentElement.scrollTop -= 500;
    document.body.scrollTop -= 500;
    if (getWin("scrollTop") !== 0) {
        timer = window.setTimeout(move, 10);
    } else {
        window.onscroll = scrollFn;
    }
}

function scrollFn() {
    var curTop = getWin("scrollTop");
    goTop.style.display = curTop > 0 ? "block" : "none";
    daoHang.style.position = curTop >= 151 ? "fixed" : "relative";
    goTop.onmousemove = function () {
        goTop1.style.display = "block";
        li1.style.display = "none";
    };
    goTop.onmouseout = function () {
        goTop1.style.display = "none";
        li1.style.display = "block"
    }
}
goTop.onclick = move;
window.onscroll = scrollFn;

// 购物车 客服
function shopping() {
    var right0 = document.getElementById("right0");
    var right1 = document.getElementById("right1");
    right1.onmousemove = function () {
        right0.style.right = 0 + "px"
    };
    right1.onmouseout = function () {
        right0.style.right = -36 + "px"
    };
}
shopping()
// 文字
function move() {
    var db12_1 = document.getElementById("db12_1");
    var text = db12_1.innerHTML;
    var time = null;
    window.clearTimeout(time);
    var par = db12_1.scrollTop;
    db12_1.scrollTop += 30;
    var last = db12_1.scrollTop;
    if (par == last) {
        db12_1.innerHTML += text;

    }
    time = window.setTimeout(move, 1000);
}
move();






