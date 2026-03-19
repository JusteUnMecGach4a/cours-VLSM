document.addEventListener("DOMContentLoaded", function() {
    // 1. On récupère l'élément où on veut injecter le menu
    const navContainer = document.getElementById('nav-container');

    // 2. On charge le fichier nav.html
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            navContainer.innerHTML = data;

            // 3. Gestion automatique de la classe "active"
            const currentPage = window.location.pathname.split("/").pop() || "index.html";
            const links = document.querySelectorAll('#main-nav a');
            
            links.forEach(link => {
                if (link.getAttribute('data-page') === currentPage) {
                    link.classList.add('active');
                }
            });
        })
        .catch(err => console.error("Erreur de chargement du menu :", err));
});
