
function pesquisar(event) {
  // Previne o envio do formulário e o recarregamento da página
  event.preventDefault();

  // Obtém o valor do campo de pesquisa
  const valorPesquisa = document.getElementById('pesquisa').value.toLowerCase();

  // Obtém a tabela de resultados
  const tabelaResultados = document.getElementById('table');

  // Obtém todas as linhas da tabela de resultados
  const linhasTabela = tabelaResultados.getElementsByTagName('tr');

  // Percorre todas as linhas da tabela de resultados
  for (let i = 0; i < linhasTabela.length; i++) {
    const linha = linhasTabela[i];
    let exibirLinha = false;

    // Obtém todas as células da linha
    const celulasLinha = linha.getElementsByTagName('td');

    // Percorre todas as células da linha
    for (let j = 0; j < celulasLinha.length; j++) {
      const celula = celulasLinha[j];
      const valorCelula = celula.textContent.toLowerCase();

      // Verifica se o valor da célula corresponde à pesquisa
      if (valorCelula.includes(valorPesquisa)) {
        exibirLinha = true;
        break;
      }
    }

    // Exibe ou oculta a linha de acordo com o resultado da pesquisa
    linha.style.display = exibirLinha ? '' : 'none';
  }
}