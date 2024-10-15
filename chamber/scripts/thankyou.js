
document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);

    // Display form data
    document.getElementById('firstName').textContent = params.get('firstName');
    document.getElementById('lastName').textContent = params.get('lastName');
    document.getElementById('email').textContent = params.get('email');
    document.getElementById('phone').textContent = params.get('phone');
    document.getElementById('businessName').textContent = params.get('businessName');
    document.getElementById('membershipLevel').textContent = params.get('membershipLevel');
    
    // Format and display timestamp
    const timestamp = new Date(params.get('timestamp'));
    document.getElementById('timestamp').textContent = timestamp.toLocaleString();
});