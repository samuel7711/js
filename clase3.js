//declarar variable sin inicializar
let NombreUsuario;
//declaracion covalor incial
let user = "juan";

console.log(NombreUsuario);  
console.log(user); 

//operador ternario

user === "pedro"?console.log("verdadero"):console.log("falso");

//const es parecido a constante

const PI=3.1416
//trato de cambiar el valor, da error
//PI=20;

//metodos propios del lenguaje

let PI_dos;
PI_dos=Math.PI;
user.includes("p");
console.log(user.length);

//Metodos o funciones
//arrow function

const saludarUsuario =() =>{
    return "Hola juan";
}

const saludaruser=nameUser=>{
    return "Hola "+ nameUser;
}

const sumarDatos =(numberOne, numberTwo)=>{
    return numberOne+numberTwo;
}

console.log(sumarDatos(1.0,"2"));

let tres = saludaruser;

console.log(tres("pedro"));

//ciclos

for(let i=0;i<10;i++){

}

//funciones (forma anterior)
function sum(numero1,numero2){

}


const weve = function(){

}

