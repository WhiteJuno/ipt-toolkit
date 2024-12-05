// Referencias
const modal = document.getElementById("modal-card-repl");
const closeModal = document.querySelector(".close");
const cardReplButton = document.querySelector("button:contains('CARD REPL 2007 FRAUD')");
const form = document.getElementById("form-card-repl");
const rattInput = document.getElementById("ratt");
const porSelect = document.getElementById("por");
const cancelModal = document.getElementById("cancel-card-repl");
const listaFinal = document.getElementById("lista-final");

// Mostrar el modal
cardReplButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Cerrar modal
closeModal.addEventListener("click", () => (modal.style.display = "none"));
cancelModal.addEventListener("click", () => (modal.style.display = "none"));

// Confirmar acción
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const rattValue = rattInput.value.trim();
    const porValue = porSelect.value;
    const fechaSeleccionada = document.getElementById("fecha-seleccionada").innerText || "01/01";

    if (!rattValue || !porValue) return alert("Completa todos los campos.");

    const textoFinal = `${fechaSeleccionada} Card Replacement ${rattValue} ${porValue}`;
    const nuevaOpcion = document.createElement("p");
    nuevaOpcion.textContent = textoFinal;

    listaFinal.appendChild(nuevaOpcion);
    modal.style.display = "none";
    form.reset();
});

