import './style.css'
//Ejercicio 2
//Introducción a JavaScript
function sumarVal(a,b){
  const c = a+b;
  console.log("La suma de a más b es: "+c);
}
sumarVal(5,10);

//Ejercicio 3
let nombreUsuario = prompt("¿Cómo es tu nombre?");
alert("Hola "+nombreUsuario+", ¡Bienvenido a las bases de Javascript!");

//Ejercicio 4
//Operadores lógicos y condicionales
let a = 10;
let b = 15;
let c; 
if (a > b) {
  c = a;
  console.log("El mayor número es a y su valor es: " + c);
} else if (b > a) {
  c = b;
  console.log("El mayor número es b y su valor es: " + c);
} else {
  console.log("Los números a y b son iguales y su valor es: " + a);
}
//Ejercicio 5
let numero = prompt("Ingrese un número al azar POSITIVO");
if(numero >=0){
  if(numero ==0){
    console.log("El número "+numero+" es par");
  }else if(numero % 2 == 0){
    console.log("El número "+numero+ " es par");
  }else{
    console.log("El número "+numero+" es impar");
  }
}else{
  console.log("El número a ingresar debe ser mayor o igual a 0");
};
//Ejercicio 6
//Operadores de asignación y bucles
let i = 10;
while(i > 0){
  console.log(i);
  i--;
}
//Ejercicio 7
let num;
do{
  num = prompt("Ingrese un número mayor a 100");
}while(num <= 100) {
  console.log("Ingresaste un número mayor a 100: "+num);
}
//Ejercicio 8
//Funciones de Javascript
let number=0;
do{
  number = prompt("Ingrese un número")
}while(number <0);

esPar(number);

function esPar(number){
  if(number % 2 ==0){
    console.log("El número "+number+" es par:"+true);
  }else{
    console.log("El número "+number+" es impar:"+false);
  }
}
//Ejercicio 7
let celcius = prompt("Ingrese el valor entero representativo de los grados Cº");
convertirCelsiusAFahrenheit(celcius);
function convertirCelsiusAFahrenheit(celcius){
  let F = 0;
  F = celcius * 1.8 + 32;
  console.log(celcius+"ºC son equivalentes a "+F+"ºF");
}
//Ejercicio 8 
//Objetos en JavaScript
let Persona ={
  nombre:"Ana",
  edad:30,
  ciudad: "Mendoza",
  cambiarCiudad(nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  }
}
Persona.cambiarCiudad("Barcelona");
console.log("Persona: "+Persona.nombre,"Edad " + Persona.edad,"Ciudad " + Persona.ciudad);
//Ejercicio 9
let Libro ={
  titulo:"Los Garruas",
  autor:"Mister Don Bosque",
  año:2010
}
function esAntiguo(Libro){
  if(Libro.año < 2014){
    console.log(`El libro "${Libro.titulo}" es antiguo: `+true);
  }else{
    console.log(`El libro "${Libro.titulo}" es reciente: `+ false);
  }
}
esAntiguo(Libro);
//Ejercicio 10
let array1 =[1,2,3,4,5,6,7,8,9,10];
let array2 = [];

function multArr(array1){
  for(let i=0;i<array1.length ;i++){
    array2.push(array1[i]*2);
  }
  console.log("Números multiplicados por 2 "+array2);
}
console.log("Número originales "+array1);
multArr(array1);
//Ejercicio 11
let pares=[];
function primerosPares(){
  for (let i = 1; i <= 20; i++) {
    if(i % 2 == 0){
      pares.push(i);
    }
  }
  console.log("Primeros 10 números pares "+ pares);
}
primerosPares(pares);
//Ejercicio 12
//Introducción al DOM
export function cambiarColor() {
  const parrafos = document.querySelectorAll('p');
  parrafos.forEach(parrafo => {
      parrafo.style.color = 'blue'; 
  });
}
document.querySelector('button').addEventListener('click', cambiarColor);
//Ejercicio 13
document.getElementById('miFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const valorTexto = document.getElementById('texto').value; 
  alert('Valor ingresado: ' + valorTexto);
});
//Ejercicio 14
//Eventos en DOM
const lista = document.getElementById('miLista');
const elementos = lista.getElementsByTagName('li');

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function() {
        console.log('Texto del elemento: ' + this.innerText); 
    });
}
//Ejercicio 15
const campoTexto = document.getElementById('miCampoTexto');
const deshabilitarBtn = document.getElementById('deshabilitarBtn');
const habilitarBtn = document.getElementById('habilitarBtn');

deshabilitarBtn.addEventListener('click', function() {
    campoTexto.disabled = true; 
});
habilitarBtn.addEventListener('click', function() {
    campoTexto.disabled = false;
});
//Ejercicio 16
//LocalStorage 
const formulario = document.getElementById('miFormulario');
const correoInput = document.getElementById('correoInput');
const correoGuardadoDiv = document.getElementById('correoGuardado');

function mostrarCorreo() {
    const correo = localStorage.getItem('correo');
    if (correo) {
        correoGuardadoDiv.innerHTML = `
            <p>Correo guardado: ${correo}</p>
            <button id="eliminarBtn">Eliminar</button>
        `;
        document.getElementById('eliminarBtn').addEventListener('click', eliminarCorreo);
    }
}

function eliminarCorreo() {
    localStorage.removeItem('correo');
    correoGuardadoDiv.innerHTML = ''; 
    correoInput.value = '';
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const correo = correoInput.value;
    localStorage.setItem('correo', correo); 
    mostrarCorreo(); 
    correoInput.value = ''; 
});
window.onload = mostrarCorreo;


