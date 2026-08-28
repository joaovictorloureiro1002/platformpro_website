let caixaAnimacao = document.querySelector("#flutuando");
let accordionTitles = document.querySelectorAll(".accordion-title");
let featuresAnimation = document.querySelector("#feature-animation");
let accordionContents = document.querySelectorAll(".accordion-content");
let regAnimation = document.querySelector("#register-animation");
let hamburger = document.querySelector("#menu-mobile");
let menu = document.querySelector("#menu");

lottie.loadAnimation({
container: caixaAnimacao,
path: "landing.json",
renderer: "svg",
loop: true,
autoplay: true
});

lottie.loadAnimation({
    container: featuresAnimation,
    path: "features.json",
    renderer: "svg",
    loop: true,
    autoplay: true
});

lottie.loadAnimation({
    container: regAnimation,
    path: "footer.json",
    renderer: "svg",
    loop: true,
    autoplay: true
});

for(let i = 0; i < accordionTitles.length; i++){

    let botao = accordionTitles[i];

    botao.addEventListener("click", function(){

        let content = botao.nextElementSibling;

    

    let estavaAberto = content.classList.contains("active");

    for(let i = 0; i < accordionContents.length; i++){

        accordionContents[i].classList.remove("active");
  
    }

    if(!estavaAberto){
        content.classList.add("active");
    }

});
}

hamburger.addEventListener("click", function(){
    menu.classList.toggle("active")
})