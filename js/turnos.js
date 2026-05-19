
// Al principio no hay pacientes en la app
let pacientes = [];

// Horario de apertura
let apertura = 9;

// Horario de cierre
let cierre = 21;

// Descanso desde
let descansoDesde = 13

// Descanso hasta
let descansoHasta = 16

// Turnos disponibles para hoy
let turnos = [];

// Generar los turnos para el día de acuerdo a la apertura y el cierre
for (let i = apertura; i < cierre; i++) {
    if (i >= descansoDesde && i <= descansoHasta) {
        continue;
    }

    turnos.push(i);
}

// Inscripción o registro de personas
pacientes.push('Cosme Fulanito');
pacientes.push('Homero Simpsons');
pacientes.push('Juan Topo');

// Alguien quiere ver la lista de inscriptos o usuarios registrados
for (let i = 0; i < pacientes.length; i++) {
    console.log( pacientes[i] )
}

// Paciente: quiero saber si hay turno disponible para tal horario
let turnoReservado;

let rangoDeHorariosDelPaciente = [16, 18]

if (turnos.indexOf(16) == -1) {
    console.error('No hay turno para las 16')
} else {
    turnoReservado = 16;
    let posicion = turnos.indexOf(16);
    turnos[posicion] = null; 
}

if (turnos.indexOf(17) == -1) {
    console.error('No hay turno para las 17')
} else {
    turnoReservado = 17;
    let posicion = turnos.indexOf(17);
    turnos[posicion] = null; 
}
