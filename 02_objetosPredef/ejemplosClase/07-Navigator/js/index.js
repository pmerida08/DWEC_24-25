//PROPIEDADES
var texto = "";

//onLine
texto += "<br/>OnLine: "+navigator.onLine;
//language: idioma del navegador
texto += "<br/>Idioma: "+navigator.language;
//coolieEnabled
texto += "<br/>Cookies: "+navigator.cookieEnabled;
//userAgent
texto += "<br/>UserAgent: "+navigator.userAgent;

document.getElementById("ventanaPpal").innerHTML = texto;