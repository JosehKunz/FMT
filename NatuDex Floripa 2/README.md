
---------------------------------------------------------
#  🍃 **NATUDEX FLORIPA** 🍃 
---------------------------------------------------------
NatuDex é uma aplicação web para o gerenciamento de áreas de preservação da natureza. Permite que os usuários cadastrem, editem e visualizem informações detalhadas, com integração para obtenção de endereços e coordenadas geográficas.

## Funcionalidades

- **Cadastro de Usuários:** Sistema de registro com validação de CPF único.
- **Autenticação:** Login seguro para acesso ao sistema.
- **Cadastro de Locais:** Permite o cadastro de locais de preservação com nome, descrição e localização baseada em CEP.
- **Listagem de Locais:** Visualização de todos os locais cadastrados, com informações detalhadas.
- **Dashboard:** Visão geral dos usuários e locais cadastrados.
- **Integração com OpenStreetMap:** Busca automática de endereço e coordenadas geográficas a partir do CEP.

## Tecnologias

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router:** Navegação entre páginas da aplicação.
- **React Hook Form:** Gerenciamento e validação de formulários.
- **Bootstrap:** Framework CSS para estilização.
- **JSON Server:** Mock server para simulação de uma API RESTful.
- **OpenStreetMap API:** Para obtenção de dados de localização a partir do CEP.


# 🌱 Pacotes/Instalações

## Na primeira vez é necessário instalar as dependencias:
>  **Node.js** (versão 14 ou superior)
>  **npm** (Node Package Manager)



# 🌱 Testando o programa


## 1.Clonando o Repositório
   `git clone https://github.com/JosehKunz/FMT/tree/main/NatuDex%20Floripa%202`

## 2.Configurando
`npm install`

## Para rodar o repositório em ambiente local, utilize os dois códigos abaixo em terminais distintos, mas dentro da pasta do projeto
`npx json-server --watch database.json`
`npm run start:dev`

## Logo após, acesse o doc da API
(http://localhost:5173/)


## Estrutura das pastas
├── public/              # Arquivos estáticos, como imagens e ícones
├── src/                 # Código-fonte da aplicação
│   ├── assets/          # Arquivos de mídia, como SVGs e imagens
│   ├── components/      # Componentes reutilizáveis da aplicação
│   ├── pages/           # Páginas principais da aplicação
│   ├── routes/          # Configuração das rotas da aplicação
│   ├── App.jsx          # Componente principal da aplicação
│   ├── main.jsx         # Arquivo de entrada da aplicação
│   └── styles.css       # Estilos globais da aplicação
└── README.md            # Documentação do projeto
