<h1 align="center">SISATAS</h1>

<p align="center">Uma solução web para acompanhamento e gerenciamento de atas de reuniões.</p>

<div align="center">

![logo](./assets/png/BureauTechLogo.png)

Desenvolvido pela bureau tech.

</div>

# Sumário

   * [Sobre](#SISATAS)
   * [Sumário](#sumário)
   * [Protótipo das telas da aplicação](#protótipo-das-telas-da-aplicação)
   * [Acompanhamento das Atividades](#acompanhamento-das-atividades)
   * [Entregas](#entregas)
   * [Documentações](#documentações)
   * [Como executar localmente](#como-executar-localmente)
      * [Pré-Requisitos](#pré-requisitos)
      * [Servidor](#servidor)
        * [Docker Image](#docker-image)
      * [Cliente](#cliente)
   * [Tecnologias](#tecnologias)
   * [Autores](#autores)

## Protótipo das telas da aplicação

![telas](./assets/gifs/telas.gif)

<br>

Protótipo interativo das telas está disponível neste link: https://bit.ly/SISATAS

<br>


# Acompanhamento das Atividades

<h4 align="center"> 
	🚧  SISATAS em construção  🚧
</h4>

Para acompanhamento do desenvolvimento do projeto, [acesse o Board](https://www.notion.so/b2249587d2c24f6995f4c7ba8dea304e?v=322477ad68b04c12ac4bc0e36c55bd61).

<br>

# Entregas

- [Sprint 1](https://github.com/BureauTech/ProjectSisatas/tree/prod/sprint-1) entrega realizada em 28/03/2021.

- **Sprint 2** 🚧

------ cards aqui ---------

# Documentações

- [Product Backlog](./docs/Product%20Backlog%20-%20SISATAS.pdf)

# Como executar localmente

Para executar a aplicação completa localmente, siga as intruções a seguir:

### Pré-requisitos:

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

```
Node - Versão: 14.x.x
Java - Versão: 11
PostgreSQL - Versão: 10.16
Spring Framework
Maven
Docker (opcional)
```

Além disto é bom ter um editor para trabalhar com o código como VSCode.

## Servidor

Na pasta [***server/sisata***](./server/sisata): <br>

Pode ser executado diretamente utilizando o comando Maven abaixo:

```
mvn spring-boot:run
```

Ficará disponível em [localhost:8080](http://localhost/8080)

### Docker Image

Também é possível executar utilizando Docker, conforme processos descritos abaixo:

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

# Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node](https://nodejs.org/)
- [Java](https://www.java.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Spring Framework](https://spring.io/)
- [Maven](https://maven.apache.org/)
- [ReactJS](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [Docker](https://www.docker.com/)

# Autores

### [![GitHub Badge](https://img.shields.io/github/followers/bibiacoutinho?label=bibiacoutinho&style=for-the-badge&color=black&link=https://github.com/bibiacoutinho)](https://github.com/bibiacoutinho) - Master <br>

### [![GitHub Badge](https://img.shields.io/github/followers/charles-ramos?label=charles-ramos&style=for-the-badge&color=black&link=https://github.com/charles-ramos)](https://github.com/charles-ramos) - PO <br>

### [![GitHub Badge](https://img.shields.io/github/followers/anaclaragraciano?label=anaclaragraciano&style=for-the-badge&color=black&link=https://github.com/anaclaragraciano)](https://github.com/anaclaragraciano) - DEV Team <br>

### [![GitHub Badge](https://img.shields.io/github/followers/caiquesjc?label=caiquesjc&style=for-the-badge&color=black&link=https://github.com/caiquesjc)](https://github.com/caiquesjc) - DEV Team <br>

### [![GitHub Badge](https://img.shields.io/github/followers/danielsantosoliveira?label=danielsantosoliveira&style=for-the-badge&color=black&link=https://github.com/danielsantosoliveira)](https://github.com/danielsantosoliveira) - DEV Team<br>

### [![GitHub Badge](https://img.shields.io/github/followers/Denis-Lima?label=Denis-Lima&style=for-the-badge&color=black&link=https://github.com/Denis-Lima)](https://github.com/Denis-Lima) - DEV Team <br>

### [![GitHub Badge](https://img.shields.io/github/followers/JoaoPSPereira?label=JoaoPSPereira&style=for-the-badge&color=black&link=https://github.com/JoaoPSPereira)](https://github.com/JoaoPSPereira) - DEV Team <br>

### [![GitHub Badge](https://img.shields.io/github/followers/WeDias?label=WeDias&style=for-the-badge&color=black&link=https://github.com/WeDias)](https://github.com/WeDias) - DEV Team <br>




  <tr>
    <td align="center"><a href="https://github.com/bibiacoutinho"><img src="https://avatars.githubusercontent.com/u/56437723?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Beatriz Coutinho - Master</b></sub></a><br /><a href="https://github.com/BureauTech/ProjectSisatas/commits?author=bibiacoutinho" title="Master">📖</a></td>
    <td align="center"><a href="https://github.com/charles-ramos"><img src="https://avatars.githubusercontent.com/u/25464287?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Charles Ramos - PO</b></sub></a><br /><a href="https://github.com/BureauTech/ProjectSisatas/commits?author=charles-ramos" title="PO">📖</a></td>
    <td align="center"><a href="https://github.com/anaclaragraciano"><img src="https://avatars.githubusercontent.com/u/64653864?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ana Clara - Dev Team</b></sub></a><br /><a href="https://github.com/BureauTech/ProjectSisatas/commits?author=anaclaragraciano" title="Dev Team">📖</a></td>
    <td align="center"><a href="https://github.com/caiquesjc"><img src="https://avatars.githubusercontent.com/u/54915913?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Caique Silverio - Dev Team</b></sub></a><br /><a href="https://github.com/BureauTech/ProjectSisatas/commits?author=caiquesjc" title="Dev Team">📖</a></td>
    <td align="center"><a href="https://github.com/danielsantosoliveira"><img src="https://avatars.githubusercontent.com/u/55162125?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel Oliveira - Dev Team</b></sub></a><br /><a href="https://github.com/BureauTech/ProjectSisatas/commits?author=danielsantosoliveira" title="Dev Team">📖</a></td>
    <td align="center"><a href="https://github.com/Denis-Lima"><img src="https://avatars.githubusercontent.com/u/55518511?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Denis Lima - Dev Team</b></sub></a><br /><a href="https://github.com/BureauTech/ProjectSisatas/commits?author=Denis-Lima" title="Dev Team">📖</a></td>
    <td align="center"><a href="https://github.com/WeDias"><img src="https://avatars.githubusercontent.com/u/56437612?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Wesley Dias - Dev Team</b></sub></a><br /><a href="https://github.com/BureauTech/ProjectSisatas/commits?author=WeDias" title="Dev Team">📖</a></td>
  </tr>




<tr>
    <td align="center"><a href="https://github.com/aayushrajvanshi"><img src="https://avatars0.githubusercontent.com/u/14968551?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aayush Rajvanshi</b></sub></a><br /><a href="https://github.com/testing-library/react-testing-library/commits?author=aayushrajvanshi" title="Documentation">📖</a></td>
    <td align="center"><a href="https://elyalamillo.com"><img src="https://avatars2.githubusercontent.com/u/24350492?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ely Alamillo</b></sub></a><br /><a href="https://github.com/testing-library/react-testing-library/commits?author=ely-alamillo" title="Code">💻</a> <a href="https://github.com/testing-library/react-testing-library/commits?author=ely-alamillo" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/danieljcafonso"><img src="https://avatars3.githubusercontent.com/u/35337607?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel Afonso</b></sub></a><br /><a href="https://github.com/testing-library/react-testing-library/commits?author=danieljcafonso" title="Code">💻</a> <a href="https://github.com/testing-library/react-testing-library/commits?author=danieljcafonso" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://www.laurensbosscher.nl"><img src="https://avatars0.githubusercontent.com/u/13363196?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Laurens Bosscher</b></sub></a><br /><a href="https://github.com/testing-library/react-testing-library/commits?author=LaurensBosscher" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/__sakito__"><img src="https://avatars1.githubusercontent.com/u/15010907?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sakito Mukai</b></sub></a><br /><a href="https://github.com/testing-library/react-testing-library/commits?author=sakito21" title="Documentation">📖</a></td>
    <td align="center"><a href="http://turkerteke.com"><img src="https://avatars3.githubusercontent.com/u/12457162?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Türker Teke</b></sub></a><br /><a href="https://github.com/testing-library/react-testing-library/commits?author=tteke" title="Documentation">📖</a></td>
    <td align="center"><a href="http://linkedin.com/in/zachbrogan"><img src="https://avatars1.githubusercontent.com/u/319162?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Zach Brogan</b></sub></a><br /><a href="https://github.com/testing-library/react-testing-library/commits?author=zbrogz" title="Code">💻</a> <a href="https://github.com/testing-library/react-testing-library/commits?author=zbrogz" title="Tests">⚠️</a></td>
  </tr>