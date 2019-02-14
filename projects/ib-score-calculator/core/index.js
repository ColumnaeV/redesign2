//Setting Variables//
var sliderVal1 = document.getElementById("slide1");
var sliderVal2 = document.getElementById("slide2");
var sliderVal3 = document.getElementById("slide3");
var sliderVal4 = document.getElementById("slide4");
var sliderOutput1 = document.getElementById("sliderDisplay1");
var sliderOutput2 = document.getElementById("sliderDisplay2");
var sliderOutput3 = document.getElementById("sliderDisplay3");
var sliderOutput4 = document.getElementById("sliderDisplay4");

sliderVal1.oninput = function () {
    'use strict';
    sliderOutput1.innerHTML = this.value;
}
sliderVal2.oninput = function () {
    'use strict';
    sliderOutput2.innerHTML = this.value;
}
sliderVal3.oninput = function () {
    'use strict';
    sliderOutput3.innerHTML = this.value;
}
sliderVal4.oninput = function () {
    'use strict';
    sliderOutput4.innerHTML = this.value;
}
function calc1() {
    'use strict';
    var val1 = sliderVal1.value;
    var val2 = sliderVal2.value;
    var val3 = sliderVal3.value;
    var val4 = sliderVal4.value;
    var val5 = (val4/100) + 1.09;
    var result = ((((((Math.log(val1 * val2 * val3)) / (Math.log(2000))) * 1.155)) / (val5)) * (100)).toFixed(2);
    if (result < 0) result = 0;
    document.getElementById("percentValue").innerHTML = result;
    console.log(val1);
    console.log(val2);
    console.log(val3);
    console.log(val4);
    console.log(val5);
    console.log(result);
}