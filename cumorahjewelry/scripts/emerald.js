document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        const emeraldName = button.parentElement.dataset.name;
        const emeraldPrice = button.parentElement.dataset.price;
        window.location.href = `purchaseform.html?name=${encodeURIComponent(emeraldName)}&price=${emeraldPrice}`;
    });
});

//Informacion para el modal
// Datos de ejemplo para cada esmeralda
const emeraldDetails = {
    'Emerald 1': {
        clarity: 'VS',
        certificate: 'GIA',
        origin: 'Muzo, Boyacá',
        description: 'Beautiful teardrop emerald with excellent clarity and deep green color. Perfect for pendant designs.'
    },
    'Emerald 2': {
        clarity: 'SI',
        certificate: 'IGI',
        origin: 'Muzo, Boyacá',
        description: 'Classic square cut emerald with good transparency and natural inclusions that add character.'
    },
    'Emerald 3': {
        clarity: 'VVS',
        certificate: 'GIA',
        origin: 'Maripi, Boyacá',
        description: 'Premium quality emerald with exceptional clarity and vivid green color. A truly remarkable specimen.'
    },
    'Emerald 4': {
        clarity: 'VS',
        certificate: 'IGI',
        origin: 'Muzo, Boyacá',
        description: 'High-grade square emerald with excellent cut and brilliant luster. Perfect for luxury jewelry pieces.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('emeraldDialog');
    const closeButton = dialog.querySelector('.close-dialog');
    const detailsButtons = document.querySelectorAll('.details-button');

    // Manejar clicks en botones de detalles
    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const emeraldDiv = button.closest('.emerald');
            const emeraldName = emeraldDiv.dataset.name;
            const details = emeraldDetails[emeraldName];

            // Actualizar contenido del dialog
            document.getElementById('dialogClarity').textContent = details.clarity;
            document.getElementById('dialogCertificate').textContent = details.certificate;
            document.getElementById('dialogOrigin').textContent = details.origin;
            document.getElementById('dialogDescription').textContent = details.description;

            dialog.showModal();
        });
    });

    // Cerrar dialog
    closeButton.addEventListener('click', () => {
        dialog.close();
    });

    // Cerrar dialog al hacer clic fuera
    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
            dialog.close();
        }
    });
});