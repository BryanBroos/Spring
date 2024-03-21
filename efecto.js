document.addEventListener("DOMContentLoaded", function() {
    const flowerContainer = document.querySelector(".flower-container");
    const numberOfImages = 0; // Número de imágenes a mostrar

    for (let i = 0; i < numberOfImages; i++) {
        const flowerImage = document.createElement("img");
        flowerImage.classList.add("flower-image");
        flowerImage.src = "image/" + (i + 1) + ".jpg";
        flowerContainer.appendChild(flowerImage);
        
        // Genera posiciones aleatorias para las imágenes
        const randomX = Math.floor(Math.random() * flowerContainer.offsetWidth);
        const randomY = Math.floor(Math.random() * flowerContainer.offsetHeight);
        flowerImage.style.left = randomX + "px";
        flowerImage.style.top = randomY + "px";
    }
});
