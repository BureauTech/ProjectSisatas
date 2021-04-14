<h1 align="center">SISATAS</h1>

<p align="center">Uma solução web para acompanhamento e gerenciamento de atas de reuniões.</p>

<div align="center">

![logo](./assets/png/BureauTechLogo.png)

Desenvolvido pela bureau tech.

</div>

## Protótipo das telas da aplicação

![telas](./assets/gifs/telas.gif)

<br>

Protótipo interativo das telas está disponível neste link: https://bit.ly/SISATAS

# Tecnologias

- Spring Framework
- Maven
- ReactJS
- Material-UI

# Como executar

## Servidor

Na pasta [***server/sisata***](./server/sisata): <br>

Pode ser executado diretamente utilizando o comando Maven abaixo:

```
mvn spring-boot:run
```

e ficará disponível em [localhost:8080](http://localhost/8080)

ou

1. Criação da Imagem do Docker::

```
docker build -t bureau/sisata
```

1. Para execução do container:

```
docker run -p 8080:8080 {image-id}
```

## Cliente

Na pasta [***client/***](./client): <br>

1. Faça a instalação dos módulos:
   
```
npm install
```

2. Inicie a aplicação: 

```
npm start
```

Ficará disponível em [localhost:3000](http://localhost/3000)

# Progresso do desenvolvimento do Projeto

Para acompanhamento das atividades, [acesse o Board](https://www.notion.so/b2249587d2c24f6995f4c7ba8dea304e?v=322477ad68b04c12ac4bc0e36c55bd61).

# Entregas

- [Sprint 1](https://github.com/BureauTech/ProjectSisatas/tree/prod/sprint-1) entrega realizada em 28/03/2021.

## Sprint 2

### Documentações

- [Product Backlog](./docs/Product%20Backlog%20-%20SISATAS.pdf)

# Autores

### [![GitHub Badge](https://img.shields.io/github/followers/bibiacoutinho?label=bibiacoutinho&style=for-the-badge&color=black&link=https://github.com/bibiacoutinho)](https://github.com/bibiacoutinho) - Master <br>

### [![GitHub Badge](https://img.shields.io/github/followers/charles-ramos?label=charles-ramos&style=for-the-badge&color=black&link=https://github.com/charles-ramos)](https://github.com/charles-ramos) - PO <br>

### [![GitHub Badge](https://img.shields.io/github/followers/anaclaragraciano?label=anaclaragraciano&style=for-the-badge&color=black&link=https://github.com/anaclaragraciano)](https://github.com/anaclaragraciano) - DEV Team <br>

### [![GitHub Badge](https://img.shields.io/github/followers/caiquesjc?label=caiquesjc&style=for-the-badge&color=black&link=https://github.com/caiquesjc)](https://github.com/caiquesjc) - DEV Team <br>

### [![GitHub Badge](https://img.shields.io/github/followers/danielsantosoliveira?label=danielsantosoliveira&style=for-the-badge&color=black&link=https://github.com/danielsantosoliveira)](https://github.com/danielsantosoliveira) - DEV Team<br>

### [![GitHub Badge](https://img.shields.io/github/followers/Denis-Lima?label=Denis-Lima&style=for-the-badge&color=black&link=https://github.com/Denis-Lima)](https://github.com/Denis-Lima) - DEV Team <br>

### [![GitHub Badge](https://img.shields.io/github/followers/JoaoPSPereira?label=JoaoPSPereira&style=for-the-badge&color=black&link=https://github.com/JoaoPSPereira)](https://github.com/JoaoPSPereira) - DEV Team <br>

### [![GitHub Badge](https://img.shields.io/github/followers/WeDias?label=WeDias&style=for-the-badge&color=black&link=https://github.com/WeDias)](https://github.com/WeDias) - DEV Team <br>