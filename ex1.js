function verificarNumero() {
            let numElement = document.getElementById('num');
            let resultadoElement = document.getElementById('resultado');
            let num = Number(numElement.value);
            let mensagem = "";

            if (num < 100) {
                mensagem = "O número " + num + " é antes do 100.";
            } else if (num < 200) {
                mensagem = "O número " + num + " é antes do 200, depois do 100.";
            } else {
                mensagem = "O número " + num + " é maior ou igual a 200.";
            }
            
            resultadoElement.textContent = mensagem;
            numElement.value = "";
        }