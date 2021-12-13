/*Caculando el perimetro y area de un cuadrado*/
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd ();

/*Caculando el perimetro y area de un triangulo*/
console.group("Triangulos")
/*
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;
const alturaTriangulo = 5.5;
/*IDENTACION DE CODIGO */
/*console.log(
    "Lados del triagulo miden miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo3 
    + "cm, "
    );*/

function perimetroTriangunlo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo (altura, base){
    return (base * altura) / 2;
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}
/*
console.log ("La altura  del triangulo es de: " + alturaTriangulo + "cm. ");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo3 * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2")*/
console.groupEnd();

/*Calculando el perimetro y diametro del circulo */
console.group("Circulos");
const PI = Math.PI;
/*const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm ");*/  

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo (radio){
    return (radio * radio) * PI;
}
/*
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm ");

const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm ");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm^2 ");*/
console.groupEnd();

/*Aqui interactuamos con HTML*/
/*CUADRADO OPERACION JS*/
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area del cuadrado es: " + area);
}

/*TRIANGULO OPERACION JS*/
function calcularPerimetroTriangulo(){    
    const lado1 = parseInt(document.getElementById("InputTrianguloL1").value);
    const lado2 = parseInt(document.getElementById("InputTrianguloL2").value);
    const base = parseInt(document.getElementById("InputTrianguloBa").value);
    const perimetro = perimetroTriangunlo(lado1, lado2, base);
    alert("El perimetro del triangulo es: " + perimetro);  
}

function calcularAlturaIsoceles(){    
    const trianguloGrandeLadoA = parseInt(document.getElementById("InputTrianguloL1").value);
    const trianguloGrandeLadoB = parseInt(document.getElementById("InputTrianguloL2").value);
    const trianguloGrandeLadoBase = parseInt(document.getElementById("InputTrianguloBa").value);
    const altura = alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase);
    alert("La altura del triangulo es: " + altura);  
}



function calcularAreaTriangulo(){    
    const input2 = document.getElementById("InputTrianguloAlt");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("InputTrianguloBa");
    const value3 = parseInt(input3.value);
    const area = areaTriangulo(value2,value3);
    alert("El area del triangulo es: " + area);
 }

 /*CIRCULO OPERACION JS*/
 function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetro);
}

function calcularAreaCirculo(){
    const Area = document.getElementById("InputCirculo");
    const A = parseFloat(Area.value);

    const area = Math.round(areaCirculo(A));
    alert("El Area de tu circulo es de: " + area + " cm");
}

