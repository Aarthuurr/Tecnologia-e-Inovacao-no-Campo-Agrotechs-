const menuToggle = document.querySelector('.menu-toggle');
const menuText = document.querySelector('.menu-text');
const menuNav = document.querySelector('#menu-principal');

// Função para abrir/fechar o menu e atualizar a acessibilidade
function alternarMenu() {
    const estaAberto = menuToggle.getAttribute('aria-expanded') === 'true';
    
    menuToggle.setAttribute('aria-expanded', !estaAberto);
    menuNav.setAttribute('aria-hidden', estaAberto);
    
    // Ativa as classes de estilização e animação do hambúrguer
    menuNav.classList.toggle('active');
    menuToggle.classList.toggle('active');

    // Altera o texto acessível
    if (!estaAberto) {
        menuText.textContent = "Fechar Menu";
    } else {
        menuText.textContent = "Abrir Menu";
    }
}

menuToggle.addEventListener('click', alternarMenu);

// Fecha o menu mobile ao clicar em algum link dele
const menuLinks = document.querySelectorAll('#menu-principal a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768 && menuNav.classList.contains('active')) {
            alternarMenu();
        }
    });
});

// Acessibilidade: Fecha o menu se o usuário apertar a tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuNav.classList.contains('active')) {
        alternarMenu();
        menuToggle.focus();
    }
});