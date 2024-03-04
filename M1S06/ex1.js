const prompt = require("prompt-sync")({ sigint: true });

function verificacaoPar(numero) {
  return new Promise((resolve, reject) => {

    if (isNaN(numero)) {
      reject('Erro: o valor informado não é numérico');
    } else if (numero % 2 === 0) {
      resolve("O número é par");
    } else {
      reject("O número é impar");
    }
  });
}

const numeroConsulta = prompt("Digite um número para consulta: ");
const numeroConvertido = Number(numeroConsulta);

verificacaoPar(numeroConvertido)
  .then(mensagem => console.log(mensagem))
  .catch(erro => console.error(erro));
