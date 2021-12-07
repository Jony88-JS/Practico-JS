/*Caculando el perimetro y area de un cuadrado*/
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd ();

/*Caculando el perimetro y area de un triangulo*/
console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;
const alturaTriangulo = 5.5;
/*IDENTACION DE CODIGO */
console.log(
    "Lados del triagulo miden miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo3 
    + "cm, "
    );
console.log ("La altura  del triangulo es de: " + alturaTriangulo + "cm. ");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo3 * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2")
console.groupEnd();

/*Calculando el perimetro y diametro del circulo */
console.group("Circulos");
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm ");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm ");

const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm ");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm^2 ");
console.groupEnd();