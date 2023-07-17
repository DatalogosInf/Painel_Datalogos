const formulario = document.getElementById('meuFormulario');

    formulario.addEventListener('submit', function (event) {
      event.preventDefault();

      const dados = {
        nome: formulario.nome.value,
        idade: formulario.idade.value,
        email: formulario.email.value
      };

      fetch('http://localhost:8000/inserir', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Dados inseridos com sucesso:', data);
        // Faça algo com a resposta da API REST, se necessário
      })
      .catch(error => {
        console.error('Erro ao inserir dados:', error);
      });
    });