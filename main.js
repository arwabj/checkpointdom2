document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les éléments color-box et change-color-btn
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Fonction pour générer une couleur aléatoire
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Ajouter un écouteur d'événements pour le bouton de changement de couleur
    changeColorBtn.addEventListener('click', function() {
        // Changer la couleur de la boîte de couleur en une couleur aléatoire
        colorBox.style.backgroundColor = getRandomColor();
    });
});
