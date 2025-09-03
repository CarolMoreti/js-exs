function repetirFrase() {
            let repElement = document.getElementById('rep');
            let fraseElement = document.getElementById('frase');
            let resultadoElement = document.getElementById('resultado');

            let numRepeticoes = Number(repElement.value);
            let textoFrase = fraseElement.value;
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
            
            resultadoElement.textContent = resultadoFinal;
            
            // Opcional: Limpar os campos após a execução
            fraseElement.value = "";
            repElement.value = "";
        }