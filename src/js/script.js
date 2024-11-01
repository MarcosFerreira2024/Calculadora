function sliderPrincipal(){
    let botoes = document.querySelectorAll(".pointers");
    let slider = document.querySelector(".sliders");
    slider.style.width=`${100*botoes.length}vw`
    botoes.forEach((botao, index) => {
        botao.setAttribute('data-index', index);
        botao.addEventListener('click', trocar);
});

function trocar(e) {
    botoes.forEach((botao) => botao.classList.remove('ativo'));
    e.currentTarget.classList.add('ativo');
    let index = e.currentTarget.getAttribute('data-index');
    slider.style.marginLeft = `${index * -100}vw`;
    console.log(e)
}


}

sliderPrincipal()
