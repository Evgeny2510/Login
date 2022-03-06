document.getElementById('sliders').onmousemove = function (event) {
    var  x = event.offsetX;
    // console.log(x);
    document.getElementById('slider_2').style.width = x + 'px';
}

// document.getElementById('sliders').onmousemove = function (event) {
// document.getElementById('slider_2').style.width = '675px';
// }