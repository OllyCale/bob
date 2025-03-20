function Changecolor() {
    const colors = ["wheat", "FFFFFF", "000000", "ffb3b3", "ffccff", "b3e0ff", "c7ffb3", "ffeb99", "ffb366", "b3ffd9", "f2b3d6", "d4e2fc", "f2f2f2", "c2f0c2", "e3d6ff", "ffdfd3", "b3ffd6", "ff6666", "e3ffcc", "f7e6ff", "ccffcc"];
    const RandomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = RandomColor;

    if (RandomColor === "#000000"){
        document.getElementById("text").style.color = "#FFFFFF";
        document.getElementById("title").style.color = "#FFFFFF";
    }
    if (RandomColor === "#FFFFFF" || RandomColor === "wheat"){
        document.getElementById("text").style.color = "#000000";
        document.getElementById("title").style.color = "#000000";
    }
}