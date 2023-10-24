window.onload = function(){
    setInterval(ver_hora,1000);
}

function ver_hora(){
    let fecha_hora = new Date();
    let hora =fecha_hora.getHours();
    let minutos = fecha_hora.getMinutes();
    let segundos = fecha_hora.getSeconds();
    if(hora < 10){
        hora = '0' + hora;
    } 
    if(minutos < 10){
        minutos = '0' + minutos;
    }
    if(segundos < 10){
        segundos = '0' + segundos;
    }
    let sufijo = ' am';
    if(hora >= 12){
        if(hora > 12){
            hora=hora-12;
        }
        sufijo = ' pm'
    }
    document.getElementById("reloj").innerHTML= "Hora Actual<br>" + "" + hora + ":" + minutos + ":" + segundos + " " + sufijo;     
}

function ver_tiempo_restante() {
    let fecha_hora = new Date();
    let hora_actual = fecha_hora.getHours();
    let minutos_actual = fecha_hora.getMinutes();
    let segundos_actual = fecha_hora.getSeconds();

    let hora_medianoche = new Date();
    hora_medianoche.setHours(24,0,0,0);

    let tiempo_restante = hora_medianoche - fecha_hora;
    let horas_restantes = Math.floor(tiempo_restante / 3600000);
    tiempo_restante = tiempo_restante % 3600000;
    let minutos_restantes = Math.floor(tiempo_restante / 60000);
    tiempo_restante = tiempo_restante % 60000;
    let segundos_restantes = Math.floor(tiempo_restante / 1000);

    if(horas_restantes < 10){
    horas_restantes = '0' + horas_restantes;
    } 
    if(minutos_restantes < 10){
    minutos_restantes = '0' + minutos_restantes;
    }
    if(segundos_restantes < 10){
    segundos_restantes = '0' + segundos_restantes;
    }

    document.getElementById("reloj_reversa").innerHTML= "Hora Reversa<br>"+ horas_restantes + ":" + minutos_restantes + ":" + segundos_restantes;
}

setInterval(ver_tiempo_restante,1000);



function mostrarFecha() {
    let fecha_actual = new Date();
    let dia = fecha_actual.getDate();
    let mes = fecha_actual.getMonth() + 1;
    let año = fecha_actual.getFullYear();

    if (dia < 10) {
        dia = "0" + dia;
    }
    if (mes < 10) {
        mes = "0" + mes;
    }

    let fecha_texto = "Fecha actual" + dia + "/" + mes + "/" + año;

    
    if (fecha_texto !== document.getElementById("fecha").innerHTML) {
        document.getElementById("fecha").innerHTML = "Fecha actual<br>" + dia + "/" + mes + "/" + año;
    }
}

setInterval(mostrarFecha, 1000);

