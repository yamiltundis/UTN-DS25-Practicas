//PUNTO 1
var num = 10;
num +=5;

//PUNTO 3
function punto3(){
numero1 = prompt("Ingrese el primer numero");
numero2 = prompt("Ingrese el segundo numero");
if (numero1 > numero2){
    alert(`El primer numero ingresado ${numero1} es mayor que el segundo ${numero2}`);
} else if (numero1 < numero2){
    alert(`El segundo numero ingresado ${numero2} es mayor que el primero ${numero1}`);
} else if (numero1 = numero2) {
    alert("Ambos numeros son iguales");
}
}

//PUNTO 5
function punto5(){
    let total = 0;
    for (let i = 0; i < 11; i++){
        total = total + i;
    }
    let tot = document.createElement("p");
    valor = document.createTextNode(`El valor de la sumatoria de los numeros del 0 al 10 es: ${total}`);
    tot.appendChild(valor);
    document.body.appendChild(tot);
}

//PUNTO 6
function punto6(){
    numeros = [3,5,6,1,10,7,12,8,2,4];
    let mult = 1;
    for (num of numeros){
        mult = mult * num;
    }
    let parrafo = document.createElement("p");
    enuncnumeros = document.createTextNode(`Numeros elegidos arbitrariamente: ${numeros}`);
    saltodelinea = document.createElement("br");
    valor = document.createTextNode(`El valor de la multiplicacion de esos 10 numeros es: ${mult}`);
    parrafo.appendChild(enuncnumeros);
    parrafo.appendChild(saltodelinea);
    parrafo.appendChild(valor);
    document.body.appendChild(parrafo);
}

//PUNTO 7
function punto7(){
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    total = n1 * n2
    p = document.getElementById("totmult");
    p.innerHTML = `El valor de su multiplicacion es: ${total}`
}

//PUNTO 8
function punto8(){
   cad1 = document.getElementById("c1").value;
   cad2 = document.getElementById("c2").value;
   p = document.getElementById("totconcat");
   p.innerHTML = `Las dos cadenas unidas forman: ${concatenar(cad1,cad2)}`
}

function concatenar(cad1,cad2){
    cadTot = cad1.concat(cad2);
    return cadTot
}

//PUNTO 10
function punto10(){
    numero = document.getElementById("num").value;
    p = document.getElementById("ast");
    p.innerHTML = `Asteriscos: ${asteriscos(numero)}`;
}

function asteriscos(n){
    let cadenaAsteriscos = "";
    for (let i = 0; i < n; i++){
        cadenaAsteriscos = cadenaAsteriscos + "*";
    }
    return cadenaAsteriscos;
}

//PUNTO 11
function punto11(){
    let pre = document.getElementById("precio").value;
    let met = document.getElementById("metodopago").value;
    if ((met != ("C")) && (met != ("c")) && (met != ("E")) && (met != ("e")) && (met != ("D")) && (met != ("d"))){
        alert("Ingrese un metodo de pago correcto");
    } else {
        parrafo = document.createElement("p");
        precioFinal = document.createTextNode(`El precio final es de: ${calcularPrecio(pre,met)}`);
        parrafo.appendChild(precioFinal);
        document.body.appendChild(parrafo);
    }
}

function calcularPrecio(pre,met){
    if ((pre < 200) && (pre > 0)){
        return pre;
    } else if ((pre >= 200) && (pre <= 400)){
        if ((met == "E") || (met == "e")){
            return (pre * 0.7);
        } else if ((met == "C") || (met == "c")){
            return (pre * 0.9);
        } else if((met == "D") || (met == "d")){
            return (pre * 0.8);
        }
    } else if (pre > 400){
        return (pre * 0.6);
    } else if (pre <= 0){
        alert("Precio invalido");
        return ("Intente nuevamente");
    }
}

function punto12(){
    num = document.getElementById("num").value;
    p = document.createElement("p");
    aster(num,p);
    document.body.appendChild(p);
}

function aster(num,p){
    cadena="";
    for(let i = 0; i < num; i++){
        cadena = cadena + "*"
        as= document.createTextNode(cadena);
        salto = document.createElement("br");
        p.appendChild(as);
        p.appendChild(salto);
    }
    return p;
}

function punto13(){
    nombresDias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Fin de semana"];
    var dia = parseInt(document.getElementById("num").value);
    if (Number.isInteger(dia)){
        if ((dia >= 1) && (dia <= 7)){
        salida = document.getElementById("retornodia");
        nombreDia = calcularDia(dia,nombresDias);
        salida.innerHTML = `El dia ingresado es: ${nombreDia}`;
        } else {
            alert("Ingrese un dia correcto");
        }
    } else {
        alert("Ingrese un dia correcto");
    }
}

function calcularDia(dia,nombresDias){
    for (i in nombresDias){
        if (i == (dia - 1)){
            return nombresDias[i];
        } else if (dia == 7){
            return nombresDias[5];
        }
    }
}



















