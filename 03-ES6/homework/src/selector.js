var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0]==="#") return "id";
  if(selector[0]===".") return "class";
  if(selector.includes(".")) return "tag.class";
  return "tag";

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    // let b = selector.split('#');
    // matchFunction = function (a) {
    //   return a.id && (a.id.toLowerCase() === b[1].toLowerCase());
    // };
    matchFunction = function (element) {
      return '#' + element.id === selector
    }
  } else if (selectorType === "class") {
    // matchFunction = function (element) {
    //   return '.' + element.className === selector
    // }
    matchFunction = function (a) {
      let b = selector.split('.');
      let c = a.className.split(' ');
      return a.className && c.includes(b[1].toLowerCase());
    };
  } else if (selectorType === "tag.class") {
    
  } else if (selectorType === "tag") {
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

/// JCM
// var selector = ".heading";
// var matcher = matchFunctionMaker(selector);
// var sampleDivEl = document.createElement("DIV");
// sampleDivEl.className = "heading";
// var a =matcher(sampleDivEl)//.toEqual(true);