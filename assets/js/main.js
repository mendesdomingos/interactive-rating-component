function rating(value) {
    localStorage.setItem('rating', value);
};

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões
        buttons.forEach(otherButton => {
            otherButton.classList.remove('active');
        });

        // Adiciona a classe 'active' apenas ao botão clicado
        button.classList.add('active');
    });
});


function submit() {
    window.location.href = './assets/pages/page2.html';
};

document.addEventListener('DOMContentLoaded', function() {
    
    const rating = localStorage.getItem('rating');
    const outputResponse = document.getElementById('response');

    if (outputResponse && rating !== null) {
        outputResponse.textContent = `It's ${rating}`;
    }
});