document.addEventListener("DOMContentLoaded", function() {
    const changeColorButton = document.getElementById("changeColorButton");
    const colorChangeText = document.getElementById("colorChangeText");

    changeColorButton.addEventListener("click", function() {
        // Gere uma cor aleatória em formato hexadecimal
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

        // Altere a cor do parágrafo para a cor gerada
        colorChangeText.style.color = randomColor;
    });
});
