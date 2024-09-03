// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamento = require('./faturamento.json');

const vetorFaturamentoDiario = faturamento.faturamento_diario.map(d => d.faturamento);

const menorFaturamento = (vetorFat) => {
  let menor = vetorFat[0];
  for (let i = 1; i < vetorFat.length; i++) {
    if (vetorFat[i] < menor) {
      menor = vetorFat[i];
    }
  }
  return menor;
}

const menorFaturamentoDiaUtil = (vetorFat) => {
  const newFat = vetorFat.filter(fat => fat > 0);
  let menor = newFat[0];
  for (let i = 1; i < newFat.length; i++) {
    if (newFat[i] < menor) {
      menor = newFat[i];
    }
  }
  return menor;
}

const maiorFaturamento = (vetorFat) => {
  let maior = vetorFat[0];
  for (let i = 1; i < vetorFat.length; i++) {
    if (vetorFat[i] > maior) {
      maior = vetorFat[i];
    }
  }
  return maior;
} 

const faturamentoMedio = (vetorFat) => {
  const newVetorFat = vetorFat.filter(fat => fat > 0);
  return newVetorFat.reduce((acc, cur) => acc + cur, 0) / newVetorFat.length;
}

console.log('Menor faturamento mensal: ', menorFaturamento(vetorFaturamentoDiario));

console.log('Menor faturamento mensal em dia útil: ',menorFaturamentoDiaUtil(vetorFaturamentoDiario));

console.log('Maior faturamento mensal: ',maiorFaturamento(vetorFaturamentoDiario));

console.log('Média do faturamento mensal: ',faturamentoMedio(vetorFaturamentoDiario));