//ARRAY DE OPERADORES
operadores = ["AGUSTINA CARRIZO", "ALVES TEIXEIRA DAVI", "BRUNO LOPES BATISTA", "CAMILA DE ASSIS PAIVA", "CARPI ANGELICA", 
"CASTELLANO MATIAS NAHUEL", "CAVASSIM DANILO", "CESAR PRADO", "CHARRIER LUIZ RAFAEL", "CORDEIRO TRINDADE IUCARA", 
"COSTA SANTOS SILVA LORRANA", "CRISTIANE DOS SANTOS SILVA", "CUNHA FRANCISCA ELISANGELA", "DA COSTA PEREIRA MAYARA", 
"DA FONSECA MIGUEL", "DA MATA ARGUELHO GUILHERME", "DA SILVA MELO MYLENA", "DA SILVA SANTOS EMILY DAYANE", "DUEÑAS ALEXANDER", 
"ESTIVILL SOSENKO ISMAEL", "EVANGELISTA MARCIO JOSE", "FACUNDO JOAQUIN BORGNIS", "FERNANDES LUANA VANESSA", "FERREIRA ADRIEL",
 "FERREIRA CARVALHO GABRIELLE", "FLANAGAN PAOLA ANDREA", "FONTAN JUAN PABLO ESTEBAN", "GAMEZ FERNANDEZ ANGEL GABRIEL", 
 "GANDARA FRANCO", "GANDARA MAXIMO", "GARAVENTA ANIBAL DANIEL", "GODOY CARVAJAL ANNA PAOLA", "GONCALVES LIMA ADELINA KATIA", 
 "GONGO RENATO GONCALVES", "GONZALEZ MARTIN ESTEBAN", "GUERRERO MAYLU DANIELA", "HOBERT DELFINA", "IBARRA GARCIA CARLOS", 
 "LARRIEL LAURA SOLEDAD", "LETICIA LORETA ROQUE", "LOBO SAENZ ELIANGEL", "LOPEZ MICAELA SOLEDAD", "LOPEZ TOSCANO JULIAN MATEO", 
 "LUCAS ORELLANA", "MARQUES PEREIRA DARA", "MARTINEZ ANGEL GABRIEL", "MARTINEZ LEANDRO GABRIEL", "MARTINEZ RAMIREZ SINAI", 
 "MARTINO IVAN EZEQUIEL", "MARTINS MARIA EDUARDA", "MATHEUS SABINO FARIA", "MEDEIROS THAYNARA LORRANA", "MEDINA GISELA SABRINA", 
 "ONORATI BELLI AGOSTINA", "PISANI MARIANO NICOLAS", "PORTO MACHADO ELICA", "QUIROGA DANIELA MARIBEL", "RAMOS DOS SANTOS AKLA KEZIA", 
 "RODRIGUES FELIP", "ROMERSTEIN MARIA FLORENCIA", "ROMINA TEJERINA", "ROSILLO HERRERA GUSTAVO", "RUIZ NATALIA", 
 "SANTOS DE JESUS ROQUELINA", "SEMONI GUIDO", "SILVA DE ATAIDE ROBERTO", "SOFIA TEIXEIRA PORTELLA", "SOUSA DA COSTA SABRINA", 
 "TOSTA ANDRYEL LUIZ", "URIBE REBECCA", "VIVAS NIETO LEGNA GRISEL"]

//ACTUALIZAR TABLA SEGUN EL MONITOREO A REALIZAR
document.addEventListener("DOMContentLoaded", function () {
    //Traer el elemento por su id
    const botonMonitorear = document.getElementById("botonMonitorear");
    const selectMeses = document.getElementById("selectMeses");
    const selectEvaluador = document.getElementById("selectEvaluador");
    const selectTipoMonitoreo = document.getElementById("selectTipoMonitoreo");
    const selectOps = document.getElementById("selectOps");
    const operadorElegido = document.getElementById("operadorElegido");
    const operadorElegidoC = document.getElementById("operadorElegidoC");

    // Variables para almacenar los valores
    let tipoMonitoreoSeleccionado = "";
    let mesSeleccionado = "";
    let evaluadorSeleccionado = "";
    let opsSeleccionado = "";

    //Crear las opciones del menú desplegable de operadores recorriendo el array
    for (let i = 0; i < operadores.length; i++) {
      let option = document.createElement("option");
      option.value = operadores[i];
      option.textContent = operadores[i];
      selectOps.appendChild(option);
  }  

    // Evento de clic para el botón "botonMonitorear"
    botonMonitorear.addEventListener("click", function () {
    // Guardar el valor seleccionado en la variable
        tipoMonitoreoSeleccionado = selectTipoMonitoreo.value;
        mesSeleccionado = selectMeses.value;
        evaluadorSeleccionado = selectEvaluador.value;
        opsSeleccionado = selectOps.value;
        operadorElegido.innerHTML = opsSeleccionado;
        operadorElegidoC.innerHTML = opsSeleccionado;

    // Crear tabla depende el monitoreo que sea
        if (tipoMonitoreoSeleccionado == "chat") {
            tablaChat.style.display = 'block';
            tablaCoordinacion.style.display = "none";
        } else if (tipoMonitoreoSeleccionado == "coordinacion") {
            tablaCoordinacion.style.display = 'block';
            tablaChat.style.display = 'none';
        }
    });
});

const tablaChat = document.getElementById('tablaChat');
const tablaCoordinacion = document.getElementById('tablaCoordinacion');
const botonFinalizar = document.getElementById('botonFinalizar');
let respuestas = {}; // Objeto para almacenar respuestas

// Agregar evento a los checkboxes de la tabla de chat
tablaChat.addEventListener('change', function(event) {
  const checkbox = event.target;
  const pregunta = checkbox.getAttribute('data-pregunta');
  const respuesta = checkbox.getAttribute('data-respuesta');

  if (checkbox.checked) {
    respuestas[pregunta] = respuesta;
  } else {
    delete respuestas[pregunta];
  }
});

// Agregar evento a los checkboxes de la tabla de coordinacion
tablaCoordinacion.addEventListener('change', function(event) {
  const checkbox = event.target;
  const pregunta = checkbox.getAttribute('data-pregunta');
  const respuesta = checkbox.getAttribute('data-respuesta');

  if (checkbox.checked) {
    respuestas[pregunta] = respuesta;
  } else {
    delete respuestas[pregunta];
  }
});

// Agregar evento al botón de finalizar monitoreo
botonFinalizar.addEventListener('click', function() {
  console.log('Respuestas guardadas:', respuestas);
  tablaCoordinacion.style.display = "none";
  tablaChat.style.display = "none";
  respuestas = {};

  const checkboxesChat = tablaChat.querySelectorAll('input[type="checkbox"]');
  const checkboxesCoordinacion = tablaCoordinacion.querySelectorAll('input[type="checkbox"]');
  
  checkboxesChat.forEach(checkbox => {
    checkbox.checked = false;
  });

  checkboxesCoordinacion.forEach(checkbox => {
    checkbox.checked = false;
  })
});