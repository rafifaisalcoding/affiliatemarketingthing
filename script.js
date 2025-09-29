const button = document.getElementById('claimButton');
const message = document.getElementById('message');

// Button click
button.addEventListener('click', () => {
    message.classList.remove('hidden');
    button.disabled = true;
    button.textContent = "Discount Claimed!";
});

// Smooth gradient background cycling
const colors = [
    "linear-gradient(135deg, #FF9A9E, #FAD0C4)",
    "linear-gradient(135deg, #A18CD1, #FBC2EB)",
    "linear-gradient(135deg, #84FAB0, #8FD3F4)",
    "linear-gradient(135deg, #FFDEE9, #B5FFFC)"
];

let i = 0;
setInterval(() => {
    document.body.style.background = colors[i];
    i = (i + 1) % colors.length;
}, 4000);
