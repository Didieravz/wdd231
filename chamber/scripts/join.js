//url para recuperar la data de membership level
const urlMembershipLevelsJSON = 'data/membershipLevels.json';

document.addEventListener('DOMContentLoaded', function () {
    // Setea la fecha y la hora actual en el campo hidden
    document.getElementById('timestamp').value = new Date().toISOString();

    // carga membership levels desde el JSON
    loadMembershipLevels();
});

async function loadMembershipLevels() {
    try {
        const response = await fetch(urlMembershipLevelsJSON);
        const data = await response.json();
        console.log(data);
        //carga el elemento en el html con el id membershipCards
        const membershipCards = document.getElementById('membershipCards');

        //Agrega a cada card la informacion
        data.levels.forEach(level => {
            //pasa cada objeto del Json para crear cada una de las cards
            const card = createMembershipCard(level);
            membershipCards.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading membership levels:', error);
    }
}

//funcion para crear el contenido de cada card
function createMembershipCard(level) {
    const card = document.createElement('div');
    card.className = 'membership-card';
    card.id = `${level.id}-card`;

    card.innerHTML = `
        <h4>${level.name}</h4>
        <p>${level.description}</p>
        <button onclick="openModal('${level.id}')">More Info</button>
    `;

    return card;
}

function openModal(levelId) {
    const modal = document.getElementById('membershipModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBenefits = document.getElementById('modalBenefits');

    fetch(urlMembershipLevelsJSON)
        .then(response => response.json())
        .then(data => {
            const level = data.levels.find(l => l.id === levelId);
            modalTitle.textContent = `${level.name} Benefits`;
            modalBenefits.innerHTML = level.benefits.map(benefit => `<li>${benefit}</li>`).join('');
            modal.showModal();
        })
        .catch(error => console.error('Error loading membership details:', error));
}

function closeModal() {
    const modal = document.getElementById('membershipModal');
    modal.close();
}

// Close modal cuando se hace click fuera del modal
document.getElementById('membershipModal').addEventListener('click', function (event) {
    const modalDimensions = this.getBoundingClientRect();
    if (
        event.clientX < modalDimensions.left ||
        event.clientX > modalDimensions.right ||
        event.clientY < modalDimensions.top ||
        event.clientY > modalDimensions.bottom
    ) {
        this.close();
    }
});