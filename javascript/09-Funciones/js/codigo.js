var str = "Hola Mundo 1234 !_*.";
var contiene = formatoCadena(str);
// var contiene = formatoCadena(str.toLowerCase());
// var contiene = formatoCadena(str.toUpperCase());

if (contiene[0] && contiene[1]) {
    console.log(str + " " + "contiene minusculas y mayusculas");
} else if (contiene[0]) {
    console.log(str + " " + "contiene solo minusculas");
} else {
    console.log(str + " " + "contiene solo mayusculas");
}
