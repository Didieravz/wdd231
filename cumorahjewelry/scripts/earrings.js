document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        const earringName = button.parentElement.dataset.name;
        const earringPrice = button.parentElement.dataset.price;
        window.location.href = `purchaseform.html?name=${encodeURIComponent(earringName)}&price=${earringPrice}`;
    });
});