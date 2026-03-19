const menuElement = document.getElementById('menu');
const titleElement = document.getElementById('page-title');
const contentArea = document.getElementById('content-area');

// 1. Générer le menu
function initMenu() {
    for (const key in pagesData) {
        const li = document.createElement('li');
        li.className = 'menu-item';
        li.innerHTML = `<i class="fas fa-chevron-right"></i> ${pagesData[key].title}`;
        li.onclick = () => loadPage(key);
        li.id = `btn-${key}`;
        menuElement.appendChild(li);
    }
}

// 2. Charger une page
function loadPage(pageKey) {
    const data = pagesData[pageKey];
    
    // Mise à jour visuelle du titre et contenu
    titleElement.innerText = data.title;
    contentArea.innerHTML = data.content;

    // Gérer l'état actif du menu
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
    document.getElementById(`btn-${pageKey}`).classList.add('active');

    // Scroll en haut
    window.scrollTo(0, 0);
}

// Lancer le site
initMenu();
loadPage('intro'); // Page par défaut
