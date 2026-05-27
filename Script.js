const menuToggle = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('#menu-principal');

menuToggle.addEventListener('click', () => {
    // Verifica se o menu já está aberto
    const numAberto = menuToggle.getAttribute('aria-expanded') === 'true';
    
    // Inverte o estado do atributo para o leitor de tela
    menuToggle.setAttribute('aria-expanded', !numAberto);
    
    // Inverte a propriedade de visibilidade para o leitor de tela
    menuNav.setAttribute('aria-hidden', numAberto);
    
    // Ativa/Desativa a classe CSS que mostra o menu na tela
    menuNav.classList.toggle('active');

    // Altera o texto do botão para ajudar quem lê visualmente
    if (!numAberto) {
        menuToggle.textContent = "Fechar Menu";
    } else {
        menuToggle.textContent = "Abrir Menu";
    }
});
