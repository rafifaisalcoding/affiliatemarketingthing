const button = document.getElementById('claimButton');

button.addEventListener('click', () => {
    window.location.href = "https://gloffers.org/aff_c?offer_id=340&aff_id=88356";
});

const colors = [
    "linear-gradient(135deg, #FF851B, #000000)", 
    "linear-gradient(135deg, #FFA500, #000000)", 
    "linear-gradient(135deg, #FF7F50, #000000)", 
    "linear-gradient(135deg, #FF4500, #000000)"
];

let i = 0;
setInterval(() => {
    document.body.style.background = colors[i];
    i = (i + 1) % colors.length;
}, 4000);
