function calculadora() {
    let telaResultado = document.querySelector('.resultado');
    let numeros = "0"; 
    let operacao = ""; 
    let resultado = null; 
    let operacaoPendente = false; 
  

    function atualizarTela(valor) {
      telaResultado.innerText = valor;
    }
  
    function pegarNumero(event) {
      let numero = event.currentTarget.getAttribute("data-value");
  

      if (numeros === "0" || operacaoPendente) {
        numeros = numero;
        operacaoPendente = false;
      } else {
        numeros += numero; 
      }
  
      atualizarTela(numeros);
    }
  
    function pegarOperacao(event) {
      let novaOperacao = event.currentTarget.getAttribute("data-value");

      if (novaOperacao === "delete") {
        limparTela();
        return;
      }
  

      if (novaOperacao === "=") {
        calcular(); 
        operacao = ""; 
        return;
      }
  

      if (novaOperacao === "x²") {
        numeros = (parseFloat(numeros) ** 2).toString();
        atualizarTela(numeros);
        operacaoPendente = true; 
        return;
      } else if (novaOperacao === "√") {
        numeros = Math.sqrt(parseFloat(numeros)).toString();
        atualizarTela(numeros);
        operacaoPendente = true; 
        return;
      }
  

      if (resultado === null) {
        resultado = parseFloat(numeros);
      } else if (!operacaoPendente) {
        calcular(); 
      }
      atualizarTela(novaOperacao)

      operacao = novaOperacao;
      operacaoPendente = true;
    }
  

    function calcular() {
      let numeroAtual = parseFloat(numeros);
  

      switch (operacao) {
        case "+":
          resultado += numeroAtual;
          break;
        case "-":
          resultado -= numeroAtual;
          break;
        case "*":
          resultado *= numeroAtual;
          break;
        case "/":
          resultado /= numeroAtual;
          break;
        case "%":
          resultado %= numeroAtual;
          break;
        default:
          break; 
      }
  
      numeros = resultado.toString();
      atualizarTela(numeros);
    }
  
    function limparTela() {
      numeros = "0";
      operacao = "";
      resultado = null;
      operacaoPendente = false;
      atualizarTela(numeros);
    }
  
    document.querySelectorAll('.botao-numero').forEach((botao) => {
      botao.addEventListener("click", pegarNumero);
    });
  
    document.querySelectorAll('.botao-operacao').forEach((botao) => {
      botao.addEventListener("click", pegarOperacao);
    });
  }
  

  calculadora();