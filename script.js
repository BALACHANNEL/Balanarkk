/* ========================= */
/* MENU MOBILE */
/* ========================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});


/* ========================= */
/* FECHAR MENU AO CLICAR */
/* ========================= */

const links = document.querySelectorAll(".nav-links a");


links.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

  });

});


/* ========================= */
/* CONTADORES AUTOMÁTICOS */
/* ========================= */


/* Conta os grupos */

const grupos = document.querySelectorAll(".grupo-card");

document.getElementById("totalGrupos").textContent = grupos.length;


/* Conta os canais */

const canais = document.querySelectorAll(".canal-card");

document.getElementById("totalCanais").textContent = canais.length;


/* Conta as divulgações */

const divulgacoes = document.querySelectorAll(".divulgacao-card");

document.getElementById("totalDivulgacao").textContent = divulgacoes.length;


/* ========================= */
/* ANIMAÇÃO DOS NÚMEROS */
/* ========================= */

function animarNumero(elemento, numeroFinal) {

  let numeroAtual = 0;

  const velocidade = 30;


  const intervalo = setInterval(() => {

    numeroAtual++;

    elemento.textContent = numeroAtual;


    if (numeroAtual >= numeroFinal) {

      elemento.textContent = numeroFinal;

      clearInterval(intervalo);

    }

  }, velocidade);

}


const contadorGrupos = document.getElementById("totalGrupos");

const contadorCanais = document.getElementById("totalCanais");

const contadorDivulgacao = document.getElementById("totalDivulgacao");


animarNumero(
  contadorGrupos,
  grupos.length
);


animarNumero(
  contadorCanais,
  canais.length
);


animarNumero(
  contadorDivulgacao,
  divulgacoes.length
);
