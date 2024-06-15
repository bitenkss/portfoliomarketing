

function toggleText(card) {
    var content = card.querySelector('.content p');
    var title = card.querySelector('.content h3');

    content.classList.toggle('visible');
    title.classList.toggle('hidden');
}

function handleMouseOver(card) {
    var title = card.querySelector('.content h3');
    title.classList.add('hidden');
}

function handleMouseOut(card) {
    var title = card.querySelector('.content h3');
    title.classList.remove('hidden');
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    const toggleButton = document.querySelector('.menu-toggle');

    // Alterna a exibição do menu entre 'flex' e 'none'
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        toggleButton.classList.remove('active');
    } else {
        menu.style.display = 'flex';
        toggleButton.classList.add('active');
    }
}

// Função para fechar o menu ao clicar em uma das opções
function closeMenu() {
    const menu = document.getElementById('menu');
    const toggleButton = document.querySelector('.menu-toggle');

    // Fecha o menu e remove a classe 'active' do botão
    menu.style.display = 'none';
    toggleButton.classList.remove('active');
}


document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typing-text');
    const text = typingText.textContent;
    typingText.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            typingText.style.borderRight = 'none';
        }
    }

    type();
});





 
  


