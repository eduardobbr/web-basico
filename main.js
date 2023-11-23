// Função simples para exibir um alerta quando um botão do menu é clicado
function exibirAlerta(pagina) {
    alert("Você clicou em " + pagina);
}

// Estrutura de decisão para alterar o texto principal com base na hora do dia
function alterarTextoPrincipal() {
    var saudacao = "Bom dia!";
    var horaAtual = new Date().getHours();

    if (horaAtual >= 18) {
        saudacao = "Boa noite!";
    }

    document.querySelector('main p span').innerText = saudacao;
}

// Alteração no CSS pelo JS: Mudar a cor do texto principal quando o mouse passa sobre ele
var textoPrincipal = document.querySelector('main p');

textoPrincipal.addEventListener('mouseover', function() {
    textoPrincipal.style.color = 'red';
});

textoPrincipal.addEventListener('mouseout', function() {
    textoPrincipal.style.color = ''; // Voltar à cor original
});


document.getElementById('home-button').addEventListener('click', function() {
    exibirAlerta('Home');
});

document.getElementById('serie-button').addEventListener('click', function() {
    exibirAlerta('Login');
});

document.getElementById('canais-button').addEventListener('click', function() {
    exibirAlerta('Canais');
});

document.getElementById('animes-button').addEventListener('click', function() {
    exibirAlerta('Animes');
});


// Função para criar um efeito de animação nos cards
function animarCards() {
    var cards = document.querySelectorAll('.card-container .card');
    var posicao = 0;

    // Usando um loop while para mover os cards para a direita
    while (posicao < 100) {
        for (var i = 0; i < cards.length; i++) {
            cards[i].style.transform = 'translateX(' + posicao + 'px)';
        }

        posicao += 10; // Incremento da posição
    }
}

// Chamar as funções assim que a página carregar
window.onload = function () {
    alterarTextoPrincipal();
    animarCards();
};
