//Creación de la fecha actual
/*var actual = new Date();
alert(actual);
*/
/*********OJO!!!!!!!!!!
Los días de la semana comienzan en domingo -> 0
Los meses comienzan desde 0, enero -> 0
*********/


//Creación de fecha con cadenas:
var d1 = new Date("Wed Mar 25 2015 09:23:45 GMT +0100 (W. Europe Standard Time)"); 
var d2 = new Date("October 12, 2016 10:30:00");
var d3 = new Date("January 25 2015");
var d4 = new Date("Jan 25 2015"); //También "25 Jan 2015"
//Podemos utilizar comas porque se ignoran
var d5 = new Date("2016-05-12T12:34:25");
var d6 = new Date("2016-05-12"); // YYYY-MM-DD
var d7 = new Date("2016/05/12"); //YYYY/MM/DD o DD/MM/YYYY
var d8 = new Date("2024-05");
var d9 = new Date("2024");

//Creación de fecha en milisegundos
var dms = new Date(86400000);
//alert("La fecha en ms: "+dms);
var fechaCorta = new Date(2024,11,10);
//alert(fechaCorta);

var fecha = new Date();
//alert("toString: "+fecha.toString());

//Métodos GET
var fechaGet = new Date();
//alert(fechaGet.getDay()+" "+fechaGet.getDate()+"/"+fechaGet.getMonth()+"/"+fechaGet.getFullYear());
//alert(fechaGet.getHours()+":"+fechaGet.getMinutes()+":"+fechaGet.getSeconds()+":"+fechaGet.getMilliseconds());
//alert("Ms desde 01/01/1970: "+fechaGet.getTime());

//Métodos SET
var fechaSet = new Date();
fechaSet.setMonth(11);
fechaSet.setDate(31);
fechaSet.setFullYear(2031);
fechaSet.setHours(23);
fechaSet.setMinutes(59);
fechaSet.setSeconds(59);
fechaSet.setMilliseconds(59);


//Sumar 3 meses a la fecha que tengo almacenada
fechaSet.setMonth(fechaSet.getMonth()+2);
alert(fechaSet.toString());