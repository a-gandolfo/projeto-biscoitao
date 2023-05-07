let biscFech = biscoitoFechado.addEventListener('click', abrirBiscoito);
let biscAbert = biscoitoAberto.addEventListener('click', proximoBiscoito);

function abrirBiscoito(){
    toggleScreens();
};

function proximoBiscoito(){
    toggleScreens();
};

function toggleScreens(){
    let tela1 = document.querySelector('.screen1');
    let tela2 = document.querySelector('.screen2');

    tela1.classList.toggle('hide');
    tela2.classList.toggle('hide');
};

