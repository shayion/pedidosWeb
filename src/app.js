// Carregar lista de clientes
async function loadClients() {
    const clients = await fetchClients();
    const clientList = document.getElementById("clientList");
    clientList.innerHTML = clients.map(client => `<li>${client.name} - ${client.cpf}</li>`).join('');
  }
  
  // Carregar
  