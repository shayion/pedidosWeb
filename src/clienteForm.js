// Captura do formulário de cadastro de clientes
document.getElementById('form-cliente').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    // Obter valores dos campos
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
  
    // Dados do cliente
    const cliente = {
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      endereco: endereco
    };
  
    try {
      // Envio da requisição para a API
      const response = await fetch('http://localhost:8080/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Cliente criado:', result);
        alert('Cliente criado com sucesso!');
        // Redirecionar ou limpar o formulário
      } else {
        throw new Error('Erro ao criar cliente');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao salvar cliente.');
    }
  });
  