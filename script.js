/* ========================= */
/* MENU MOBILE */
/* ========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


/* ========================= */
/* CONTADORES */
/* ========================= */

function atualizarContadores() {

  const grupos = document.querySelectorAll(".grupo-card");
  const canais = document.querySelectorAll(".canal-card");
  const divulgacoes = document.querySelectorAll(".divulgacao-card");

  document.getElementById("totalGrupos").textContent = grupos.length;
  document.getElementById("totalCanais").textContent = canais.length;
  document.getElementById("totalDivulgacao").textContent = divulgacoes.length;

}


/* ========================= */
/* ADICIONAR GRUPO */
/* ========================= */

function adicionarGrupo() {

  const imagem = document.getElementById("grupoImagem").value;
  const nome = document.getElementById("grupoNome").value;
  const descricao = document.getElementById("grupoDescricao").value;
  const membros = document.getElementById("grupoMembros").value;
  const link = document.getElementById("grupoLink").value;


  if (!nome || !link) {

    alert("Preencha pelo menos o nome e o link do grupo!");

    return;

  }


  const grupo = {
    imagem,
    nome,
    descricao,
    membros,
    link
  };


  let gruposSalvos = JSON.parse(
    localStorage.getItem("gruposBalanarkk")
  ) || [];


  gruposSalvos.push(grupo);


  localStorage.setItem(
    "gruposBalanarkk",
    JSON.stringify(gruposSalvos)
  );


  mostrarGrupo(grupo);


  document.getElementById("grupoImagem").value = "";
  document.getElementById("grupoNome").value = "";
  document.getElementById("grupoDescricao").value = "";
  document.getElementById("grupoMembros").value = "";
  document.getElementById("grupoLink").value = "";


  atualizarContadores();


  alert("Grupo adicionado com sucesso! 🖤");

}


/* ========================= */
/* MOSTRAR GRUPO */
/* ========================= */

function mostrarGrupo(grupo) {

  const container = document.getElementById("gruposContainer");


  const imagemFinal = grupo.imagem
    ? grupo.imagem
    : "https://images.unsplash.com/photo-1529156069898-49953e39b3ac";


  const card = document.createElement("div");


  card.className = "card grupo-card";


  card.innerHTML = `

    <div class="card-image">

      <img
        src="${imagemFinal}"
        alt="${grupo.nome}"
      >

    </div>


    <div class="card-content">

      <h3>${grupo.nome}</h3>

      <p>${grupo.descricao || "Grupo da aliança Balanarkk."}</p>

      <div class="members">
        👥 ${grupo.membros || 0} membros
      </div>

      <a
        href="${grupo.link}"
        target="_blank"
        class="card-button"
      >
        ENTRAR
      </a>

    </div>

  `;


  container.appendChild(card);

}


/* ========================= */
/* CARREGAR GRUPOS SALVOS */
/* ========================= */

function carregarGrupos() {

  const gruposSalvos = JSON.parse(
    localStorage.getItem("gruposBalanarkk")
  ) || [];


  gruposSalvos.forEach(grupo => {

    mostrarGrupo(grupo);

  });


  atualizarContadores();

}


/* ========================= */
/* INICIAR SITE */
/* ========================= */

carregarGrupos();

atualizarContadores();
