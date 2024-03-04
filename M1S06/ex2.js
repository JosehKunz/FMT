function getUserInfo() {
    return new Promise(resolve => {
      setTimeout(() => {
        // Simulando a resposta do servidor com as informações
        resolve({
          nome: "José Oswaldo Kunz Neto",
          idade: 34,
          email: "josekunz@gmail.com"
        });
      }, 2000); // Simulando o atraso de 2 segundos
    });
  }
  
  async function exibirUserInfo() {
    getUserInfo().then(userInfo => {
      console.log("Informações do Usuário:");
      console.log(`Nome: ${userInfo.nome}`);
      console.log(`Idade: ${userInfo.idade}`);
      console.log(`Email: ${userInfo.email}`);
    }).catch(error => {
      console.error("Erro ao obter informações do usuário:", error);
    });
  }
  
  exibirUserInfo();
  