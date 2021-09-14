
"use strict"
 
const lampada = document.getElementById("lampada")
let idInterval
 
function botoesligaDesliga(ligarEstado, desligarEstado){
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")
    ligar.disabled = ligarEstado
    desligar.disabled = desligarEstado
}
 
// function lampadaQuebrada(){
//     return (document.getElementById("lampada").src.indexOf("quebrada") !== -1)
// }
// function arrow
const lampadaQuebrada = () => lampada.src.indexOf("quebrada") !== -1
 
function ligarLampada(){
 
    if(!lampadaQuebrada()){
        lampada.src = "img/ligada.jpg"
        botoesligaDesliga(true, false)
    }
}
 
function desligarLampada(){
    if(!lampadaQuebrada()){
        lampada.src = "img/desligada.jpg"
        botoesligaDesliga(false, true)
    }
}
 
function quebrarLampada(){
 
    lampada.src = "img/quebrada.jpg"
    botoesligaDesliga(true, true)
}
 
// function lampadaDesligada(){
//     return lampada.src.includes("desligada")
// }
const lampadaDesligada = () => lampada.src.includes("desligada")
 
function trocarImagem(){
    if (lampadaDesligada()){
        ligarLampada()
    }else{
        desligarLampada()
    }
}
 
function piscar(){
    const piscar = document.getElementById("piscar")
    if (piscar.textContent == "Piscar"){
        idInterval = setInterval(trocarImagem, 1000)
        piscar.textContent = "Parar"
        document.getElementById("piscar").style.background="#dd2c00"
    }else{
        clearInterval(idInterval)
        piscar.textContent = "Piscar"
        document.getElementById("piscar").style.background="#43a047"
    }
}
 
// Eventos
document.getElementById("ligar").addEventListener("click", ligarLampada)
 
document.getElementById("desligar").addEventListener("click", desligarLampada)
 
document.getElementById("piscar").addEventListener("click", piscar)
 
document.getElementById("lampada").addEventListener("dblclick", quebrarLampada)
 
document.getElementById("lampada").addEventListener("mouseover", ligarLampada)
 
document.getElementById("lampada").addEventListener("mouseleave", desligarLampada)