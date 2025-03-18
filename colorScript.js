function Changecolor() {
    const colors = ["#FFFFFF", "#000000", "wheat"];
    const RandomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = RandomColor;

    if (RandomColor === "#000000"){
        document.getElementById("text").style.color = "#FFFFFF";
        document.getElementById("title").style.color = "#FFFFFF";
    }
    if (RandomColor === "#FFFFFF" || RandomColor === "wheat");
        {
        document.getElementById("text").style.color = "#000000"
    }
}