/*==================================================
                    DARK MODE
==================================================*/

const themeButton = document.getElementById("theme");

const savedTheme = localStorage.getItem("tema");

if (savedTheme === "dark") {

    document.body.classList.add("dark");
    themeButton.textContent = "☀️";

}

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const dark = document.body.classList.contains("dark");

    themeButton.textContent = dark ? "☀️" : "🌙";

    localStorage.setItem("tema", dark ? "dark" : "light");

});


/*==================================================
            MENU CANDIDATOS
==================================================*/

const menu = document.querySelector(".menu-candidatos");
const botaoMenu = document.getElementById("btnCandidatos");

if (menu && botaoMenu) {

    botaoMenu.addEventListener("click", () => {

        menu.classList.toggle("ativo");

    });

}


/*==================================================
        FECHAR AO CLICAR FORA
==================================================*/

document.addEventListener("click", (event) => {

    if (!menu.contains(event.target)) {

        menu.classList.remove("ativo");

    }

});


/*==================================================
                MODAL
==================================================*/

const modal = document.getElementById("modalInfo");

const tituloModal = document.getElementById("tituloModal");

const textoModal = document.getElementById("textoModal");

const fecharModal = document.getElementById("fecharModal");

const botoesInfo = document.querySelectorAll(".btn-info");

botoesInfo.forEach(botao=>{

    botao.addEventListener("click",(e)=>{

        e.preventDefault();

        e.stopPropagation();

        tituloModal.textContent=botao.dataset.titulo;

        textoModal.textContent=botao.dataset.texto;

        modal.classList.add("show");

    });

});

fecharModal.addEventListener("click",()=>{

    modal.classList.remove("show");

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("show");

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        modal.classList.remove("show");

    }

});