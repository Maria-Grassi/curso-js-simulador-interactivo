
var servicios=["Radiologia digital", "Radiologia domiciliria", "Ecografia"]

var obraSocial;
var nombreObraSocial;
var duracionDeTurno;

function Turno(){

    let nombre= prompt("Nombre y Apellido")
    var servicio= Number(prompt("Indicar que tipo de estudio se debe realizar: 1) Rx, 2) Rx en el domicilio, 3) Ecografia"));
    let cantEstudios= Number(prompt("Cantidad de estudios a realizar. Ej= Rodilla F y P son 2"));
    let estudioRXDig= prompt("Indicar estudio a realizar");
    let ser;
var resp = document.write(
    `Paciente ${nombre}.<br>
Solicito servicio de ${servicioSolicitado()} para realizarse los siguientes estudios ${estudioRXDig}.<br>
El costo de estudio es de $${costoDeEstudio()}.<br>
Se estima que para realizar los estudios solicitados se tardara alrededor de ${duracionDeTurnoo()} minutos <br>
<button onclick= "diaYFranjaHoraria()" > Solicitar Turno </button> `)

function servicioSolicitado(){
 if(servicio==1){
     ser=servicios[0]
 }
 else if (servicio==2){
    ser=servicios[1]
 }
 else if (servicio==3){
 ser=servicios[3]}
 return ser
}
function duracionDeTurnoo(){
    if(servicio==1){
        if (cantEstudios<=3){
            duracionDeTurno=15;
        }
        else {duracionDeTurno=((cantEstudios-3)*3)+15;
        }
    }
    else if(servicio==2){   
     let distancia= Number(prompt(
         "Distancia estimada que hay de domicilio donde se encuentra el paciente y el consultorio. Colocar solo el numero en m"));   
    let km = (distancia/1000)*5; 
    duracionDeTurno=  (6*km)+30;   
    }
    else if (servicio==3){
        duracionDeTurno= cantEstudios*10;  
    }
    else {alert("tipo de estudio mal ingresado")}
  
return duracionDeTurno
}

function costoDeEstudio() {
    let valorBonoIoma
    obraSocial= prompt("¿Cuenta con obra social o prepaga?. Responder solo si o no?");
    if (obraSocial=== "si" ){
        tipoDeObraSocial= Number(prompt("1) Ioma 2) Osde 3) Swith medical 4)Pami"))
    } else {obraSocial= "no"}
    if (servicio==1) {
        if((obraSocial=== "no" )||(tipoDeObraSocial==2)){
            costo=cantEstudios*350
        }
        else if (tipoDeObraSocial==1){
            valorBonoIoma=60
            costo = valorBonoIoma*cantEstudios
        }
        else if (tipoDeObraSocial==3){
            costo= "Sin cargo"
        }
        else if(tipoDeObraSocial==4) {
            costo= cantEstudios* 150
        }
        else {
            alert("Nombre de obra social mal ingresado")
        }    
  
    }
    else if (servicio==2){
        if (obraSocial==="si"){
        tipoDeObraSocial= alert("No trabajamos por obra social")}
        costo= 700*cantEstudios
  
    }
    else if (servicio==3){
        if((obraSocial=== "no" )||tipoDeObraSocial==4){
            costo=cantEstudios*1000
        }
        else if (tipoDeObraSocial==1){
            valorBonoIoma=500
            costo = valorBonoIoma*cantEstudios
        }
        else if (tipoDeObraSocial==3||tipoDeObraSocial==2){
            costo= "Sin cargo"
        }
        else {
            alert("Nombre de obra social mal ingresado")
        }  
 
    }
return costo
}

}


function diaYFranjaHoraria(){
    let dia= prompt("Dias conveniente para realizar las practicas")
    let franjahoraria= prompt("Mañana (9 a 12) o tarde (16 a 20)")
    let algunaAclaracion= prompt("¿Prefiere algun horario especifico? si es asi indicalo")
var respt=document.write(
    `Se le asignara un turno en las proximas 24hs via mail <button onclick="mail()"> adjuntar mail</button>`)
}

function mail(){
    email=prompt("ingrese direccion e-mail")
}