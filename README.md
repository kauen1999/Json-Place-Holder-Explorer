# 🚀 Projeto de Pesquisa com Context API

## 📌 Sobre o Projeto
Este projeto foi desenvolvido com o objetivo de aprimorar os conhecimentos em **React**, com foco no uso da **Context API** para gerenciar estados globais. Além disso, foi implementado um mecanismo de **barra de pesquisa** para filtrar e exibir dinamicamente os dados da aplicação.

Para alimentar a aplicação com dados reais, foi utilizada a API **JSONPlaceholder**, que fornece informações fictícias sobre usuários, posts e álbuns.

## 🛠️ Tecnologias Utilizadas
- **React com Vite** → Ferramenta de build rápida e eficiente para desenvolvimento moderno.
- **Context API** → Gerenciamento de estado global para compartilhamento de dados entre componentes.
- **Tailwind CSS** → Estilização flexível e responsiva para criação da interface.
- **React Router** → Gerenciamento de rotas para navegação entre páginas.
- **Visual Studio Code** → Ambiente de desenvolvimento utilizado.
- **Git e GitHub** → Controle de versão e colaboração.
- **JSONPlaceholder** → API gratuita para obter dados fictícios.

## 📂 Estrutura do Projeto
```
📦 meu-projeto
├── 📂 src
│   ├── 📂 components
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   ├── 📂 context
│   │   ├── AlbumProvider.jsx
│   │   ├── GlobalContext.jsx
│   │   ├── PostProvider.jsx
│   │   ├── UserProvider.jsx
│   ├── 📂 pages
│   │   ├── Home.jsx
│   │   ├── Profile.jsx
│   │   ├── UsersProfile.jsx
│   │   ├── Album.jsx
│   │   ├── AlbumDetail.jsx
│   │   ├── Post.jsx
│   │   ├── PostDetail.jsx
│   ├── App.jsx
│   ├── main.jsx
├── 📄 package.json
├── 📄 README.md
```

## ⚙️ Instalação e Execução
1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. **Acesse a pasta do projeto:**
   ```sh
   cd meu-projeto
   ```
3. **Instale as dependências:**
   ```sh
   npm install
   ```
4. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```

## 🔍 Funcionalidades
- **Consumo da API JSONPlaceholder** para obter usuários, posts e álbuns.
- **Gerenciamento global de estado com Context API** para evitar prop drilling.
- **Barra de pesquisa dinâmica** utilizando os métodos `.filter()` e `.find()`.
- **Sistema de navegação entre páginas** utilizando React Router.

## 🛑 Desafios Enfrentados
1. **Gerenciamento de estados globais:**
   - Aprender a estruturar o **Context API** e entender o fluxo de dados entre os componentes.
2. **Implementação da barra de pesquisa:**
   - Utilização dos métodos `.find()` e `.filter()` para realizar buscas eficientes.
3. **Filtragem correta dos dados:**
   - Separação dos dados de usuários, posts e álbuns dentro do contexto global.

## 🏆 Conclusão
Este projeto foi uma excelente oportunidade para aprofundar os conhecimentos em **React**, **Context API** e manipulação de dados dinâmicos. Além disso, a implementação da **barra de pesquisa** trouxe uma melhor compreensão sobre os métodos de filtragem em JavaScript.

---
💡 **Dúvidas ou sugestões?** Fique à vontade para contribuir ou abrir uma issue!

