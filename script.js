// ========================================
// LINKS DOS GRUPOS DE WHATSAPP
// ========================================

// Coloque os links reais dos seus grupos aqui.
// Exemplo:
// "https://chat.whatsapp.com/SEU-CODIGO"

const grupos = {

    amizades: "https://chat.whatsapp.com/Hkz0XCvpHiiGzY5pS6WlKi?s=cl&p=a&mlu=4",

    games: "https://chat.whatsapp.com/",

    entretenimento: "https://chat.whatsapp.com/",

    negocios: "https://chat.whatsapp.com/",

    estudos: "https://chat.whatsapp.com/",

    outros: "https://chat.whatsapp.com/"

};


// ========================================
// BOTÕES "VER GRUPOS"
// ========================================

function entrarGrupo(categoria) {

    const link = grupos[categoria];

    // Verifica se existe um link válido
    if (
        link &&
        link !== "https://chat.whatsapp.com/"
    ) {

        window.open(link, "_blank");

    } else {

        alert(
            "💜 Os grupos desta categoria ainda estão sendo cadastrados!"
        );

    }

}


// ========================================
// ANIMAÇÃO DOS ELEMENTOS
// ========================================

const elementos = document.querySelectorAll(
    ".group-card, .panel, .about, .stats, .cta"
);


const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.12
    }

);


// ========================================
// ATIVA A ANIMAÇÃO
// ========================================

elementos.forEach(function(elemento) {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(20px)";

    elemento.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(elemento);

});
