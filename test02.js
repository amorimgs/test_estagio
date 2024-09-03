// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const pertenceFibonacci = (n) => {
  let a = 0,
    b = 1,
    c = 0;
  while (c < n) {
    c = a + b;
    a = b;
    b = c;
  }
  return c === n? `O número ${n} pertence à sequência de Fibonacci.` : `O número ${n} não pertence à sequência de Fibonacci.`;
};
console.log(pertenceFibonacci(8));
console.log(pertenceFibonacci(9));