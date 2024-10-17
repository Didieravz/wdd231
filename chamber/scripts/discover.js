// Función para manejar el mensaje de visita
function handleVisitMessage() {
    const visitMessage = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("ultimaVisita");
    //contiene el tiempo actual en milisegundos
    const currentDate = new Date().getTime();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        //contiene el numero de dias transcurridos desde la ultima visita hasta la actualidad
        const daysSinceLastVisit = Math.floor((currentDate - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));

        if (daysSinceLastVisit < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysSinceLastVisit === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
        }
    }

    localStorage.setItem("ultimaVisita", currentDate.toString());
}

// Ejecutar cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
    handleVisitMessage();
});