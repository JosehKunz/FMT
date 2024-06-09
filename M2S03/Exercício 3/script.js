// script.js

//Limpando o que tiver no LocalStorage
localStorage.clear();

// Seleciona o botão e elementos do DOM
const interactBtn = document.getElementById('interact-btn');
const alertBox = document.getElementById('alert-box');
const headerTitle = document.getElementById('header-title');

// Função para atualizar o título do cabeçalho
function updateHeaderWithUserName(userName) {
    headerTitle.textContent = `👋 Olá ${userName}, eu sou José Kunz`;
}

// Função para lidar com a interação
function handleInteraction() {
    // Solicita o nome do usuário
    const userName = prompt("Por favor, insira seu nome:");

    // Verifica se o nome foi inserido
    if (!userName) {
        // Exibe uma mensagem de erro se o nome estiver vazio
        alertBox.textContent = "Erro: Nome não inserido. Por favor, tente novamente.";
        alertBox.classList.remove('hidden');
        return; // Sai da função se o nome não foi inserido
    }

    // Solicita confirmação para continuar
    const userWantsToContinue = confirm(`Olá ${userName}, você quer continuar?`);

    // Baseado na resposta do usuário
    if (userWantsToContinue) {
        // Armazena o nome no Local Storage
        localStorage.setItem('userName', userName);
        // Atualiza o título do cabeçalho com o nome do usuário
        updateHeaderWithUserName(userName);
        // Exibe uma mensagem de continuação
        alert("Ótimo! Continuando a interação.");
    } else {
        // Exibe uma mensagem de encerramento
        alert("Obrigado pela visita! Até a próxima.");
        // Oculta qualquer mensagem de erro anterior
        alertBox.classList.add('hidden');
    }
}

// Função para verificar o Local Storage ao carregar a página
function checkLocalStorage() {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
        updateHeaderWithUserName(storedUserName);
    }
}

// Adiciona um evento de clique ao botão para iniciar a interação
interactBtn.addEventListener('click', handleInteraction);

// Verifica o Local Storage ao carregar a página
document.addEventListener('DOMContentLoaded', checkLocalStorage);
