let $btnEncriptar = document.querySelector("#Encriptar");
let $btnDesencriptar = document.querySelector("#Desencriptar");
let $btnCopiar = document.querySelector("#copyBTN")
mostrarONoTexto(false);

//************************* FUNCIONES *************************
function mostrarONoTexto(haytexto){
    if (haytexto==true) {
        document.getElementById("mostrarResultado").style.display=""
        document.getElementById("noHayTexto").style.setProperty("display", "none")
    }else{
        document.getElementById("mostrarResultado").style.display="none"
        document.getElementById("noHayTexto").style.setProperty("display", "flex")
    }
}
function encriptar(){
    mostrarONoTexto(true); 
    let mensajeEncriptado="";
    let mensaje=document.getElementById("inputTexto").value;
    document.getElementById("advertencia").style.color=""

    if (mensaje=="") {
        mostrarONoTexto(false)
        document.getElementById("reviseTexto").innerHTML="Ningun mensaje fue encontrado";
        document.getElementById("reviseMayus").innerHTML="Ingresa el texto que desees encriptar o desencriptar";
    }else if(mensaje.match(/[A-Z]/g) || ( mensaje.match(/[áéíóúàèìòùÁÉÍÓÚÀÈÌÒÙ]/g))){
        document.getElementById("reviseTexto").innerHTML="Revise el texto";
        document.getElementById("reviseMayus").innerHTML="Revise si hay mayusculas o acentos";
        document.getElementById("advertencia").style.color="red"
        mostrarONoTexto(false)
    }else{
        for (let i = 0; i < mensaje.length; i++) {
            switch (mensaje[i]) {
                case "a":
                    mensajeEncriptado=mensajeEncriptado + mensaje[i].replace("a","ai")
                    break;
                case "e":
                    mensajeEncriptado=mensajeEncriptado + mensaje[i].replace("e","enter")
                    break;
                case "i":
                    mensajeEncriptado=mensajeEncriptado + mensaje[i].replace("i","imes")
                    break;
                case "o":
                    mensajeEncriptado=mensajeEncriptado + mensaje[i].replace("o","ober")
                    break;
                case "u":
                    mensajeEncriptado=mensajeEncriptado + mensaje[i].replace("u","ufat")
                    break;
                default:
                    mensajeEncriptado=mensajeEncriptado+mensaje[i];
                    break;                    
            }
        }
        document.getElementById("resultado").value = mensajeEncriptado;
        document.getElementById("desOEncript").innerHTML="Texto Encriptado";
        document.getElementById("copyBTN").innerHTML="Copiar";
    }
}
function desencriptar(){
    mostrarONoTexto(true); 
    let mensajeDesencriptado="";
    let mensaje=document.getElementById("inputTexto").value;
    document.getElementById("advertencia").style.color=""

    if (mensaje=="") {
        mostrarONoTexto(false)
        document.getElementById("reviseTexto").innerHTML="Ningun mensaje fue encontrado";
        document.getElementById("reviseMayus").innerHTML="Ingresa el texto que desees encriptar o desencriptar";
    }else if(mensaje.match(/[A-Z]/g) || ( mensaje.match(/[áéíóúàèìòùÁÉÍÓÚÀÈÌÒÙ]/g))){
        document.getElementById("reviseTexto").innerHTML="Revise el texto";
        document.getElementById("reviseMayus").innerHTML="Revise si hay mayusculas o acentos";
        document.getElementById("advertencia").style.color="red"
        mostrarONoTexto(false)
    }else{
        mensajeDesencriptado=mensaje.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u")
        document.getElementById("resultado").value = mensajeDesencriptado;
        document.getElementById("desOEncript").innerHTML="Texto Desencriptado";
        document.getElementById("copyBTN").innerHTML="Copiar";
    }
}
function copiar(){
    let copy = document.getElementById("resultado")
    copy.select();
    document.execCommand('copy');
    copy.selectionStart = copy.selectionEnd;
    document.getElementById("copyBTN").innerHTML="Copiado";
}

//************************* EVENTOS *************************
$btnEncriptar.onclick = encriptar;
$btnDesencriptar.onclick = desencriptar;
$btnCopiar.onclick = copiar;