document.addEventListener('DOMContentLoaded', async () => {
    let ringsData;

    try {
        const response = await fetch('data/rings.json');
        ringsData = await response.json();
        console.log(ringsData);
        // Cargar anillos de mujer por defecto
        displayRings(ringsData.womenRings);
    } catch (error) {
        console.error('Error cargando los datos:', error);
    }

    // Event Listeners para los botones de filtro
    const womenBtn = document.getElementById('showWomen');
    const menBtn = document.getElementById('showMen');

    womenBtn.addEventListener('click', () => {
        womenBtn.classList.add('active');
        menBtn.classList.remove('active');
        displayRings(ringsData.womenRings);
    });

    menBtn.addEventListener('click', () => {
        menBtn.classList.add('active');
        womenBtn.classList.remove('active');
        displayRings(ringsData.menRings);
    });
});

function displayRings(rings) {
    const ringsGrid = document.getElementById('ringsGrid');
    ringsGrid.innerHTML = ''; // Limpia el contenedor

    rings.forEach(ring => {
        const ringCard = document.createElement('div');
        ringCard.className = 'ring-card';

        ringCard.innerHTML = `
            <div class="image-container">
                <img src="${ring.image}" alt="${ring.name}"
                loading="lazy" width="280" height="280">
            </div>
            
            <div class="ring-info">
                <h3>${ring.name}</h3>
                <p class="reference">Ref: ${ring.reference}</p>
                <p class="material">Material: ${ring.material}</p>
                <div class="price-container">
                    <span class="regular-price">Regular Price: $${ring.regularPrice.toLocaleString()}</span>
                    <span class="discount-price">Discount Price: $${ring.discountPrice.toLocaleString()}</span>
                </div>
                <button class="buy-button" data-name="${ring.name}" 
                data-price="${ring.discountPrice}">Comprar</button>
            </div>
        `;

        // Evento para redirigir al formulario de compra
        ringCard.querySelector('.buy-button').addEventListener('click', () => {
            window.location.href = `purchaseform.html?name=${encodeURIComponent(ring.name)}&price=${ring.discountPrice}`;
        });

        ringsGrid.appendChild(ringCard);
    });
}