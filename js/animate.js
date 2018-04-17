
var screenAnimateElements ={
  '.screen-1' : [
    '.screen-1_heading',
    '.screen-1_phone',
    '.screen-1_shadow',
  ],
  '.screen-2' : [
    '.screen-2_heading',
    '.screen-2_subheading',
    '.screen-2_phone',
    '.screen-2_point_i_1',
    '.screen-2_point_i_2',
    '.screen-2_point_i_3',
  ],
  '.screen-3' :[
    '.screen-3_heading',
    '.screen-3_subheading',
    '.screen-3_phone',
    '.screen-3_features',
  ],
  '.screen-4' :[
    '.screen-4_heading',
    '.screen-4_subheading',
    '.screen-4_type_item_i_1',
    '.screen-4_type_item_i_2',
    '.screen-4_type_item_i_3',
    '.screen-4_type_item_i_4',
  ],
  '.screen-5' :[
    '.screen-5_heading',
    '.screen-5_subheading',
    '.screen-5_bg',
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


for(k in screenAnimateElements){
  setScreenAnimate(k);
}
