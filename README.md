# agostinho-lopes-back

Este projeto foi inicializado com [Yarn](https://github.com/yarnpkg/yarn).
Ele foi desenvolvido em [Typescript](https://typescriptlang.org).

# Dependências

### `yarn`

Instala todas as dependências necessárias para a aplicação rodar. Rodar esse comando antes do `yarn dev`

### `cors`

Usado para permitir ou bloquear requisiçoes de servidores terceiros.

### `express`

Usado para criar o servidor http e fazer o tratamento das requisições.

### `knex`

Usado para fazer as requisições ao banco de dados, uma ferramenta que além de permitir a abstração de comandos SQL, trás consigo aplicadas vários critérios de segurança mantendo assim a aplicação mais performática e segura.

### `mysql`, `mysql2`

Dependências do ```knex```, são ferramentas que interagem  diretamente com o driver do mysql.

## Dependencias de desenvolvimento:

### typescript

Usado para permitir a utilização da superset e ter um código tipado, havendo assim...

### `cross-env`

Ferramenta útil para exceução de scripts passando para esses scripts variáveis de ambiente temporárias, semelhando ao que ocorre de forma nativa em sistemas unix.

### `dotenv`

Ferramenta semelhante a anterior (cross-env), porém ela serve para armazenar uma vez as variáveis de ambiente para serem utilizadas dentro da aplicação.

### `jest`

Usado para testar a aplicação.
Para especificamnte a realização de teste unitários na aplicação.

### `supertest`

Usado para realizar testes de integração na aplicação express.

### `ts-jest`

Preset do JEST para integração com o typescript.

### `ts-node-dev`

Pacote para habilitar o hot reload do servidor para cada alteração feita no código.

### `tsconfig-paths`

Pacote para habilitar os atalhos de caminhos (path aliases).
Usado para mapear os caminhos mais comuns da aplicação reduzindo a verbozidade no momento da importação dos arquivos.


### `babel (@babel/core)`

  Biblioteca utilizada para gerar a versão final da aplicação, o código javascript que seria enviado para o servidor de produção.

  Abaixo segue uma lista de pacotes do babel que foram utilizados:

  - @babel/core (O pacote principal do babel, que contém as suas pricipais funcionalidades)
  - @babel/cli (Para executar o babel através da linha de comando)
  - @babel/node (integração do babel com o ambiente do node rodando no backend)
  - @babel/preset-env (Preset do babel para integração de diferentes ambientes)
  - @babel/preset-typescript (Preset para integração com o typescript)
  - babel-plugin-import (Plugin do babel para ...)
  - babel-plugin-module-resolver (Plguin para dar suporte aos module path aliases, para que no momento em que se estiver rodando a build da aplicação esses paths como '@models/*' sejam reescritos para um que vá ser entendido pelo node sem ferramentas terceiras)

### Pacotes de tipagem

- @types/cors
- @types/debug
- @types/express
- @types/jest
- @types/knex
- @types/node
- @types/supertest

Necessários para se trabalhar com modulos que foram desenvolvidos em Jasascript ou Typescript.


## Setup do banco de dados

O banco de dados utilizado originalmente é o [mysql](https://mysql.com), e para manipulação das requisições com o banco de dados foi utilizado o Query Builder [Knex](https://github.com/knex/knex).

Para começar deverá criar os banco de dados:
 - ```agostinho-lopes-back_development``` para usar em ambiente de desenvolvimento
 - ```agostinho-lopes-back_test``` para usar em ambiente de teste

 Ou podera mudar o valor da variável de ambiente ```DB_NAME``` nos arquivos .env e .env.test para algum outro valor.

Logo de seguida executar as migrações do banco de dados, através da linha de comando executar:

```bash
yarn knex migrate:up
```

ou se não utilizar o yarn:

```bash
npx knex migrate:up
```

Tendo criado o banco de dados e executado as migrações, deverá ter no banco de dados uma tabela chamada 'musics' com a segunte estrutura:

 - name: string
 - year: integer
 - description: text
 - created_at: datetime
 - updated_at: datetime

A partir daqui, está tudo pronto... E poderá proseguir.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `yarn dev`

Executa o aplicativo no modo de desenvolvimento. \
Abra [http://localhost:3333](http://localhost:3333) para visualizá-lo no navegador.

Poderá usar  o mesmo endpoint para fazer requisições via qualquer outro software que lhe permita fazer requisições HTTP.

Algumas opções para tal:

- [Insomnia](https://insomnia.rest/download) (O que eu usei, [Importar o arquivo 'client-request.json' para testar a API no Insomnia])
- [Posman](https://www.postman.com/)

### `yarn test`

Roda os testes da applicação.


Para criar um novo registro no banco de dados via algum cliente http que lhe permita enviar requisições POST, deverá enviar no corpo da requisição a segunte estrutura:

```json
{
  "music": {
    "name": "Nome da Música",
    "description": "Descrição",
    "year": 2000
  }
}
```

```Para isso poderá usar inclusive o Insomnia citado antes.```
