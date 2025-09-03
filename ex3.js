function repetirFrase() {
            let repElement = document.getElementById('rep');//quantidade de vezes que o usuário quer repitir
            let fraseElement = document.getElementById('frase');//a frase do usuário
            let resultadoElement = document.getElementById('resultado');//a mensagem a ser exibida

            let numRepeticoes = Number(repElement.value);//transforma em número
            let textoFrase = fraseElement.value;//transforma em "valor"
            let resultadoFinal = "";

            if (textoFrase === "") {
                resultadoFinal = "Por favor, digite uma frase.";
            } else if (numRepeticoes <= 0) {
                resultadoFinal = "O número de repetições deve ser maior que zero.";
            } else {
                for (let i = 0; i < numRepeticoes; i++) {
                    resultadoFinal += textoFrase + "\n"; // Adiciona a frase e uma quebra de linha
                }
            }
            
            resultadoElement.textContent = resultadoFinal;//manda a mensagem final para o html, no número de vezes dito
            
            // Opcional: Limpar os campos após a execução
            fraseElement.value = "";
            repElement.value = "";
        }