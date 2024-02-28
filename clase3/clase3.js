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

//funciones (ARROW FUNCTION)
//1. SIN PARAMETROS
//2. PARAMETRO
//3. 2 O MAS PARAMETRO
// DECLARAR5 5 COMO MINIMO LET Y CONST
// integrar con llamado a funciones y mostrar resultados


const edad =20;

let nombre ="sam";

let perro = "salchicha";

let carro ="camaro";

let moto= "bmw s100rr";

const Mmoto = (moto,nombre)=>{
    return "hola mi nombre es "+ nombre + " mi moto favorita es " +moto
}

const dia =(nombre)=>{
    return "hola soy "+ nombre +" el dia de hoy es jueves"
}

const viaje =(nombre,moto,carro)=> {
    return "hola soy " + nombre+ "voy a salir con mi familia mi moto que es una "+ moto+" y en mi carro que es un " + carro
}

console.log(nombre("tomas"));