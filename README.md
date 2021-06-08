<h1 align="center">SISATAS</h1>

<p align="center">Uma solução web para acompanhamento e gerenciamento de atas de reuniões.</p>

<div align="center">

![logo](./assets/png/BureauTechLogo.png)

Desenvolvido pela Bureau Tech.

</div>

# Sumário

   * [Sobre](#SISATAS)
   * [Sumário](#sumário)
   * [Protótipo das telas da aplicação](#protótipo-das-telas-da-aplicação)
   * [Acompanhamento das Atividades](#acompanhamento-das-atividades)
   * [Entregas](#entregas)
   * [Burndown](#burndown)
   * [Backlog](#backlog)
   * [Como executar localmente](#como-executar-localmente)
      * [Pré-Requisitos](#pré-requisitos)
      * [Servidor](#servidor)
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

- [Sprint 2](https://github.com/BureauTech/ProjectSisatas/tree/prod/sprint-2) entrega realizada em 18/04/2021.

- [Sprint 3](https://github.com/BureauTech/ProjectSisatas/tree/prod/sprint-3) entrega realizada em 16/05/2021.

- **Sprint 4** (Entrega realizada em 06/06/2021):

**Entregas propostas:**

![cards](./assets/png/Sprint%204%20-%20Cards-1.png)
![cards](./assets/png/Sprint%204%20-%20Cards-2.png)
![cards](./assets/png/Sprint%204%20-%20Cards-3.png)

**Histórias em aberto:**

Baseado no nosso backlog, as histórias que não foram concluídas, foram:

- US13:
  - Critério 2: Ferramenta de aprovação ou recusa de revisões.

- US18:
  - Critério 1: Identificar usuários que revisaram ou possuem revisão pendente sobre determinada revisão.

**Documentação entregue:**

- [Testes de Software - Caixa Preta](./docs/Testes%20de%20Software%20-%20Caixa%20Preta.pdf)

- [Manual de Usuário](./docs/Manual%20de%20Usuario.pdf)

- [Plano de Desenvolvimento e Melhoria do SISATAS - Sistema de Gerenciamento de Atas](./docs/Plano%20de%20Melhoria.pdf)

# Burndown

![Gráfico Burndown](assets/png/Burndown%20-%20Sprint%204.png)

# Backlog 

- [Product Backlog](./docs/Product%20Backlog%20do%20Projeto%20-%20SISATAS%20-%20v6.pdf)

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
```

Além disto é bom ter um editor para trabalhar com o código como VSCode.

## Servidor

Na pasta [***server/sisata***](./server/sisata): <br>

Pode ser executado diretamente utilizando o comando Maven abaixo:

```
mvn spring-boot:run
```

Ficará disponível em [localhost:8080](http://localhost/8080)

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

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/bibiacoutinho"><img src="https://avatars.githubusercontent.com/u/56437723?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Beatriz Coutinho<br>Master</b></sub></a><br /><a href="https://github.com/BureauTech/ProjectSisatas/commits?author=bibiacoutinho" title="Master">:headphones::nail_care::computer_mouse:</a></td>
    <td align="center"><a href="https://github.com/charles-ramos"><img src="https://avatars.githubusercontent.com/u/25464287?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Charles Ramos<br>PO</b></sub></a><br /><a href="https://github.com/BureauTech/ProjectSisatas/commits?author=charles-ramos" title="PO">:fist_raised::open_book::hamburger:</a></td>
    <td align="center"><a href="https://github.com/anaclaragraciano"><img src="https://avatars.githubusercontent.com/u/64653864?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ana Clara<br>Dev</b></sub></a><br /><a href="https://github.com/BureauTech/ProjectSisatas/commits?author=anaclaragraciano" title="Dev Team">:sparkles::iphone::open_book:</a></td>
    <td align="center"><a href="https://github.com/caiquesjc"><img src="https://avatars.githubusercontent.com/u/54915913?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Caique Nascimento<br>Dev</b></sub></a><br /><a href="https://github.com/BureauTech/ProjectSisatas/commits?author=caiquesjc" title="Dev Team">:keyboard::desktop_computer::computer_mouse:</a></td>
</table>
<table align="center">
    <td align="center"><a href="https://github.com/danielsantosoliveira"><img src="https://avatars.githubusercontent.com/u/55162125?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel Oliveira<br>Dev</b></sub></a><br /><a href="https://github.com/BureauTech/ProjectSisatas/commits?author=danielsantosoliveira" title="Dev Team">:computer::guitar::soccer:</a></td>
    <td align="center"><a href="https://github.com/Denis-Lima"><img src="https://avatars.githubusercontent.com/u/55518511?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Denis Lima<br>Dev</b></sub></a><br /><a href="https://github.com/BureauTech/ProjectSisatas/commits?author=Denis-Lima" title="Dev Team">:computer::v::pizza:</a></td>
    <td align="center"><a href="https://github.com/JoaoPSPereira"><img src="https://avatars.githubusercontent.com/u/55442593?v=4?s=100" width="100px;" alt=""/><br /><sub><b>João Pedro<br>Dev</b></sub></a><br /><a href="https://github.com/BureauTech/ProjectSisatas/commits?author=JoaoPSPereira" title="Dev Team">:microphone::sushi::video_game:</a></td>
    <td align="center"><a href="https://github.com/WeDias"><img src="https://avatars.githubusercontent.com/u/56437612?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Wesley Dias<br>Dev</b></sub></a><br /><a href="https://github.com/BureauTech/ProjectSisatas/commits?author=WeDias" title="Dev Team">:rocket::milky_way::new_moon:</a></td>
  </tr>
</table>