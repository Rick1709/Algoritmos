function saludo(){
    alert("Bienvenido Usuario");
    alert("A continuación encontraras unos botones que ejecutan funciones con JS puro");
}
function suma(){
    let A=0;
    let B=0;
    let SUMA=0;

    A=parseInt(prompt("Ingrese el primer valor a sumar"));
    B=parseInt(prompt("Ingrese el segundo valor a sumar"));
    SUMA=A+B;
    alert("El resultado de la suma de los dos valores es:"+SUMA);
}
function OperacionesBasicas(){
    let a=0;
    let b=0;
    let SUMA=0;
    let RESTA=0;
    let PRODUCTO=0;
    let DIVISION=0;
    a=parseInt(prompt("Ingrese el primer valor :"));
    b=parseInt(prompt("Ingrese el segundo valor :"));
    SUMA=a+b;
    RESTA=a-b;
    PRODUCTO=a*b;
    DIVISION=a/b
alert("los resultados de las operaciones básicasc con los digitos ingresados son:\nsuma:"+SUMA+" "+"\nresta:"+RESTA+" "+"\nproducto:"+PRODUCTO+" "+"\ndivisión:"+DIVISION);
}
function CuadradoNumero(){
    base=parseInt(prompt("Ingrese base :"));
    let cuadrado=base*base;
    alert("El cuadrado de"+" "+base+"es:"+" "+" "+cuadrado);
    
}
function BaseTriangulo(){
    baseTriangulo=parseInt(prompt("Ingrese base del triángulo :"));
    AlturaTriangulo=parseInt(prompt("Ingrese altura del triángulo :"));  
    area=(baseTriangulo*AlturaTriangulo)/2;
    alert("El area del triangulo es"+" "+area);
}
function PromedioNotas(){
    let nota1;
    let nota2;
    let nota3;
    let nota4;
    let nota5;
    let nota6;
    let nota7;
    var nombreEstudiante=(prompt("ingrese nombre del estudiante"));
    var Materia=(prompt("ingrese materia a evaluar"));

    
    
    nota1=parseInt(prompt("Ingrese nota 1:"));
    nota2=parseInt(prompt("Ingrese nota 2:"));
    nota3=parseInt(prompt("Ingrese nota 3:"));
    nota4=parseInt(prompt("Ingrese nota 4:"));
    nota5=parseInt(prompt("Ingrese nota 5:"));
    nota6=parseInt(prompt("Ingrese nota 6:"));
    nota7=parseInt(prompt("Ingrese nota 7:"));
    let definitiva=(nota1+nota2+nota3+nota4+nota5+nota6+nota7)/7;
    definitiva=definitiva.toFixed(1);
    
    
    if (definitiva>6.2){
        alert("el estudiante"+nombreEstudiante+ "APRUEBA la materia de"+Materia+ "con :"+definitiva);
    }
    else {
        alert("el estudiante"+nombreEstudiante+ "REPRUEBA la materia de"+Materia+ "con :"+definitiva);
    }

}

function NumeroMayor(){
    let numero1=parseInt(prompt("Ingrese primer valor:"));
    let numero2=parseInt(prompt("Ingrese segundo valor:"));
    if (numero1>numero2){
        alert("El númeo mayor es:"+numero1);
    }else if (numero1<numero2){
        alert("El numero mayor es:"+numero2);
    }else {
    alert("los valores son iguales")
    }
}
function NumeroMenor(){
    let numero1=parseInt(prompt("Ingrese primer valor:"));
    let numero2=parseInt(prompt("Ingrese segundo valor:"));
    let numero3=parseInt(prompt("Ingrese tercer valor:"));
    menor=numero1;
    if (numero2<numero1){
        menor=numero2;
    }
    if (numero3<numero1){
        menor=numero3;
    }
    alert("el numero menor es:"+menor);

}
function Descuento(){
    let ValorKilo=4500;
    let NumeroKilos=parseInt(prompt);
    if (NumeroKilos<2){
        descuento=0;
    }
    else if (NumeroKilos);
}