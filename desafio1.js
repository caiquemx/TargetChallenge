/*1) Observe o trecho de código abaixo:


int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);


Ao final do processamento, qual será o valor da variável SOMA?*/

// AO FINAL O VALOR SERÁ 78

function SOMA() {
  const INDICE = 13;
  let SOMA = 0;
  let K = 0;

  for (K; K < INDICE; K++) {
    SOMA = SOMA + K;
  }

  console.log(SOMA);
}

SOMA();
