// Função pra iniciar o programa
function init(){

    //seleciona a body do html
    var main = document.querySelector('main');

    //Cria um elemento 'p' (<p></p>)
    var paragraph = document.createElement('p');

    //adiciona o elementro criado dentro do body
    main.append(paragraph);
}

// Variavel Global
var estado = true


// Função de 'abrir'
function abrir(){

    // Seleciona os id's e adiciona dentro de variaveis
    var button1 = document.querySelector('#btn1');
    var button2 = document.querySelector('#btn2');

    // Seleciona o <p></p> já existente criado na primeira função
    paragraph = document.querySelector('p');

    // Adiciona um texto dentro desse <p>
    paragraph.innerText = "Estamos Abertos!";

    // Adiciona na tag uma class + nome
    button1.className = "buttonGreen";
    button2.className = "none";

    // Função para abrir MODAL
    // Seleciona e muda o display do modal, faz ele aparecer na tela
    var modal = document.querySelector('.form');
    modal.style.display = 'flex';
    estado = false;
}

function fechar(){

    // Seleciona os id's e adiciona dentro de variaveis
    var button1 = document.querySelector('#btn1');
    var button2 = document.querySelector('#btn2');

    // Seleciona o <p></p> já existente criado na primeira função
    paragraph = document.querySelector('p');

    // Adiciona um texto dentro desse <p>
    paragraph.innerText = "Estamos Fechados!";

    // Adiciona na tag uma class + nome
    button2.className = "buttonRed";
    button1.className = "none";


    // Função para fechar MODAL
    // Seleciona e muda o display do modal, faz ele aparecer na tela
    var modal = document.querySelector('.form')
    modal.style.display = 'none',
    estado = true;
}





// Função do formulário/botão de validação

//Atribui e seleciona class para as variaveis
const btn = document.querySelector(".btn-form");
const form = document.querySelector(".form");
const inpt_form = document.querySelector(".input-form")
var position;

// function para ouvir o que está acontecendo 
// e quando passar o mouse sobre o elemento selecionado
// a função acontece(é acionada) 
btn.addEventListener("mouseover", function(){

    // 'se' o formulário tiver campos não validos
    if (!form.checkValidity()){
        // 'se' a variavel for maior ou igual a zero, adiciona 100 negativo
        // se não, adiciona 100 positivo
        position >= 0 ? (position = -100) : (position = 100);

        //adiciona elementos CSS para o button
        btn.style.transform = `translateX(${position}px)`;
        btn.style.transition = "all 0.2s ease";
    }else {
        return;
    }
})

function send(){
    var container = document.querySelector(".container");
    var loader = document.querySelector(".loader");
    var reload = setInterval(function(){
        container.style.display = 'none'
        loader.style.display = 'block'
    }, 100);
    
    
    setTimeout(function(){
        clearInterval(reload)
        inpt_form.value = ""
        container.style.display = 'block'
        loader.style.display = 'none'
    },6000);
}

// var reload = setInterval(send(), 3000)

function stopReload(){
    clearInterval(reload)
}



// const loader = document.querySelector('body');
// window.addEventListener('load', function(){
//     loader.style.display = 'none'
// })


// function entrar(){
//     var button = document.querySelector('#enviar')
//     button.style.backgroundColor = 'red'
// }
// function sair(){
//     var button = document.querySelector('#enviar')
//     button.style.backgroundColor = 'green'
// }
