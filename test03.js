// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamento = require('./dados.json');

const vetorFaturamentoDiario = faturamento.map(d => d.valor);

const menorFaturamento = (vetorFat) => {
  let menor = vetorFat[0];
  for (let i = 1; i < vetorFat.length; i++) {
    if (vetorFat[i] < menor) {
      menor = vetorFat[i];
    }
  }
  return menor.toFixed(2);
}

const menorFaturamentoDiaUtil = (vetorFat) => {
  const newFat = vetorFat.filter(fat => fat > 0);
  let menor = newFat[0];
  for (let i = 1; i < newFat.length; i++) {
    if (newFat[i] < menor) {
      menor = newFat[i];
    }
  }
  return menor.toFixed(2);
}

const maiorFaturamento = (vetorFat) => {
  let maior = vetorFat[0];
  for (let i = 1; i < vetorFat.length; i++) {
    if (vetorFat[i] > maior) {
      maior = vetorFat[i];
    }
  }
  return maior.toFixed(2);
} 

const faturamentoMedio = (vetorFat) => {
  const newVetorFat = vetorFat.filter(fat => fat > 0);
  return (newVetorFat.reduce((acc, cur) => acc + cur, 0) / newVetorFat.length).toFixed(2);
}

console.log('Menor faturamento mensal: R$: ', menorFaturamento(vetorFaturamentoDiario));

console.log('Menor faturamento mensal em dia útil: R$:',menorFaturamentoDiaUtil(vetorFaturamentoDiario));

console.log('Maior faturamento mensal: R$:',maiorFaturamento(vetorFaturamentoDiario));

console.log('Média do faturamento mensal: R$:',faturamentoMedio(vetorFaturamentoDiario));