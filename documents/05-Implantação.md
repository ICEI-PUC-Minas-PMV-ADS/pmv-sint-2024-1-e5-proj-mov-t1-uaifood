# Implantação do Software

## Planejamento da Implantação do Software

### Ambientes de trabalho

Ambiente   | Plataforma | Link de acesso
--------- | ------ | --------
Repositório de código fonte | GitHub | <a>https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-sint-2024-1-e5-proj-mov-t1-uaifood</a>
Documentos do projeto | GitHub  | <a>https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-sint-2024-1-e5-proj-mov-t1-uaifood/blob/main/documents/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md</a>
Projeto de Interface |   | 
Gerenciamento do Projeto | Trello  | <a>https://trello.com/b/43rTn8CW/eixo-5-desenv-aplicacoes-moveis-1-sem-2024</a>

### Planejamento

o Grupo aplica a metodologia Scrum para se auto-organizar e desenvolver o projeto. O Scrum Master e o product Owner foram selecionados entre os membros conforme suas habilidades e aptdões. Sabendo que o Scrum Master se encarrega do andamento do projeto de maneira responsável e sincronizada com os colegas, decidiu-se eleger dois membros para o cargo: Isadora Cristina Bittencourt e sua assistente Márcia Carvalho, e como Product Owner: Luana Berato dos Santos, que faz com que o projeto se desenvolva de maneira correta, efetuando a analise de mercado e desenvolvendo metas e objetivos do projeto, direcionando para os integrantes do grupo as tarefas conforme suas capacidades. Dessa maneira fica o grupo sincronizado e distribuidas todas as tarefas que o projeto necesssita para serem realizadas.

### Ferramenta de Gerenciamento de Projeto
Os membros do grupo estão utilizando a ferramenta de gerenciamento trello para se organizarem e distribuirem as tarefas, que foram listadas da seguinte forma:
* Etapa 1 : Tarefas distribuídas dessa etapa para serem realizadas, onde os membros indicam o que irão realizar
* Em Andamento : Tarefas iniciadas
* Finalizado : Tarefas concluídas
* Microfundamentos Essenciais para a Etapa vigente: relação dos MFs da etapa para manter o time informado.

A ferramenta de gerenciamento de projeto Trello encontra-se disponível através do [Trello](https://trello.com/b/43rTn8CW/eixo-5-desenv-aplicacoes-moveis-1-sem-2024) onde se apresenta na figura abaixo:

![Trello_Eixo5_DesenvAplicMoveis2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-sint-2024-1-e5-proj-mov-t1-uaifood/assets/102733574/cb38fe16-e4f9-4d88-8373-1cd230a4a156)

## Rodar

### Configurar a string do banco de dados
Ir para o arquivo `.env` e adicionar sua string de conexão ao seu banco de dados mongoDB.
Você pode usar o seguinte url, mas você precisa obter seu `username`, `password` e `dbname` que você criou em seu banco de dados.
```
mongodb+srv://<username>:<password>@cluster0.x1ccn.mongodb.net/<dbname>?retryWrites=true&w=majority
```

### Instalação

```
npm install
```

### Iniciar API

```
npm start
```

## Rotas

### Produtos

```
GET      /api/v1/produtos
GET      /api/v1/produtos/:id
POST     /api/v1/produtos
PUT      /api/v1/produtos/:id
DELETE   /api/v1/produtos/:id
PUT imagem da galeria : /api/v1/produtos/galeria/:id
GET produtos em destaque: /api/v1/produtos/get/destaque/:count
GET total de produtos: /api/v1/produtos/get/total
```

### Pedidos

```
GET      /api/v1/pedidos
GET      /api/v1/pedidos/:id
POST     /api/v1/pedidos
PUT      /api/v1/pedidos/:id
DELETE   /api/v1/pedidos/:id
GET total de vendas: /api/v1/pedidos/get/total/venda
GET produtos do usuário: /api/v1/pedidos/get/usuario/:userid
```

### Usuários

```
GET      /api/v1/usuarios
GET      /api/v1/usuarios/:id
POST     /api/v1/usuarios
PUT      /api/v1/usuarios/:id
DELETE   /api/v1/usuarios/:id
GET total de usuários: /api/v1/usuarios/get/total
```

#### Cadastrar novo usuário

```
POST     /api/v1/usuarios/cadastro
```

#### Login usuários

Para fazer login no usuário e obter o token de autenticação, você pode usar:

```
POST     /api/v1/usuarios/login
```