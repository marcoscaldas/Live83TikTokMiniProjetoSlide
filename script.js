let slideIndex = 1;

mostrarSlides(slideIndex);

//MUDAR SLIDE A CADA 3 SEGUNDOS
let intervalo = 
setInterval(mudarSlideAutomaticamente, 3000);


function mudarSlideAutomaticamente(){

    mostrarSlides(slideIndex += 1);
}

//FUNCAO PARA TROCAR DE SLIDE

function mudarSlide(n){
    // PARAR O TEMPORIZADOR AO MUDAR DE SLIDE MANUAL
    clearInterval(intervalo); 
    mostrarSlides(slideIndex += n );
    reiniciarTemporizador();
}

//FUNCAO PARA IR PARA UM SLIDE ESPECIFICO

function irParaSlide(n){
    clearInterval(intervalo);
    mostrarSlides(slideIndex = n);
    reiniciarTemporizador();
}

//FUNCAO PARA REINICIAR O TEMPORIZADOR

function reiniciarTemporizador(){
    clearInterval(intervalo);
    intervalo = 
    setInterval(mudarSlideAutomaticamente, 3000);
}

// FUNCAO MOSTRAR SLIDES

function mostrarSlides(n){
    let i;
    let slides =
     document.getElementsByClassName("slide");
    let pontos =
    document.getElementsByClassName("ponto");



    if(n > slides.length){ slideIndex = 1}


    if( n < 1){ slideIndex = slides.length}

    for( i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for( i = 0; i <pontos.length; i++){
        pontos[i].className = 
        pontos[i].className.replace(" ativo", "");
    }

    slides[ slideIndex - 1].style.display = "block";
    pontos [slideIndex - 1].className += " ativo";  

}

