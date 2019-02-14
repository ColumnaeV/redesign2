//Loading//
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('bodyContainer').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.cssText="opacity:0;z-index:-2;";
          document.getElementById('bodyContainer').style.opacity="1";
      },1500);
  }
}

//Script//
function openTheMap() {
    'use strict';
    document.getElementById("invitationContainer").style.cssText = "z-index: 5; opacity: 1;";
}
function closeTheMap() {
    'use strict';
    document.getElementById("invitationContainer").style.cssText = "z-index: -1; opacity: 0;";
}