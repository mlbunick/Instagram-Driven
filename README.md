# Instagram Clone - React

Este projeto é um clone do Instagram desenvolvido em **React**, baseado em um layout fornecido previamente. O objetivo é praticar os conceitos aprendidos sobre componentização, manipulação de estado e renderização dinâmica com React.

## 🎨 Layout

O projeto foi construído a partir de um layout pronto, utilizando HTML, CSS e imagens fornecidas. A versão final busca replicar a aparência e funcionalidades principais do feed do Instagram na versão desktop.

## 🛠️ Tecnologias Utilizadas

- React
- JavaScript (ES6+)
- HTML e CSS

## ✅ Funcionalidades Implementadas

### **Estrutura do Projeto**
- O projeto foi criado utilizando `create-react-app`.
- O código está organizado em componentes reutilizáveis para facilitar a manutenção.
- Os arquivos CSS e imagens estão armazenados na pasta `public`, conforme exigido.

### **Componentização**
- O projeto foi dividido em vários componentes menores:
  - **Header** (cabeçalho da página)
  - **Stories** (lista de stories)
  - **Posts** (lista de posts dinâmicos)
  - **Sugestões de seguidores**
  - **Rodapé**

### **Renderização Dinâmica**
- **Lista de Stories** gerada a partir de um array de objetos e renderizada com `.map()`.
- **Lista de Posts** também criada dinamicamente.
- **Sugestões de seguidores** renderizadas de forma dinâmica.

### **Estados e Interatividade**
- **Alteração do nome de usuário** ao clicar no ícone de edição.
- **Alteração da imagem de perfil** ao clicar nela.
- **Curtir e descurtir posts**, com mudança no ícone e contagem de curtidas.
- **Salvar e remover posts dos favoritos**.
- **Curtir posts clicando na imagem** (mas sem descurtir ao clicar novamente, igual ao Instagram real).

## 🚀 Como Rodar o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/projeto-instagram-react.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd projeto-instagram-react
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm start
   ```
5. Acesse `http://localhost:3000` no navegador para visualizar o projeto.

## 📂 Estrutura de Pastas
```
projeto-instagram-react/
├── public/
│   ├── assets/ (imagens do projeto)
│   ├── index.html
│   └── styles.css
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Stories.js
│   │   ├── Posts.js
│   │   ├── Sugestoes.js
│   │   ├── Footer.js
│   ├── App.js
│   ├── index.js
│   └── styles/
├── package.json
└── README.md
```

## 📌 Requisitos Seguidos
✅ Criado com `create-react-app` e conectado ao GitHub.
✅ Layout replicado conforme o modelo fornecido.
✅ Componentes organizados corretamente.
✅ Dados dinâmicos manipulados corretamente.
✅ Funcionalidades de curtida, salvamento e edição implementadas.

## 📜 Licença
Este projeto foi desenvolvido para fins educacionais e não possui fins comerciais.


