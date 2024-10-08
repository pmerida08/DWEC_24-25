let texto = "";

texto += "<br/>Ancho: "  + screen.width;
texto += "<br/>Alto: "  + screen.height;


texto += "<br/>Ancho sin barra: "  + screen.availWidth;
texto += "<br/>Alto sin barra: "  + screen.availHeight;


texto += "<br/>Profundidad de color: "  + screen.colorDepth;

document.getElementById("info").innerHTML = texto;