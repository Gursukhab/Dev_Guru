// Update Biscuit Image on Selection
function updateImage() {
    const biscuitType = document.getElementById('biscuitType').value;
    const imageElement = document.getElementById('biscuitImage');

    if (biscuitType === 'Chocolate Chip') {
        imageElement.src = "images/chocolate-chip.png";
    } else if (biscuitType === 'Oatmeal') {
        imageElement.src = "images/oatmeal.png";
    } else if (biscuitType === 'Butter') {
        imageElement.src = "images/butter.png";
    }
}

// Calculate Total Price
async function calculateTotal() {
    const biscuitType = document.getElementById('biscuitType').value;
    const quantity = document.getElementById('quantity').value;

    // Fetch price from the Node.js API
    const response = await fetch(`/calculate-price?type=${biscuitType}&quantity=${quantity}`);
    const data = await response.json();

    document.getElementById('totalPrice').innerText = data.totalPrice;
}
