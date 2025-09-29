const button = document.getElementById('claimButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.classList.remove('hidden');
    button.disabled = true;
    button.textContent = "Discount Claimed!";
});
