function Changecolor() {
    const colors = ["#FFFFFF", "000000"];
    const RandomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = RandomColor;

}