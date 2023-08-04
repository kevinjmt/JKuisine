const shareButton = document.querySelector(".share-button");
shareButton.addEventListener('click', event => {
    navigator.share({
        title: "JKuisine",
        text: "🥘 Des recettes simples, rapides et gourmandes pour les étudiants mais pas que! 😋",
        url: "https://kevinjmt.github.io/JKuisine/en_savoir_plus"
    }).then(() => console.log("JKuisine a été partagé avec succès!"))
    .catch(err => console.error(err));
})