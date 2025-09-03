function verificarNumero() { //função para o programa
            let numElement = document.getElementById('num'); //pega o número que o usuário digitou no html
            let resultadoElement = document.getElementById('resultado'); //onde a mensagem final aparecerá no fim do programa
            let num = Number(numElement.value); //transforma o que o usuário disse em valor number
            let mensagem = ""; //variavel da mensagem final
            
            //o if separa e diz onde o número que o usuário digitou se encontra
            if (num < 100) {
                mensagem = "O número " + num + " é antes do 100.";
            } else if (num < 200) {
                mensagem = "O número " + num + " é antes do 200, depois do 100.";
            } else {
                mensagem = "O número " + num + " é maior ou igual a 200.";
            }
            
            resultadoElement.textContent = mensagem; //coloca no html o valor da mensagem
            numElement.value = ""; //reinicia o campo de por numeros
        }