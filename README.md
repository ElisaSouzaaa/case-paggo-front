# Projeto de Gestão de Clientes com Upload de Arquivos e Interação com LLM  

Este projeto é uma aplicação web que permite a criação e gestão de clientes, possibilitando o upload de arquivos e a interação com um Modelo de Linguagem Grande (LLM). Foi desenvolvido utilizando as seguintes tecnologias:  

- **Nest.js**: Framework para construir aplicativos Node.js escaláveis e eficientes no lado do servidor.  
- **Next.js**: Framework React para criar aplicações web e sites estáticos com suporte a renderização do lado do servidor.  
- **Prisma**: ORM (Mapeador Objeto-Relacional) para TypeScript e Node.js que facilita a interação com o banco de dados.  
- **SQLite**: Banco de dados leve para desenvolvimento e testes.  

## Funcionalidades  

- Registro e autenticação de clientes.  
- Upload seguro de arquivos.  
- Interação com um LLM para gerar respostas baseadas em arquivos enviados.  
- Interface intuitiva com o cliente por meio de uma aplicação React.  

## Requisitos  

- Node.js (>= 14.x)  
- npm ou yarn  
- SQLite instalado ou configuração para usar SQLite embutido.  

## Instalação  

1. Clone o repositório:  
   ```bash  
   git clone https://github.com/seu-usuario/nome-do-repositorio.git  
   cd nome-do-repositorio

2. Instale as dependências:
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

3. Configure o banco de dados:
   - Crie os modelos necessários em `prisma/schema.prisma`.
   - Execute as migrações:
     ```bash
     npx prisma migrate dev
     ```

4. Inicie o servidor:
   ```bash
   npm run start:dev
   ```

5. Inicie o Next.js:
   ```bash
   cd frontend
   npm run dev
   ```

## Uso

Após a instalação, acesse a aplicação no seu navegador em `http://localhost:3000`. Você poderá se registrar como cliente e começar a fazer uploads de arquivos e interagir com o LLM.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, enviar pull requests ou discutir melhorias.