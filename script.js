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
    minDate: "09-07-2024", // Fecha mínima
    maxDate: new Date(), // Fecha máxima
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

//Botones NOTSOSECRET
document.getElementById('ADS').addEventListener('click', function() {
    const texto = "DevMis@39632352#";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('ADS').innerText;
        document.getElementById('ADS').innerText = "✅";
        setTimeout(function() {
            document.getElementById('ADS').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
document.getElementById('CASP').addEventListener('click', function() {
    const texto = "Alakay@7";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('CASP').innerText;
        document.getElementById('CASP').innerText = "✅";
        setTimeout(function() {
            document.getElementById('CASP').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
document.getElementById('CASU').addEventListener('click', function() {
    const texto = "HC9354A";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('CASU').innerText;
        document.getElementById('CASU').innerText = "✅";
        setTimeout(function() {
            document.getElementById('CASU').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
document.getElementById('AUU').addEventListener('click', function() {
    const texto = "NN18002159";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('AUU').innerText;
        document.getElementById('AUU').innerText = "✅";
        setTimeout(function() {
            document.getElementById('AUU').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
document.getElementById('AU1').addEventListener('click', function() {
    const texto = "PK75dKBC";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('AU1').innerText;
        document.getElementById('AU1').innerText = "✅";
        setTimeout(function() {
            document.getElementById('AU1').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
document.getElementById('AU2').addEventListener('click', function() {
    const texto = "Hz6oQw6Z";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('AU2').innerText;
        document.getElementById('AU2').innerText = "✅";
        setTimeout(function() {
            document.getElementById('AU2').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
document.getElementById('VNE').addEventListener('click', function() {
    const texto = "V3944239";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('VNE').innerText;
        document.getElementById('VNE').innerText = "✅";
        setTimeout(function() {
            document.getElementById('VNE').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
document.getElementById('DOC').addEventListener('click', function() {
    const texto = "Espana20$";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('DOC').innerText;
        document.getElementById('DOC').innerText = "✅";
        setTimeout(function() {
            document.getElementById('DOC').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
document.getElementById('EMA').addEventListener('click', function() {
    const texto = "diego.a.monroy@aexp.com";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('EMA').innerText;
        document.getElementById('EMA').innerText = "✅";
        setTimeout(function() {
            document.getElementById('EMA').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});

//ICO
document.getElementById('VMNCRN').addEventListener('click', function() {
    const texto = "SE DEJA VM SIN CRN POR BUZON NO PERSONALIZADO";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('VMNCRN').innerText;
        document.getElementById('VMNCRN').innerText = "✅";
        setTimeout(function() {
            document.getElementById('VMNCRN').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
document.getElementById('VMSCRN').addEventListener('click', function() {
    const texto = "SE DEJA VM CON CRN";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('VMSCRN').innerText;
        document.getElementById('VMSCRN').innerText = "✅";
        setTimeout(function() {
            document.getElementById('VMSCRN').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
document.getElementById('DECL').addEventListener('click', function() {
    const texto = "SE COMUNICA SUP CM POR CARGO DECLINADO";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('DECL').innerText;
        document.getElementById('DECL').innerText = "✅";
        setTimeout(function() {
            document.getElementById('DECL').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
document.getElementById('DESC').addEventListener('click', function() {
    const texto = "SE COMUNICA SUP CM POR CARGO NO RECONOCIDO";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('DESC').innerText;
        document.getElementById('DESC').innerText = "✅";
        setTimeout(function() {
            document.getElementById('DESC').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
document.getElementById('SFK').addEventListener('click', function() {
    const texto = "SE COMUNICA SUP CM POR SFK RECIBIDO NO SOLICITADO / NO RECONOCIDO";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('SFK').innerText;
        document.getElementById('SFK').innerText = "✅";
        setTimeout(function() {
            document.getElementById('SFK').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
document.getElementById('P68').addEventListener('click', function() {
    const texto = "SE COMUNICA SUP CM POR WALLET NO RECONOCIDO";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('P68').innerText;
        document.getElementById('P68').innerText = "✅";
        setTimeout(function() {
            document.getElementById('P68').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
document.getElementById('IDTO').addEventListener('click', function() {
    const texto = "SE COMUNICA SUP CM POR RESET DE CONTRASEÑA DE MYCA NO RECONOCIDO";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('IDTO').innerText;
        document.getElementById('IDTO').innerText = "✅";
        setTimeout(function() {
            document.getElementById('IDTO').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
document.getElementById('INFO').addEventListener('click', function() {
    const texto = "SE COMUNICA SUP CM POR INFO GENERAL DE CTA";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('INFO').innerText;
        document.getElementById('INFO').innerText = "✅";
        setTimeout(function() {
            document.getElementById('INFO').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
document.getElementById('CEN').addEventListener('click', function() {
    const texto = "SE COMUNICA CEN POR INFO / ALERTA, SE VERIFICA SENT INACTIVE MAYOR A TRES MESES, SIN MAS TEMA DE FRAUDE, SE RETIRA PI REMANENTE Y SE PERMITE ACCIONAR. //DMONR";
    navigator.clipboard.writeText(texto).then(function() {
        const originalText = document.getElementById('CEN').innerText;
        document.getElementById('CEN').innerText = "✅";
        setTimeout(function() {
            document.getElementById('CEN').innerText = originalText;
        }, 3000);
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
