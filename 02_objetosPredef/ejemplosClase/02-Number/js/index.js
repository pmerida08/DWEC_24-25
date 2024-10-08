/*var numero = new Number("2sa"); //Devuelve NaN

//Cambio de base entre números: toString()
var base10 = 128;
alert(base10+ " en base 2 es: "+base10.toString(2));
alert(base10+ " en base 8 es: "+base10.toString(8));
alert(base10+ " en base 16 es: "+base10.toString(16));


var atipico = 100/"casa";//NaN
var atipico2 = 100/"10";//Lo calcula haciendo una conversión a number de la cadena
alert("Qué tiene atipico2: "+atipico2);

//Números con objetos
var num1 = 123;
var num2 = new Number(123);
var num3 = new Number(123);

alert("num1 "+typeof(num1));//Devuelve number
alert("num2 "+typeof(num2));//devuelve object
alert("num3 "+typeof(num3));
alert ("num1 == num2:"+(num1==num2));
alert ("num1 === num2:"+(num1===num2));
alert ("num2 == num3:"+(num2==num3));

//PROPIEDADES
var maximo = Number.MAX_VALUE; alert("Máximo="+maximo);
var minimo = Number.MIN_VALUE; alert("Mínimo="+minimo);

//MÉTODOS
//toFixed(<numero decimales>): número específico de decimales
//toPrecision(<numero cifras>)
var x = 9.8765;
alert(x.toFixed(0));
alert(x.toFixed(2));
alert(x.toFixed(6));
alert(x.toPrecision(2));
*/

//MÉTODOS GLOBALES PARA CONVERTIR VARIABLES A NÚMEROS:
alert(Number(true));
alert(Number(false));
alert(Number("10"));
alert(Number("casa"));//Devuelve NaN

alert("parseInt: "+parseInt("10 20"));//10
alert(parseInt("casa 10"));//NaN
alert(parseInt("10 loquesea"));//10