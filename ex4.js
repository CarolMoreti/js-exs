let numeroSecreto = 7;
let palpite;

do {
  // O alert será exibido no início de cada loop,
  // ou seja, antes de cada tentativa de adivinhar.
  alert("Por favor, digite seu palpite.");
  
  palpite = Number(prompt("Adivinhe o número (entre 1 e 10):"));

} while (palpite !== numeroSecreto);

// Este alert é exibido apenas quando o palpite estiver correto
alert("Parabéns, você acertou! O número era " + numeroSecreto + ".");