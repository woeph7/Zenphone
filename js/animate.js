
var screenAnimateElements ={
  '.screen-1' : [
    '.screen-1_heading',
    '.screen-1_phone',
    '.screen-1_shadow',
  ]

};

function setScreenAnimate(screenCls) {
  var screen = document.querySelector(screenCls); //get element
  var animateElements = screenAnimateElements[screenCls]; // elemets required animation
  var isSetAnimateClass = false; //initial element class
  var isAnimateDone = false; // initial element animation

  screen.onclick = function(){

    //initialize animateElements
    if(isSetAnimateClass === false){
      for(var i=0; i<animateElements.length;i++){
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');

        element.setAttribute('class',baseCls +' '+animateElements[i].substr(1)+'_animate_init');
      }
      isSetAnimateClass = true;
      return ;
    }

    //switch animateElements init -> done
    if(isAnimateDone === false){
      for(var i=0; i<animateElements.length;i++){
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
      }
      isAnimateDone = true;
      return ;
      } 
    //switch animateElements done -> init
    if(isAnimateDone === true){
      for(var i=0;i<animateElements.length;i++){
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
      }
      isAnimateDone = false;
      return ;
    }
  }
}

setScreenAnimate('.screen-1');
