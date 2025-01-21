// Função para criar um carrossel dinâmico
function criarCarrossel(titulo, items, indice) {
    const container = document.createElement('div');
    container.classList.add('carrossel-artigos1');

    // Alterna os fundos com base no índice
    if (indice % 2 === 0) {
        container.classList.add('fundo-vermelho');
    } else {
        container.classList.add('fundo-branco');
    }

    // Adiciona o título da seção
    const tituloSecao = document.createElement('h2');
    tituloSecao.classList.add('titulo-secao');
    tituloSecao.textContent = titulo;

    // Define a cor do título com base no fundo
    if (indice % 2 === 0) {
        tituloSecao.style.color = '#ffffff'; // Título branco no fundo vermelho
    } else {
        tituloSecao.style.color = '#000000'; // Título preto no fundo branco
    }

    container.appendChild(tituloSecao);

    // Contêiner do carrossel
    const carrosselContainer = document.createElement('div');
    carrosselContainer.classList.add('carrossel-container');

    // Botão esquerdo
    const setaEsquerda = document.createElement('button');
    setaEsquerda.classList.add('seta-esquerda');
    setaEsquerda.innerHTML = '&#8249;';
    setaEsquerda.style.display = 'none'; // Esconde a seta inicialmente
    carrosselContainer.appendChild(setaEsquerda);

    // Carrossel
    const carrossel = document.createElement('div');
    carrossel.classList.add('carrossel');

    // Adiciona os itens ao carrossel
    items.forEach(item => {
        const carrosselItem = document.createElement('div');
        carrosselItem.classList.add('item');
        
        // Criando o link de cada item
        const link = document.createElement('a');
        link.href = item.url;  // URL de destino específica
        link.classList.add('item-link');
        link.innerHTML = `
            <img src="${item.img}" alt="${item.alt}">
            <h3>${item.titulo}</h3>
            <p>${item.descricao}</p>
        `;

        carrosselItem.appendChild(link);
        carrossel.appendChild(carrosselItem);
    });
    carrosselContainer.appendChild(carrossel);

    // Botão direito
    const setaDireita = document.createElement('button');
    setaDireita.classList.add('seta-direita');
    setaDireita.innerHTML = '&#8250;';
    carrosselContainer.appendChild(setaDireita);

    // Adiciona o contêiner ao carrossel principal
    container.appendChild(carrosselContainer);

    // Adiciona o carrossel ao DOM
    document.querySelector('#carrossel-secoes').appendChild(container);

    // Inicializa o controle de navegação
    inicializarCarrossel(carrossel, setaEsquerda, setaDireita);
}

// Função para inicializar o controle de um carrossel
// Função para inicializar o controle de um carrossel
function inicializarCarrossel(carrossel, setaEsquerda, setaDireita) {
    const itemWidth = carrossel.children[0].offsetWidth + 20; // Largura do item + gap
    let currentIndex = 0;

    // Calcula o número de itens visíveis
    const visibleItems = Math.floor(carrossel.parentElement.offsetWidth / itemWidth);
    const totalItems = carrossel.children.length;

    // Ajuste do deslocamento inicial para garantir que o primeiro item esteja visível corretamente
    const initialOffset = 150; // Não precisamos empurrar para a direita, o primeiro item já deve estar visível

    // Aplica o deslocamento inicial no carrossel
    carrossel.style.transform = `translateX(${initialOffset}px)`; // Inicializa sem deslocamento

    // Clique na seta direita
    setaDireita.addEventListener('click', () => {
        currentIndex++;
        const maxIndex = totalItems - visibleItems;
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        carrossel.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // Move o carrossel para a esquerda

        setaEsquerda.style.display = currentIndex > 0 ? 'block' : 'none';
        setaDireita.style.display = currentIndex < maxIndex ? 'block' : 'none';
    });

    // Clique na seta esquerda
    setaEsquerda.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = 0;

        // Recalcula a posição para garantir que a transição seja suave até o final
        const offset = (currentIndex === 0) ? initialOffset : -currentIndex * itemWidth;
        carrossel.style.transform = `translateX(${offset}px)`; // Move o carrossel para a esquerda

        setaEsquerda.style.display = currentIndex > 0 ? 'block' : 'none';
        setaDireita.style.display = currentIndex < totalItems - visibleItems ? 'block' : 'none';
    });

    // Configura visibilidade inicial dos botões
    setaEsquerda.style.display = 'none';
    setaDireita.style.display = totalItems > visibleItems ? 'block' : 'none';
}




// Criação dos carrosséis dinâmicos com alternância de fundo
const carrosseis = [
    {
        titulo: 'Política |',
        items: [
            {
                img: '/images/noticia1.png',
                alt: 'Notícia 1',
                titulo: 'A escala 6X1: O que significa a pauta atualmente discutida no congresso?',
                descricao: 'Fique por dentro das mais recentes atualizações sobre a jornada de trabalho brasileira.',
                url: '/screens/noticias/politica/politica1.html' // URL de destino específica
            },
            {
                img: '/images/ia.jpg',
                alt: 'Notícia 2',
                titulo: 'A IA vai substituir os trabalhadores?',
                descricao: 'Empresas estão começando a adotá-la, saiba como isso pode te impactar',
                url: '/screens/noticias/politica/politica2.html' // URL de destino específica
            },
            {
                img: '/images/discriminacaoracial.webp',
                alt: 'Notícia 2',
                titulo: 'Discriminação racial no mercado de trabalho',
                descricao: 'Entenda como o preconceito se manifesta no ambiente de trabalho',
                url: '/screens/noticias/politica/politica3.html' // URL de destino específica
            },
            {
                img: '/images/ifood.webp',
                alt: 'Notícia 2',
                titulo: 'O impacto das plataformas digitais nas condições de trabalho',
                descricao: 'Apesar do crescimento do trabalho por aplicativo, essa modalidade possui poucos direitos trabalhistas e longas jornadas de trabalho',
                url: '/screens/noticias/politica/politica4.html' // URL de destino específica
            },
            {
                img: '/images/terceirizacao.webp',
                alt: 'Notícia 2',
                titulo: 'Terceirização e sua influência na precarização',
                descricao: 'A terceirização consiste em uma forma de perpetuação das desigualdades',
                url: '/screens/noticias/politica/politica5.html' // URL de destino específica
            }
            // Outros itens...
        ]
    },
    {
        titulo: 'Opinião |',
        items: [
            {
                img: '/images/romantizacao-emp.webp',
                alt: 'Notícia 1',
                titulo: 'A romantização do empreendedorismo',
                descricao: 'O empreendedorismo surge como uma forma rápiga de vencer na vida, mas para o proletário não é bem assim',
                url: '/screens/noticias/opinião/opiniao1.html' // URL de destino específica
            },
            {
                img: '/images/saudemental.webp',
                alt: 'Notícia 1',
                titulo: 'Políticas de saúde mental nas empresas.',
                descricao: 'A importância da tomada de ações para garantir a saúde mental dos funcionários',
                url: '/screens/noticias/opinião/opiniao2.html' // URL de destino específica
            },
            {
                img: '/images/discrepancia.jpg',
                alt: 'Notícia 1',
                titulo: 'A Discrepância Salarial entre Homens e Mulheres: Um Problema Persistente',
                descricao: 'Apesar dos anos de luta, os homens ainda recebem mais que as mulheres',
                url: '/screens/noticias/opinião/opiniao3.html' // URL de destino específica
            },
            {
                img: '/images/bem-estar.jpg',
                alt: 'Notícia 1',
                titulo: 'Impactos no bem-estar dos trabalhadores e na produtividade',
                descricao: 'O bem-estar do trabalhador influencia diretamente em seu trabalho e desempenho',
                url: '/screens/noticias/opinião/opiniao4.html' // URL de destino específica
            },
            {
                img: '/images/excesso.jpg',
                alt: 'Notícia 1',
                titulo: 'A romantização do excesso de trabalho e seus impactos na saúde mental',
                descricao: 'Frequentemente valorizado, o excesso de trabalho pode gerar o burnout',
                url: '/screens/noticias/opinião/opiniao5.html' // URL de destino específica
            }
            // Outros itens...
        ]
    },
    {
        titulo: 'Segurança no Trabalho |',
        items: [
            {
                img: '/images/industria.jpeg',
                alt: 'Notícia 1',
                titulo: 'Como evitar riscos comuns em ambientes industriais',
                descricao: 'Veja os principais protocolos que as empresas devem seguir a fim de evitar acidentes',
                url: '/screens/noticias/segurança do trabalho/st1.html' // URL de destino específica
            },
            {
                img: '/images/acidente.jpeg',
                alt: 'Notícia 1',
                titulo: 'Entenda as diferenças entre doença ocupacional e acidente de trabalho',
                descricao: 'Saber diferenciar esses conceitos é essencial na busca por direitos',
                url: '/screens/noticias/segurança do trabalho/st2.html' // URL de destino específica
            },
            {
                img: '/images/ergonomia.jpg',
                alt: 'Notícia 1',
                titulo: 'A importância da ergonomia',
                descricao: 'Entenda um dos aspectos mais importantes para o seu bem-estar no ambiente de trabalho',
                url: '/screens/noticias/segurança do trabalho/st3.html' // URL de destino específica
            },
            {
                img: '/images/saude.jpg',
                alt: 'Notícia 1',
                titulo: 'A importância da conscientização sobre saúde ocupacional.',
                descricao: 'A saúde ocupacional promove o bem-estar do trabalhador e previne doenças',
                url: '/screens/noticias/segurança do trabalho/st4.html' // URL de destino específica
            },
            {
                img: '/images/nr23.png',
                alt: 'Notícia 1',
                titulo: 'A importância da NR 23 para os trabalhadores',
                descricao: 'Colocar em prática a NR-23 pode salvar vidas',
                url: '/screens/noticias/segurança do trabalho/st5.html' // URL de destino específica
            }
            // Outros itens...
        ]
    }
];

// Cria os carrosséis dinâmicos com base nos dados
carrosseis.forEach((carrossel, index) => {
    criarCarrossel(carrossel.titulo, carrossel.items, index);
});
