/*Funcionalidade menu*/
document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

/*Scroll suave no menu*/
function initScrollSuave() {

    const linksInternos = document.querySelectorAll('.js-menu .menu-item a[href^="#"]');

    function scrollToAside(event) {
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


/*Scroll suave do botão saiba*/
function initScrollSaiba() {
    const botaoSaiba = document.querySelector('.js-banner a[href^="#"]');

    function scrollToSaiba(event) {
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




/*Funcionalidade da área de conhecimento do site*/
function initAccordionSkills() {
    const allh3 = document.querySelectorAll('.select-h3');
    const tagP = document.querySelectorAll('.js-accordion p');
    const activeClass = 'ativo';
    if (allh3.length && tagP) {

        tagP[0].classList.add(activeClass);
        allh3[0].classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.parentElement.nextElementSibling.children[0].classList.toggle(activeClass);
        }

        allh3.forEach((h3) => {
            h3.addEventListener('click', activeAccordion);
        })
    }
};
initAccordionSkills();



/* funcionalidade de animação ao Scroll em todas as partes*/


function initAnimacaoScroll() {

    const scrollSections = document.querySelectorAll('.js-scroll');
    if (scrollSections.length) {
        const windowMetade = window.innerHeight * 0.5;


        function animaScroll() {
            scrollSections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;

                if (isSectionVisible) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            })
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
};
initAnimacaoScroll();