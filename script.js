let pantalla = document.querySelector(".texto1");
let boton1 = document.querySelector(".uno");
boton1.addEventListener("click", function(){
    pantalla.textContent+="1"
});
let boton2 = document.querySelector(".dos");
boton2.addEventListener("click", function(){
    pantalla.textContent+="2"
});
let boton3 = document.querySelector(".tres");
boton3.addEventListener("click", function(){
    pantalla.textContent+="3"
});
let boton4 = document.querySelector(".cuatro");
boton4.addEventListener("click", function(){
    pantalla.textContent+="4"
})
let boton5 = document.querySelector(".cinco");
boton5.addEventListener("click", function(){
    pantalla.textContent+="5"
});
let boton6 = document.querySelector(".seis")
boton6.addEventListener("click", function(){
    pantalla.textContent+="6"
});
let boton7 = document.querySelector(".siete")
boton7.addEventListener("click", function(){
    pantalla.textContent+="7"
});
let boton8 = document.querySelector(".ocho")
boton8.addEventListener("click", function(){
    pantalla.textContent+="8"
});
let boton9 = document.querySelector(".nueve")
boton9.addEventListener("click", function(){
    pantalla.textContent+="9"
});
let boton0 = document.querySelector(".cero")
boton0.addEventListener("click", function(){
    pantalla.textContent+="0"
});
let botonB = document.querySelector(".borrar")
botonB.addEventListener("click", function(){
    pantalla.textContent="" 
});
let numero1;
let numero2;
let operacion;
function sumar(a, b){
    return a + b
};
function restar(a, b){
    return a - b
};
function multiplicar(a, b){
    return a * b
};
function dividir(a, b){
    return a / b
};
let botonsuma = document.querySelector(".suma")
botonsuma.addEventListener("click", function(){
    operacion = "+"
    numero1 = Number(pantalla.textContent)
    if (!isNaN(numero1)){
        pantalla.textContent=""
    }
});
let botonresta = document.querySelector(".resta")
botonresta.addEventListener("click", function(){
    operacion = "-"
    numero1 = Number(pantalla.textContent)
    if (!isNaN(numero1)){
        pantalla.textContent=""
    }
});
let botonmultiplicar = document.querySelector(".multiplicar")
botonmultiplicar.addEventListener("click", function(){
    operacion = "*"
    numero1 = Number(pantalla.textContent)
    if (!isNaN(numero1)){
        pantalla.textContent=""
    }
});
let botondividir = document.querySelector(".dividir")
botondividir.addEventListener("click", function(){
    operacion = "/"
    numero1 = Number(pantalla.textContent)
    if (!isNaN(numero1)){
        pantalla.textContent=""
    }
});
let botonigual = document.querySelector(".igual")
botonigual.addEventListener("click", function(){
                numero2 = Number(pantalla.textContent)


switch (operacion){
    case "+":{
            if (!isNaN(numero2)){
                let numero3 = sumar(numero1, numero2)
                pantalla.textContent=numero3;
    }
    }
    break
    case "-":{
            if (!isNaN(numero2)){
                let numero3 = restar(numero1, numero2)
                pantalla.textContent=numero3;
            }
    }
    break
    case "*":{
            if (!isNaN(numero2)){
                let numero3 = multiplicar(numero1, numero2)
                pantalla.textContent=numero3;
            }
    }
    break
    case "/":{
            if (!isNaN(numero2)){
                let numero3 = dividir(numero1, numero2)
                pantalla.textContent=numero3;
            }
    }
    break
}
});
