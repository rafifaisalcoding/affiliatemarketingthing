const button = document.getElementById('claimButton');

button.addEventListener('click', () => {
    window.location.href = "https://rickrolled.com";
});

const colors = [
    "linear-gradient(135deg, #0074D9, #001f3f)", 
    "linear-gradient(135deg, #1E90FF, #001f3f)", 
    "linear-gradient(135deg, #3399FF, #001f3f)", 
    "linear-gradient(135deg, #00AEEF, #001f3f)"
];

let i = 0;
setInterval(() => {
    document.body.style.background = colors[i];
    i = (i + 1) % colors.length;
}, 4000);
