
document.addEventListener("DOMContentLoaded", () => {
    // Redireciona para a seção do formulário quando clicar em "Clique aqui"
    const redirectLink = document.getElementById('redirect');
    const formSection = document.getElementById('form-section');

    redirectLink.addEventListener("click", () => {
        formSection.style.display = "block";  // Exibe a seção de formulário
        window.scrollTo({
            top: formSection.offsetTop,
            behavior: 'smooth'
        });
    });

    // Função para esconder o prompt quando o usuário começa a digitar
    const questionInput = document.getElementById('question');

    questionInput.addEventListener("focus", () => {
        if (questionInput.placeholder === "Digite sua pergunta aqui...") {
            questionInput.placeholder = "";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o envio do formulário para o servidor

        const email = document.getElementById("email").value;
        showPopup(`Obrigado por nos contactar! Em breve enviaremos um e-mail para o endereço de: ${email} com as informações necessárias para responder a sua pergunta.`);
    });

    // Função para mostrar o pop-up
    function showPopup(message) {
        // Cria os elementos do pop-up
        const overlay = document.createElement("div");
        overlay.className = "overlay"; // Altere para 'overlay'
        document.body.appendChild(overlay);

        const popup = document.createElement("div");
        popup.className = "popup"; // Altere para 'popup'

        const popupMessage = document.createElement("p");
        popupMessage.textContent = message;

        const closeButton = document.createElement("button");
        closeButton.textContent = "Fechar";
        closeButton.addEventListener("click", () => {
            popup.remove();
            overlay.remove();
        });

        // Adiciona os elementos ao pop-up
        popup.appendChild(popupMessage);
        popup.appendChild(closeButton);
        document.body.appendChild(popup);

        // Mostra o pop-up e a overlay
        overlay.style.display = "block";
        popup.style.display = "block";
    }
});


// teste

    // Seleciona todas as perguntas
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Adiciona o evento de clique para cada pergunta
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Alterna a classe 'active' no contêiner de FAQ (pergunta + resposta)
            const faqContainer = question.parentElement;
            faqContainer.classList.toggle('active');
        });
    });


// Função para gerar confetes

function createConfetti(x, y) {
    const confettiContainer = document.querySelector('.gdt-confetti-container');
    const colors = ['#ff5733', '#33ff57', '#33aaff', '#ff33a1', '#ffb833', '#ff69b4', '#ff0000', '#ffff00']; // Lista de cores

    // Gerar 100 confetes
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Posição aleatória para os confetes
        const randomX = x + Math.random() * 200 - 100; // Confetes saem de um ponto próximo ao clique
        const randomY = y + Math.random() * 200 - 100;
        
        const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Cor aleatória
        confetti.style.left = `${randomX}px`;
        confetti.style.top = `${randomY}px`;
        confetti.style.backgroundColor = randomColor;

        // Adiciona o confete ao contêiner
        confettiContainer.appendChild(confetti);

        // Remove o confete após a animação
        setTimeout(() => {
            confetti.remove();
        }, 2000); // Confetes removidos após 2 segundos
    }
}

// Adiciona o evento de clique nas imagens de confete
document.getElementById('gdt-confetti1').addEventListener('click', (event) => {
    createConfetti(event.clientX, event.clientY); // Gera os confetes ao clicar
});

document.getElementById('gdt-confetti2').addEventListener('click', (event) => {
    createConfetti(event.clientX, event.clientY); // Gera os confetes ao clicar
});

