import { getClientes, deleteCliente } from './api.js';

// Função para buscar e exibir os clientes
async function fetchClients() {
  const searchValue = document.getElementById('searchClient').value.toLowerCase();
  const clientList = document.getElementById('clientList');
  clientList.innerHTML = ''; // Limpa a lista antes de carregar os dados

  try {
    const clientes = await getClientes();

    // Filtrar clientes pelo nome ou CPF, se houver valor de busca
    const filteredClients = searchValue
      ? clientes.filter(
          cliente =>
            cliente.nome.toLowerCase().includes(searchValue) || cliente.cpf.includes(searchValue)
        )
      : clientes;

    // Exibir clientes
    filteredClients.forEach(cliente => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <strong>Nome:</strong> ${cliente.nome} <br>
        <strong>CPF:</strong> ${cliente.cpf} <br>
        <strong>Telefone:</strong> ${cliente.telefone || 'N/A'} <br>
        <strong>Endereço:</strong> ${cliente.endereco || 'N/A'} <br>
        <button onclick="editClient(${cliente.id})">Editar</button>
        <button onclick="deleteClient(${cliente.id})">Excluir</button>
      `;
      clientList.appendChild(listItem);
    });

    if (filteredClients.length === 0) {
      clientList.innerHTML = '<li>Nenhum cliente encontrado.</li>';
    }
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    clientList.innerHTML = '<li>Erro ao carregar os clientes.</li>';
  }
}

// Função para excluir cliente
async function deleteClient(id) {
  if (confirm('Tem certeza que deseja excluir este cliente?')) {
    try {
      await deleteCliente(id);
      alert('Cliente excluído com sucesso!');
      fetchClients(); // Atualiza a lista após exclusão
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
      alert('Erro ao excluir cliente. Tente novamente.');
    }
  }
}

// Função para redirecionar para a página de edição com o ID do cliente
function editClient(id) {
  window.location.href = `editarCliente.html?id=${id}`;
}

// Carregar os clientes ao abrir a página
fetchClients();
