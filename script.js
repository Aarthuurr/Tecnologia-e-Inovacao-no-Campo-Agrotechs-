const menuToggle = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('#menu-principal');
const menuText = document.querySelector('.menu-text');

menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    
    // Alterna estados
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    menuNav.setAttribute('aria-hidden', isExpanded);
    menuNav.classList.toggle('active');
    
    // Muda texto do botão
    menuText.textContent = isExpanded ? "Menu" : "Fechar";
});