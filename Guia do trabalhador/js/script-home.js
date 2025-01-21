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

    // Cria o link
    const link = document.createElement('a');
    link.href = item.link; // Usa o link específico do item
    link.target = '_blank'; // Abre em uma nova aba (opcional)

    // Conteúdo do card
    link.innerHTML = `
      <img src="${item.img}" alt="${item.alt}">
      <h3>${item.titulo}</h3>
      <p>${item.descricao}</p>
    `;

    // Adiciona o link ao item
    carrosselItem.appendChild(link);

    // Adiciona o item ao carrossel
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
  const initialOffset = 120; // Não precisamos empurrar para a direita, o primeiro item já deve estar visível

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
    titulo: 'Opinião |',
    items: [
        {
            img: '/images/destaques/discriminacaoracial.webp',
            alt: 'discriminacaoracial',
            titulo: 'Discriminação racial no mercado de trabalho',
            descricao: 'Entenda como o preconceito se manifesta no ambiente de trabalho',
            link: '/screens/noticias/politica/politica3.html'
        },
        {
            img: '/images/destaques/terceirização.webp',
            alt: 'terceirização',
            titulo: 'Terceirização e sua influência na precarização do trabalho',
            descricao: 'A terceirização consiste em uma forma de perpetuação das desigualdades',
            link: '/screens/noticias/politica/politica5.html'
        },
        {
            img: '/images/destaques/saudemental.webp',
            alt: 'saudemental',
            titulo: 'Políticas de saúde mental nas empresas',
            descricao: 'A importância da tomada de ações para garantir a saúde mental dos funcionários',
            link: '/screens/noticias/opinião/opiniao2.html'
        },
        {
            img: '/images/destaques/excesso.jpg',
            alt: 'excesso',
            titulo: 'A romantização do excesso de trabalho e seus impactos na saúde mental',
            descricao: 'Frequentemente valorizado, o excesso de trabalho pode gerar o burnout',
             link: '/screens/noticias/opinião/opiniao5.html'
        },
        {
            img: '/images/destaques/industria.jpeg',
            alt: 'industria',
            titulo: 'Como evitar riscos comuns em ambientes industriais',
            descricao: 'Veja os principais protocolos que as empresas devem seguir a fim de evitar acidentes',
             link: '/screens/noticias/segurança do trabalho/st1.html'
        }
        // Outros itens...
    ]
},

];


// Cria os carrosséis dinâmicos com base nos dados
carrosseis.forEach((carrossel, index) => {
  criarCarrossel(carrossel.titulo, carrossel.items, index);
});




