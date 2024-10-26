document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pendantName = urlParams.get('name');
    const pendantPrice = urlParams.get('price');

    if (pendantName && pendantPrice) {
        document.querySelector('#purchaseForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const customerName = document.getElementById('customerName').value;
            const customerEmail = document.getElementById('customerEmail').value;
            const quantity = document.getElementById('quantity').value;

            alert(`Compra confirmada para ${quantity} ${pendantName}(s) a un precio de $${pendantPrice} cada uno.\nNombre: ${customerName}\nEmail: ${customerEmail}`);
            // Aquí podrías enviar los datos a un servidor o realizar más acciones
        });
    }
});
