document.addEventListener('DOMContentLoaded', async () => {
    let pendantsData;

    try {
        const response = await fetch('data/pendants.json');
        pendantsData = await response.json();
        console.log(pendantsData);
        displayPendants(pendantsData);

    } catch (error) {
        console.error('Error cargando los datos:', error);
    }
});

//Funcion para mostrar las imagenes
function displayPendants(pendants) {

    const container = document.querySelector('#pendats-container');
    pendants.forEach(pendant => {
        const pendantDiv = document.createElement('div');
        pendantDiv.classList.add('pendant');

        pendantDiv.innerHTML = `
            <img src="${pendant.image}" alt="${pendant.name}" loading="lazy" width="200" height="200" />
            <h3>${pendant.name}</h3>
            <p>Referencia: ${pendant.reference}</p>
            <p>Material: ${pendant.material}</p>
            <p>Regular price: <span class="regular-price">$${pendant.regularPrice}</span> 
            <span class="discount-price">Discount price: $${pendant.discountPrice}</span></p>
            <button class="buy-button" data-name="${pendant.name}" 
            data-price="${pendant.discountPrice}">Comprar</button>
        `;

        // Evento para redirigir al formulario de compra
        pendantDiv.querySelector('.buy-button').addEventListener('click', () => {
            window.location.href = `purchaseform.html?name=${encodeURIComponent(pendant.name)}&price=${pendant.discountPrice}`;
        });

        container.appendChild(pendantDiv);
    });
}