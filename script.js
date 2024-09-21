// Variable para almacenar la fecha seleccionada (solo día/mes) en el calendario
let fechaSeleccionada = obtenerFechaActual(); // Por defecto es la fecha actual
let contadorOpciones = {}; // Objeto para llevar el conteo de las opciones
let entradas = []; // Array para almacenar las entradas

// Función para obtener la fecha actual en formato DD/MM
function obtenerFechaActual() {
    const hoy = new Date();
    const dia = hoy.getDate().toString().padStart(2, '0');
    const mes = (hoy.getMonth() + 1).toString().padStart(2, '0'); // Enero es 0, por eso sumamos 1
    return `${dia}/${mes}`;
}

// Establecer la fecha actual en el div de la lista final
const listaFinal = document.getElementById('lista-final');
const fechaActual = obtenerFechaActual();
listaFinal.textContent = `--->    FACTORES AL ${fechaActual}    <---`;

// Firma final
const firma = '\n    ---   //DMONR GFPS   ---';

// Referencias a las opciones
const opciones = document.querySelectorAll('.opcion');

// Función para agregar una opción con la fecha seleccionada a la lista final
opciones.forEach(opcion => {
    opcion.addEventListener('click', () => {
        const clave = `${fechaSeleccionada} ${opcion.textContent}`;
        
        // Incrementar el contador para la opción
        if (!contadorOpciones[clave]) {
            contadorOpciones[clave] = 0;
        }
        contadorOpciones[clave]++;

        // Obtén el contenido actual de la lista
        let contenido = listaFinal.textContent.trim();
        // Si ya existe la firma al final, elimínala temporalmente
        if (contenido.endsWith(firma.trim())) {
            contenido = contenido.slice(0, -firma.length).trim();
        }

        // Crear la entrada para la lista
        let entradaExistente = contenido.split('\n').find(line => line.startsWith(fechaSeleccionada) && line.includes(opcion.textContent));

        if (entradaExistente) {
            // Actualizar la entrada existente
            const nuevaCantidad = contadorOpciones[clave];
            const textoBase = entradaExistente.split(' x')[0]; // Obtener el texto base sin la cantidad
            const nuevaEntrada = `${textoBase} x${nuevaCantidad}`; // Crear nueva entrada con el conteo actualizado

            // Reemplazar la entrada existente en el contenido
            contenido = contenido.replace(entradaExistente, nuevaEntrada);
        } else {
            // Si no existe, simplemente añadir la nueva entrada
            let entrada = `${clave}`;
            if (contadorOpciones[clave] > 1) {
                entrada += ` x${contadorOpciones[clave]}`; // Añadir el conteo
            }

            contenido += `\n${entrada}`;
            entradas.push(entrada); // Agregar entrada al array
        }

        // Vuelve a agregar la firma al final
        contenido = contenido.trim() + firma;

        // Actualiza el contenido del div con la lista actualizada
        listaFinal.textContent = contenido;
    });
});

// Botón de "Reset"
const botonReset = document.getElementById('reset');
botonReset.addEventListener('click', () => {
    if (entradas.length > 0) {
        // Eliminar la última entrada
        entradas.pop(); // Eliminar la última entrada del array

        // Actualizar la lista final
        let contenido = `--->    FACTORES AL ${fechaActual}    <---`
        if (entradas.length > 0) {
            contenido += '\n' + entradas.join('\n'); // Reagregar las entradas restantes
        }
        contenido += firma; // Agregar la firma al final

        // Actualiza el contenido del div con la lista actualizada
        listaFinal.textContent = contenido;
    }
});

// Botón para eliminar todas las opciones
const botonEliminarTodas = document.getElementById('eliminar-todas');
botonEliminarTodas.addEventListener('click', () => {
    // Vaciar el array de entradas
    entradas = [];
    // Actualizar la lista final
    listaFinal.textContent = `--->    FACTORES AL ${fechaActual}    <---` + firma; // Reiniciar con la fecha actual y la firma
});

// Configuración del calendario interactivo usando Flatpickr
flatpickr("#calendario", {
    dateFormat: "d/m/Y", // Formato de fecha día/mes/año
    inline: true, // Muestra el calendario directamente en la página
    defaultDate: new Date(), // Fecha por defecto es la actual
    minDate: "01.01.1900", // Fecha mínima
    maxDate: "31.12.2099", // Fecha máxima
    onChange: function(selectedDates, dateStr, instance) {
        // Extraer solo día/mes de la fecha seleccionada
        const [dia, mes] = dateStr.split('/'); // Separar por "/"
        fechaSeleccionada = `${dia}/${mes}`; // Solo tomar día y mes
        console.log("Fecha seleccionada (día/mes): ", fechaSeleccionada);
    }
});

document.getElementById("copiar").addEventListener("click", function() {
    const texto = document.getElementById("lista-final").innerText;
    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(texto).then(() => {
        const boton = this;
        const textoOriginal = boton.innerText;
        // Cambiar el texto del botón a la palomita
        boton.innerText = "✅";
        // Restaurar el texto original después de 3 segundos
        setTimeout(() => {
            boton.innerText = textoOriginal;
        }, 3000);
    });
});
