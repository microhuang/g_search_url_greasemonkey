// ==UserScript==
// @name        g
// @namespace   g
// @description google search
// @include     *
// @version     1
// ==/UserScript==

var l = location.href;

var reg=/(?:&url=)(.*)(?:&ei=)/;
//console.log(decodeURIComponent(reg.exec(l)[1]));
l = decodeURIComponent(reg.exec(l)[1]);

if (l) {
    location.href = l;
}
