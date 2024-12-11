const apiUrl = 'http://localhost:8080';

// Função para fazer requisição GET
async function getData(endpoint) {
  try {
    const response = await fetch(`${apiUrl}${endpoint}`, {
      headers: {
        'Cache-Control': 'no-cache', // Impede o cache da requisição
      }
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar dados');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}


// Função para fazer requisição POST
async function postData(endpoint, data) {
  try {
    const response = await fetch(`${apiUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Erro ao criar item');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

// Função para fazer requisição PUT
async function putData(endpoint, data) {
  try {
    const response = await fetch(`${apiUrl}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Erro ao atualizar item');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

// Função para fazer requisição DELETE
async function deleteData(endpoint) {
  try {
    const response = await fetch(`${apiUrl}${endpoint}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Erro ao excluir item');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

// Funções específicas para interagir com a API de Clientes e Pedidos

// Clientes
async function getClientes() {
  return await getData('/clientes');
}

async function createCliente(cliente) {
  return await postData('/clientes', cliente);
}

async function updateCliente(id, cliente) {
  return await putData(`/clientes/${id}`, cliente);
}

async function deleteCliente(id) {
  return await deleteData(`/clientes/${id}`);
}

// Pedidos
async function getPedidos() {
  return await getData('/pedidos');
}

async function createPedido(pedido) {
  return await postData('/pedidos', pedido);
}

async function updatePedido(id, pedido) {
  return await putData(`/pedidos/${id}`, pedido);
}

async function deletePedido(id) {
  return await deleteData(`/pedidos/${id}`);
}

export {
  getClientes,
  createCliente,
  updateCliente,
  deleteCliente,
  getPedidos,
  createPedido,
  updatePedido,
  deletePedido
};
