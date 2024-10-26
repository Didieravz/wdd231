document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        const emeraldName = button.parentElement.dataset.name;
        const emeraldPrice = button.parentElement.dataset.price;
        window.location.href = `purchaseform.html?name=${encodeURIComponent(emeraldName)}&price=${emeraldPrice}`;
    });
});