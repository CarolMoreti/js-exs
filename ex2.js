function verificarMes() { //funcao do programa
            let mesInput = document.getElementById('mes'); //pega o que o usuário escreveu no input
            let mes = Number(mesInput.value); //transforma o ultimo em num
            let resultadoElement = document.getElementById('resultado');//onde o resultado vai sair
            let nomeDoMes = ""; 

            switch (mes) { //o switch verifica qual o número que o usuário colocou
                case 1:
                    nomeDoMes = "Janeiro";
                    break;
                case 2:
                    nomeDoMes = "Fevereiro";
                    break;
                case 3:
                    nomeDoMes = "Março";
                    break;
                case 4:
                    nomeDoMes = "Abril";
                    break;
                case 5:
                    nomeDoMes = "Maio";
                    break;
                case 6:
                    nomeDoMes = "Junho";
                    break;
                case 7:
                    nomeDoMes = "Julho";
                    break;
                case 8:
                    nomeDoMes = "Agosto";
                    break;
                case 9:
                    nomeDoMes = "Setembro";
                    break;
                case 10:
                    nomeDoMes = "Outubro";
                    break;
                case 11:
                    nomeDoMes = "Novembro";
                    break;
                case 12:
                    nomeDoMes = "Dezembro";
                    break;
                default:
                    nomeDoMes = "Número inválido. Por favor, digite um número de 1 a 12.";
            }
            
            resultadoElement.textContent = nomeDoMes; //da o resultado do switch
            mesInput.value = ""; // Limpa o campo de entrada
        }