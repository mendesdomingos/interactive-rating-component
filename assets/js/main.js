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
    // Verifica se pelo menos um botão está selecionado
    const selectedButton = document.querySelector('.btn.active');
    if (selectedButton) {
        // Se pelo menos um botão estiver selecionado, realiza o envio
        window.location.href = './assets/pages/result.html';
    } else {
        // Se nenhum botão estiver selecionado, não faz nada ou exibe uma mensagem de erro
        console.log("Por favor, selecione uma opção antes de enviar.");
    }
}

document.addEventListener('DOMContentLoaded', function () {

    const rating = localStorage.getItem('rating');
    const outputResponse = document.getElementById('response');

    if (outputResponse && rating !== null) {
        outputResponse.textContent = `You selected ${rating} out of 5`;
    }
});