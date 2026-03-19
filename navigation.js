document.addEventListener("DOMContentLoaded", function() {
    const navContainer = document.getElementById('nav-container');

    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            navContainer.innerHTML = data;
            // Déterminer la page actuelle (ex: index.html)
            let currentPage = window.location.pathname.split("/").pop();
            if (currentPage === "") currentPage = "index.html";
            
            const links = document.querySelectorAll('#main-nav a');
            links.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        })
        .catch(err => console.error("Erreur menu:", err));
});
