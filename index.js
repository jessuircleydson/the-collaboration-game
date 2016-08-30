'use strict';


var andar = 0;
var distancia = 0;
var bg = 0;
var sonic = document.querySelector('div.sonic');
var bodyElement = document.querySelector('body');


var getLargura = function() {
    return document.body.scrollWidth;
}

var checkKey = function(key){
    if(key == "ArrowRight"){
        return true;
    }else {
        return false;
    }
}

var somaAndar = function(){

    if(andar > 8){
        return andar = 0;
    }else {
        return andar += 1;
    }

}

var somaDistancia = function(){
    return distancia += 10;
}

var moveBg = function(){
    return bg -= 50;
}

var setStyle = function(elemento){

      return function(atributo) {

          return elemento.style.cssText = atributo;

      }

}

var setAndar = function(andar){
    switch (andar) {
      case 1:
        return setStyle(sonic)('background-position: -114px -7px; transform: translate('+somaDistancia()+'px, 0px)');
        break;

      case 2:
        return setStyle(sonic)('background-position: -222px -11px; transform: translate('+somaDistancia()+'px, 0px)');
        break;

      case 3:
        return setStyle(sonic)('background-position: -324px -9px; transform: translate('+somaDistancia()+'px, 0px)');
        break;

      case 4:
        return setStyle(sonic)('background-position: -423px -8px; transform: translate('+somaDistancia()+'px, 0px)');
        break;

      case 5:
        return setStyle(sonic)('background-position: -528px -6px; transform: translate('+somaDistancia()+'px, 0px)');
        break;

      case 6:
        return setStyle(sonic)('background-position: -629px -9px; transform: translate('+somaDistancia()+'px, 0px)');
        break

      case 7:
        return setStyle(sonic)('background-position: -732px -8px; transform: translate('+somaDistancia()+'px, 0px)');
        break;

      case 8:
        return setStyle(sonic)('background-position: -834px -6px; transform: translate('+somaDistancia()+'px, 0px)');
        break;

      case 9:
        return setStyle(sonic)('background-position: -936px -6px; transform: translate('+somaDistancia()+'px, 0px)');
        break;

      default:
        return setStyle(sonic)('background-position: -6px -7px; transform: translate('+largura+'px, 0px)');

    }
}

var run = function(){


    document.onkeypress = function(event){

        if(checkKey(event.key)){

            setStyle(bodyElement)('background-position:'+moveBg()+'px 0');
            setAndar(somaAndar());


        }

    }

}

run();
