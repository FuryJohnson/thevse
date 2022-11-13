/* global define, exports: true, module*/
;(function(root, factory) {
  'use strict';


  var stopCircle = document.getElementsByClassName('about__block');
for (var i = 0; i < stopCircle.length; i++) {
    if (stopCircle[i].matches(':hover')) {}
    stopCircle[i].addEventListener("mouseover", function(event) {
        document.getElementsByClassName('circle-arround-two-1')[0].classList.add("stopanima");
        document.getElementsByClassName('circle-arround-two-2')[0].classList.add("stopanima");
        document.getElementsByClassName('circle-arround-two-3')[0].classList.add("stopanima");
        document.getElementsByClassName('circle-arround-two-4')[0].classList.add("stopanima");
        document.getElementsByClassName('circle-arround-two-5')[0].classList.add("stopanima");
        document.getElementsByClassName('about__block').classList.add("stopanima");
      });
    stopCircle[i].addEventListener("mouseout", function(event) {
        document.getElementsByClassName('circle-arround-two-1')[0].classList.remove("stopanima");
        document.getElementsByClassName('circle-arround-two-2')[0].classList.remove("stopanima");
        document.getElementsByClassName('circle-arround-two-3')[0].classList.remove("stopanima");
        document.getElementsByClassName('circle-arround-two-4')[0].classList.remove("stopanima");
        document.getElementsByClassName('circle-arround-two-5')[0].classList.remove("stopanima");
        document.getElementsByClassName('about__block').classList.remove("stopanima");
      });
}

  if(typeof define === 'function' && define.amd) {
      define(factory);
  }
  else if(typeof exports === 'object') {
      exports = module.exports = factory();
  }
  else {
      root.TinyType = factory();
  }
})(this, function() {
return function TinyType(
  selectedElement,   // element's id string OR a DOM Element
  strings = ['Try passing some strings.', 'Pretty cool, isn\'t it?'],
  {
    typeSpeed = 200,
    deleteSpeed = 50,
    startDelay = 500,
    deleteDelay = 500,
    cursor = ' ',
    loop = true,
    onFinished,
  } = {}  // configs are optional
) {
  const element = (typeof selectedElement === 'string')
    ? document.getElementById(selectedElement)
    : selectedElement;

  deleteDelay = deleteDelay || 0;   // adressess deleteDelay: false
  startDelay = startDelay || 0; // adressess startDelay: false

  if (cursor) {
    const cursorSpan = document.createElement('span');
    cursorSpan.classList.add('line');
    cursorSpan.textContent = cursor;
    element.insertAdjacentElement('afterend', cursorSpan);
  }

  let stringsIndex = 0;

  typewrite(strings);

  function typewrite(strings) {
    if (stringsIndex === strings.length)
      if (loop) stringsIndex = 0;   // should always be the case
      else return;                  // probably not usefull

    setTimeout(() => { typeString(strings[stringsIndex]); }, startDelay);
  }

  function typeString(str) {
    let index = 0;

    const intervalID = setInterval(() => {
      element.textContent += str[index];
      if (++index === str.length) return onStringTyped(intervalID);
    }, typeSpeed);
  }

  function onStringTyped(id) {
    clearInterval(id);
    if (!loop && stringsIndex === strings.length - 1)   // if no loop, don’t erase last string
      return (onFinished) ? onFinished() : null;
    setTimeout(eraseString, deleteDelay);
  }

  function eraseString() {
    const str = element.textContent;
    let strLength = str.length;

    const intervalID = setInterval(() => {
      element.textContent = str.substr(0, --strLength);
      if (strLength === 0) return onStringErased(intervalID);
    }, deleteSpeed);
  }

  function onStringErased(id) {
    clearInterval(id);
    ++stringsIndex;
    typewrite(strings);
  }

};

});


/************************************************
***************** CONFIG TEST *******************
************************************************/
// var frases = ['Vamos testar?'];
var frases = ['The VSЁ', 'проекты', 'комьюнити', 'новости', 'обучение'];
TinyType('tinytype', frases, {
// cursor: '▐',
// cursor: '_',
// cursor: false,
// startDelay: 750,
onFinished: function() { console.log('terminou!!'); },
// deleteDelay: 300,
// loop: true,
// typeSpeed: 170,
deleteSpeed: 80
});


