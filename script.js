const button = document.getElementById('claimButton');
const message = document.getElementById('message');

// Button click
button.addEventListener('click', () => {
    message.classList.remove('hidden');
    button.disabled = true;
    button.textContent = "Discount Claimed!";
});

// Background color cycling
const colors = ["#FFCCCC", "#CCE5FF", "#CCFFCC", "#FFE5CC", "#E5CCFF"];
let i = 0;

setInterval(() => {
    document.body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
}, 2000); // changes every 2 seconds
