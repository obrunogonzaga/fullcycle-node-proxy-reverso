# Projeto Node.js com Nginx e MySQL

Este projeto demonstra como configurar um ambiente com um aplicativo Node.js, usando Nginx como proxy reverso e um banco de dados MySQL.

## Descrição

O aplicativo Node.js é uma simples aplicação web que se conecta a um banco de dados MySQL. O Nginx é utilizado como proxy reverso para direcionar as requisições para o aplicativo Node.js.

## Pré-requisitos

Antes de iniciar, você precisará ter instalado em sua máquina as seguintes ferramentas:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

Além disso, é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/).

## Configuração

Para executar este projeto, siga estas etapas:

1. Clone este repositório:
   ```bash
   git clone [URL do repositório]
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd [nome do diretório]
   ```
3. Construa e inicie os containers usando o Docker Compose:
   ```bash
   docker-compose up --build
   ```

## Estrutura do Projeto
- node/: Diretório contendo os arquivos do aplicativo Node.js.
- nginx/: Diretório com a configuração do Nginx.
- mysql/: Diretório para os dados do MySQL.
- docker-compose.yml: Arquivo para configurar os serviços do Docker Compose.
- Dockerfile: Arquivo de definição para criar a imagem do Docker.

## Como Usar
Após iniciar os containers, a aplicação estará disponível em `http://localhost:8080`. O Nginx redirecionará as requisições para o aplicativo Node.js, que interage com o banco de dados MySQL.

## Contribuições
Contribuições são sempre bem-vindas! Para contribuir, por favor, crie um fork do repositório, faça suas alterações e envie um pull request.

## Licença
Este projeto está sob licença. Veja o arquivo `LICENSE` para mais detalhes.
