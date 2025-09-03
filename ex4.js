const numeroInput = document.getElementById('numeroInput');//o numero que o usuário quer
const iniciarContagemBtn = document.getElementById('iniciarContagemBtn');//botao de iniciar
const resultadoDiv = document.getElementById('resultado');//resultado a aparecer

// Adiciona o evento de clique ao botão qnd for clicado
iniciarContagemBtn.addEventListener('click', iniciarContagemComWhile);

function iniciarContagemComWhile() {
    let limite = parseInt(numeroInput.value);//coloca o número que o usuário colocou como limite
    let contador = 1;//número começa no um
    let resultadoTexto = "";
    
    while (contador <= limite) {
        resultadoTexto += "Número: " + contador + "<br>";
        contador++;
    }
    resultadoDiv.innerHTML = resultadoTexto;//resultado final
    }