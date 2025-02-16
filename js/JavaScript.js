//ativar cor de barra e botão
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//ativar items plano

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

//ativar as barras de perguntas
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event){
  const pergunta = event.currentTarget
  const controls = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controls)

  resposta.classList.toggle("ativa")
  const ativa = resposta.classList.contains('ativa')
  pergunta.setAttribute('aria-expanded', ativa)
}

function eventosPerguntas(pergunta){
  pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas)


//ativar imagem em primeiro plano
const galeria = document.querySelectorAll('.carros-imagens img')
const galeriaContainer = document.querySelector('.carros-imagens')

function trocarImagem(event){
  const img = event.currentTarget;
  if (img.classList.contains("marca-logo")) {
    return;
  }

  galeriaContainer.prepend(img);
}


function eventosGaleria(img){
  img.addEventListener('click',trocarImagem)
}

galeria.forEach(eventosGaleria)

//Animação
if(window.SimpleAnime){
  new SimpleAnime();
}


// Seleciona o botão e o elemento de aviso
const botaoAviso = document.querySelector(".botao-aviso");
const aviso = document.querySelector(".aviso");

// Adiciona o evento de clique ao botão
if (botaoAviso) {
  botaoAviso.addEventListener("click", function() {
    // Ao clicar, o elemento aviso é ocultado
    aviso.style.display = "none";
  });
}