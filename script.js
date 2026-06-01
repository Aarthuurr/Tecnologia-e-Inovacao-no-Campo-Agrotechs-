const menuToggle = document.querySelector('.menu-toggle');
const menuText = document.querySelector('.menu-text');
const menuNav = document.querySelector('#menu-principal');

menuToggle.addEventListener('click', () => {
    // Verifica se o menu já está aberto
    const estaAberto = menuToggle.getAttribute('aria-expanded') === 'true';
    
    // Inverte o estado do atributo para o leitor de tela
    menuToggle.setAttribute('aria-expanded', !estaAberto);
    
    // Inverte a propriedade de visibilidade para o leitor de tela (se está aberto, vira hidden=false)
    menuNav.setAttribute('aria-hidden', estaAberto);
    
    // Ativa/Desativa a classe CSS que mostra o menu na tela
    menuNav.classList.toggle('active');

    // Altera o texto acessível do botão sem quebrar o layout
    if (!estaAberto) {
        menuText.textContent = "Fechar Menu";
    } else {
        menuText.textContent = "Abrir Menu";
    }
});

// Fecha o menu mobile ao clicar em algum link dele
const menuLinks = document.querySelectorAll('#menu-principal a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            menuNav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuNav.setAttribute('aria-hidden', 'true');
            menuText.textContent = "Abrir Menu";
        }
    });
});