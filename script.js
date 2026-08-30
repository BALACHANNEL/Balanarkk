// ==========================================
// GRUPOS DA BALANARKK
// ==========================================

const grupos = {

    amizades: [
        {
            nome: "Grupo de Amizades 1",
            link: "https://chat.whatsapp.com/"
        },
        {
            nome: "Grupo de Amizades 2",
            link: "https://chat.whatsapp.com/"
        }
    ],

    games: [
        {
            nome: "Grupo de Games 1",
            link: "https://chat.whatsapp.com/"
        }
    ],

    entretenimento: [
        {
            nome: "Grupo de Entretenimento 1",
            link: "https://chat.whatsapp.com/"
        }
    ],

    negocios: [
        {
            nome: "Grupo de Negócios 1",
            link: "https://chat.whatsapp.com/"
        }
    ],

    estudos: [
        {
            nome: "Grupo de Estudos 1",
            link: "https://chat.whatsapp.com/"
        }
    ],

    outros: [
        {
            nome: "Grupo de Outros 1",
            link: "https://chat.whatsapp.com/"
        }
    ]

};


// ==========================================
// CONTAR OS GRUPOS AUTOMATICAMENTE
// ==========================================

function atualizarContadores() {

    const categorias = [
        "amizades",
        "games",
        "entretenimento",
        "negocios",
        "estudos",
        "outros"
    ];

    categorias.forEach(function(categoria) {

        const quantidade = grupos[categoria].length;

        const contador = document.getElementById(
            "contador-" + categoria
        );

        if (contador) {

            contador.textContent =
                quantidade + (quantidade === 1 ? " grupo" : " grupos");

        }

    });

}


// ==========================================
// BOTÕES DAS CATEGORIAS
// ==========================================

function entrarGrupo(categoria) {

    const lista = grupos[categoria];

    if (!lista || lista.length === 0) {

        alert("💜 Ainda não existem grupos nesta categoria.");

        return;

    }

    // Se houver apenas um grupo, abre diretamente
    if (lista.length === 1) {

        window.open(lista[0].link, "_blank");

        return;

    }

    // Se houver vários grupos
    let mensagem = "💜 GRUPOS DISPONÍVEIS\n\n";

    lista.forEach(function(grupo, index) {

        mensagem +=
            (index + 1) + ". " + grupo.nome + "\n";

    });

    const escolha = prompt(
        mensagem +
        "\nDigite o número do grupo que deseja entrar:"
    );

    const numero = parseInt(escolha);

    if (
        !isNaN(numero) &&
        numero >= 1 &&
        numero <= lista.length
    ) {

        window.open(
            lista[numero - 1].link,
            "_blank"
        );

    }

}


// ==========================================
// INICIAR CONTADORES
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        atualizarContadores();

    }
);
