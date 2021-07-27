document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
); 

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function() {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco() {
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value


    let preco = qtde * 100;
    if (temJS) preco *= 1.1
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo * 0.1;
    preco *= 1 + taxaUrgencia

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}


/*Scroll suave no menu*/ 
function initScrollSuave(){

const linksInternos = document.querySelectorAll('.js-menu .menu-item a[href^="#"]');

function scrollToAside(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const aside = document.querySelector(href);
    
    aside.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });

    //Forma alternativa/* 
    /*const topo = (aside.offsetTop);
    window.scrollTo({
        top: 1000,
        behavior: 'smooth',
    }); */
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToAside);
});

}
initScrollSuave();


function initScrollSaiba(){
const botaoSaiba = document.querySelector('.js-banner a[href^="#"]');

function scrollToSaiba(event){
    event.preventDefault();
    const sobremim = event.currentTarget.getAttribute('href');
    const bannerButton = document.querySelector(sobremim);
    
    bannerButton.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}

botaoSaiba.addEventListener('click', scrollToSaiba);
}
initScrollSaiba();