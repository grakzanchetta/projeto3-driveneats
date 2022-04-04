/* DIZ SE O ELEMENTO FOI SELECIONADO */
let prato = 0;
let bebida = 0;
let sobremesa = 0;

/* VALORES DOS PRATOS */
let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;

/* QUAL PRATO ESCOLHIDO */
let tipoPrato = 0;
let tipoBebida = 0;
let tipoSobremesa = 0; 

/* FUNCÃO PRA INVERTER OS BOTÕES */
function habilitarBotao (){
if ((prato === 1) && (bebida ===1) && (sobremesa ===1)){
    document.getElementById("pedidoNaoFeito").style.display = "none";
    document.getElementById("pedidoFeito").style.display = "flex";
    }
}

/* ESCOLHA DE PRATOS */
function escolherPratoUm (){
    document.getElementById("frango1").style.borderColor = "green";
    document.getElementById("iconFrango1").style.display = "flex";
    document.getElementById("frango2").style.borderColor = "white";
    document.getElementById("iconFrango2").style.display = "none";
    document.getElementById("frango3").style.borderColor = "white";
    document.getElementById("iconFrango3").style.display = "none";
    prato = 1;
    valorPrato = 14.90;
    tipoPrato = "Frango 1";
    habilitarBotao();
}

function escolherPratoDois (){
    document.getElementById("frango1").style.borderColor = "white";
    document.getElementById("iconFrango1").style.display = "none";
    document.getElementById("frango2").style.borderColor = "green";
    document.getElementById("iconFrango2").style.display = "flex";
    document.getElementById("frango3").style.borderColor = "white";
    document.getElementById("iconFrango3").style.display = "none";
    prato = 1;
    valorPrato = 10.90;
    tipoPrato = "Frango 2";
    habilitarBotao();
}

function escolherPratoTres (){
    document.getElementById("frango1").style.borderColor = "white";
    document.getElementById("iconFrango1").style.display = "none";
    document.getElementById("frango2").style.borderColor = "white";
    document.getElementById("iconFrango2").style.display = "none";
    document.getElementById("frango3").style.borderColor = "green";
    document.getElementById("iconFrango3").style.display = "flex";
    prato = 1;
    valorPrato = 11.90;
    tipoPrato = "Frango 3";
    habilitarBotao();
}

/* ESCOLHA DE BEBIDA */
function escolherBebidaUm (){
    document.getElementById("coca1").style.borderColor = "green";
    document.getElementById("iconCoca1").style.display = "flex";
    document.getElementById("coca2").style.borderColor = "white";
    document.getElementById("iconCoca2").style.display = "none";
    document.getElementById("coca3").style.borderColor = "white";
    document.getElementById("iconCoca3").style.display = "none";
    bebida = 1;
    valorBebida = 4.90;
    tipoBebida = "Coca 1";
    habilitarBotao();
}

function escolherBebidaDois (){
    document.getElementById("coca1").style.borderColor = "white";
    document.getElementById("iconCoca1").style.display = "none";
    document.getElementById("coca2").style.borderColor = "green";
    document.getElementById("iconCoca2").style.display = "flex";
    document.getElementById("coca3").style.borderColor = "white";
    document.getElementById("iconCoca3").style.display = "none";
    bebida = 1;
    valorBebida = 3.50;
    tipoBebida = "Coca 2";
    habilitarBotao();
}

function escolherBebidaTres (){
    document.getElementById("coca1").style.borderColor = "white";
    document.getElementById("iconCoca1").style.display = "none";
    document.getElementById("coca2").style.borderColor = "white";
    document.getElementById("iconCoca2").style.display = "none";
    document.getElementById("coca3").style.borderColor = "green";
    document.getElementById("iconCoca3").style.display = "flex";
    bebida = 1;
    valorBebida = 150.90;
    tipoBebida = "Coca 3";
    habilitarBotao();
}

/* ESCOLHA DE SOBREMESA */
function escolherSobreUm (){
    document.getElementById("pudim1").style.borderColor = "green";
    document.getElementById("iconPudim1").style.display = "flex";
    document.getElementById("pudim2").style.borderColor = "white";
    document.getElementById("iconPudim2").style.display = "none";
    document.getElementById("pudim3").style.borderColor = "white";
    document.getElementById("iconPudim3").style.display = "none";
    sobremesa = 1;
    valorSobremesa = 3.00;
    tipoSobremesa = "Pudim 1"
    habilitarBotao();
}

function escolherSobreDois (){
    document.getElementById("pudim1").style.borderColor = "white";
    document.getElementById("iconPudim1").style.display = "none";
    document.getElementById("pudim2").style.borderColor = "green";
    document.getElementById("iconPudim2").style.display = "flex";
    document.getElementById("pudim3").style.borderColor = "white";
    document.getElementById("iconPudim3").style.display = "none";
    sobremesa = 1;
    valorSobremesa = 2.50;
    tipoSobremesa = "Pudim 2"
    habilitarBotao();
}

function escolherSobreTres (){
    document.getElementById("pudim1").style.borderColor = "white";
    document.getElementById("iconPudim1").style.display = "none";
    document.getElementById("pudim2").style.borderColor = "white";
    document.getElementById("iconPudim2").style.display = "none";
    document.getElementById("pudim3").style.borderColor = "green";
    document.getElementById("iconPudim3").style.display = "flex";
    sobremesa = 1;
    valorSobremesa = 5.90;
    tipoSobremesa = "Pudim 3"
    habilitarBotao();
}

function wpp(){
    let somaPedido = valorPrato + valorBebida + valorSobremesa;
    let somaAjustada = somaPedido.toFixed(2)
    nome = prompt('Qual seu nome?');
    endereco = prompt('Qual seu endereço?');
    textoMensagem = `Olá, gostaria de fazer o pedido:\n-Prato: ${tipoPrato}\n-Bebida: ${tipoBebida}\n-Sobremesa:  ${tipoSobremesa}\nTotal: R$ ${somaAjustada}\n\nNome: ${nome}\nEndereço: ${endereco}`;
    window.open(`https://wa.me/5511990031866?text=${encodeURIComponent(textoMensagem)}`);
    }