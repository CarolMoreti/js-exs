const numeroSecreto = 7;

        let palpiteInput = document.getElementById('palpiteInput');
        let resultadoElement = document.getElementById('resultado');
        let verificarBtn = document.getElementById('verificarBtn');
        let novoJogoBtn = document.getElementById('novo-jogo');

        // A função novoJogo agora apenas reinicia a interface, sem mudar o número
        function novoJogo() {
            palpiteInput.value = '';
            resultadoElement.textContent = '';
            resultadoElement.style.color = "#333";
            verificarBtn.style.display = 'inline';
            palpiteInput.disabled = false;
            novoJogoBtn.style.display = 'none';
        }

        // A função de verificação permanece a mesma
        function verificarPalpite() {
            let palpite = Number(palpiteInput.value);

            if (palpite < 1 || palpite > 10) {
                resultadoElement.textContent = "Por favor, digite um número entre 1 e 10.";
                resultadoElement.style.color = "orange";
                palpiteInput.value = '';
                return;
            }

            if (palpite === numeroSecreto) {
                resultadoElement.textContent = "🥳 Parabéns, você acertou!";
                resultadoElement.style.color = "green";
                verificarBtn.style.display = 'none';
                palpiteInput.disabled = true;
                novoJogoBtn.style.display = 'inline';
            } else if (palpite < numeroSecreto) {
                resultadoElement.textContent = "O seu palpite é muito baixo. Tente novamente!";
                resultadoElement.style.color = "red";
                palpiteInput.value = '';
            } else {
                resultadoElement.textContent = "O seu palpite é muito alto. Tente novamente!";
                resultadoElement.style.color = "red";
                palpiteInput.value = '';
            }
        }