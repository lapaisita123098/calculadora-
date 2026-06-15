let pantalla = document.querySelector(".texto1");
let botonB = document.querySelector(".borrar")
botonB.addEventListener("click", function(){
pantalla.textContent=pantalla.textContent.slice(0, pantalla.textContent.length - 1)
if(pantalla.textContent.length <= 10){
    pantalla.style.fontSize = "28px"
}
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
function calcular(){
    numero2 = Number(pantalla.textContent)

    switch (operacion){
    case "+":{
        numero1 = sumar(numero1, numero2)
    }
    break
    case "-":{
            numero1 = restar(numero1, numero2)
            }
    break
    case "*":{
            numero1 = multiplicar(numero1, numero2)
    }
    break
    case "/":{
            numero1 = dividir(numero1, numero2)
    }
    break
}

}
let botonsuma = document.querySelector(".suma")
botonsuma.addEventListener("click", function(){
    if(operacion){
        calcular()
    }
    else{
        numero1 = Number(pantalla.textContent)
    }
    operacion = "+"
    pantalla.textContent=""
});
let botonresta = document.querySelector(".resta")
botonresta.addEventListener("click", function(){
    if(operacion){
        calcular()
    }
    else{
        numero1 = Number(pantalla.textContent)
    }
    operacion = "-"
    pantalla.textContent=""
});
let botonmultiplicar = document.querySelector(".multiplicar")
botonmultiplicar.addEventListener("click", function(){
    if(operacion){
        calcular()
    }
    else{
        numero1 = Number(pantalla.textContent)
    }
    operacion = "*"
    pantalla.textContent=""
});
let botondividir = document.querySelector(".dividir")
botondividir.addEventListener("click", function(){
    if(operacion){
        calcular()
    }
    else{
        numero1 = Number(pantalla.textContent)
    }
    operacion = "/"
    pantalla.textContent=""
});
let botonigual = document.querySelector(".igual")
botonigual.addEventListener("click", function(){
                numero2 = Number(pantalla.textContent)
                
let numero3;


switch (operacion){
    case "+":{
            if (!isNaN(numero2)){
                numero3 = sumar(numero1, numero2)
    }
    }
    break
    case "-":{
            if (!isNaN(numero2)){
                numero3 = restar(numero1, numero2)
            }
    }
    break
    case "*":{
            if (!isNaN(numero2)){
                numero3 = multiplicar(numero1, numero2)
            }
    }
    break
    case "/":{
            if (!isNaN(numero2)){
                numero3 = dividir(numero1, numero2)
            }
    }
    break
}
pantalla.textContent = numero3;

numero1 = numero3;
operacion = false;

if(numero3.toString().length >= 10){
    pantalla.style.fontSize = "14px"
}
});

let botones = document.querySelectorAll("button")
for(let inicio = 0; inicio < botones.length; inicio++){
    botones[inicio].addEventListener("click", function(){
        if(!isNaN(botones[inicio].textContent)){
        if(pantalla.textContent.length < 11){
            pantalla.textContent += botones[inicio].textContent
        }}
    })
};

document.addEventListener("keydown", function(event){
    if(event.key === "Backspace"){
        botonB.click();
    }
    if(event.key === "Enter"){
        botonigual.click();
    }
    if(event.key === "c"){
        botonc.click();
    }
    for(let inicio2 = 0; inicio2 < botones.length; inicio2++){
        if(botones[inicio2].textContent === event.key){
            botones[inicio2].click();
        }
    }
})  

let botonc = document.querySelector(".borrartodo")
botonc.addEventListener("click", function(){
    operacion=false
    pantalla.textContent=""
    pantalla.style.fontSize="28px"
});
