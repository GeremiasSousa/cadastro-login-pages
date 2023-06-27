const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Funçao de sair do APP 
function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = 'Logal/login.html';
    if(localStorage.getItem("tokenADM")){
        localStorage.removeItem("tokenADM");
        localStorage.removeItem("ADMlogado");
 }
}

function verificarPatente() {
    let menugerencia = document.getElementById("gerente");
    if (!localStorage.getItem("tokenADM")) {
        menugerencia.setAttribute("style", "display:none;");
    }
}




verificarPatente();