
let hoy = 14;
let hora = 20;

let diaDeEntrega = 13;
let horaDeEntrega = 19;

// si dia entrega es mayor a hoy
if ( diaDeEntrega > hoy ) {
    alert('todavía estás a tiempo')
} else if ( diaDeEntrega == hoy ) {
    if ( hora < horaDeEntrega ) {
        alert('hoy es la fecha de entrega, todavía quedan algunas horas...')
    } else {
        alert('hoy es la fecha de entrega, pero ya pasó la hora...')
    }
} else {
    alert('ya pasó la fecha de entrega')
}


let nota = 10;

switch (nota) {
    case 1:
    case 2:
    case 3:
    case 4: {
       // js  
    }

    case 5:
    case 6:
    case 7:
        alert('Aprobado, con lo mínimo')
    break;

    case 8:
    case 9:
        alert('Aprobado')
    break;

    default:
        alert('Aprobado, sobresaliente!')
}
