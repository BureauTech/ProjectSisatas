# SISATAS

### Uma solução web para acompanhamento e gerenciamento de atas de reuniões.

<br>

<div align="center">

![logo](./assets/png/BureauTechLogo.png)

Desenvolvido pela bureau tech.

</div>

<br>

## Protótipo das telas da aplicação

![telas](./assets/gifs/telas.gif)

<br>

Protótipo interativo das telas está disponível neste link: https://bit.ly/SISATAS

<br>

# Tecnologias

- Spring Framework
- Maven
- ReactJS
- Material-UI

</br>

# Como executar

## Servidor

Na pasta [***server/sisata***](./server/sisata): </br></br>

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

Na pasta [***client/***](./client): </br></br>

1. Faça a instalação dos módulos:
   
```
npm install
```

2. Inicie a aplicação: 

```
npm start
```
</br>

Ficará disponível em [localhost:3000](http://localhost/3000)

</br>

# Progress
## Sprint 1
### Prototypes
Interactive screen prototypes can be found here: https://bit.ly/SISATAS

</br>

### Documentation
- [Project Backlog](https://github.com/BureauTech/ProjectSisatas/blob/feature/readme/docs/Product%20Backlog%20-%20SISATAS.pdf)
- [Entity Relationship (DER)(Conceptual)](https://github.com/BureauTech/ProjectSisatas/blob/master/docs/DER_Conceitual_SISATA_Final.png)
- [Entity Relationship (DER)(Logical)](https://github.com/BureauTech/ProjectSisatas/blob/master/docs/DER_Logico_SISATA_Final.png)
- [Use Case Diagram (DCU)](https://github.com/BureauTech/ProjectSisatas/blob/feature/readme/docs/Product%20Backlog%20-%20SISATAS.pdf)
- [Screen's Prototypes](https://github.com/BureauTech/ProjectSisatas/blob/prod/sprint-1/docs/Prototipo_telas_v1.pdf) 

</br>

### Server
Created .xlsx minute template.
Implementation of the excel export functionality, although with a enconging bug that is planned
to be solved on the next Sprint.

![alt-text](https://github.com/BureauTech/ProjectSisatas/blob/feature/readme/assets/gifs/download_excel.gif)

</br>

### Client
Created .html template. 
Testing with button that calls the browser's printing function.

![alt-text](https://github.com/BureauTech/ProjectSisatas/blob/feature/readme/assets/gifs/download_pdf.gif)

# Authors

### [![GitHub Badge](https://img.shields.io/github/followers/bibiacoutinho?label=bibiacoutinho&style=for-the-badge&color=black&link=https://github.com/bibiacoutinho)](https://github.com/bibiacoutinho) - Master <br>

### [![GitHub Badge](https://img.shields.io/github/followers/charles-ramos?label=charles-ramos&style=for-the-badge&color=black&link=https://github.com/charles-ramos)](https://github.com/charles-ramos) - PO <br>

### [![GitHub Badge](https://img.shields.io/github/followers/anaclaragraciano?label=anaclaragraciano&style=for-the-badge&color=black&link=https://github.com/anaclaragraciano)](https://github.com/anaclaragraciano) - DEV Team <br>

### [![GitHub Badge](https://img.shields.io/github/followers/caiquesjc?label=caiquesjc&style=for-the-badge&color=black&link=https://github.com/caiquesjc)](https://github.com/caiquesjc) - DEV Team <br>

### [![GitHub Badge](https://img.shields.io/github/followers/danielsantosoliveira?label=danielsantosoliveira&style=for-the-badge&color=black&link=https://github.com/danielsantosoliveira)](https://github.com/danielsantosoliveira) - DEV Team<br>

### [![GitHub Badge](https://img.shields.io/github/followers/Denis-Lima?label=Denis-Lima&style=for-the-badge&color=black&link=https://github.com/Denis-Lima)](https://github.com/Denis-Lima) - DEV Team <br>

### [![GitHub Badge](https://img.shields.io/github/followers/JoaoPSPereira?label=JoaoPSPereira&style=for-the-badge&color=black&link=https://github.com/JoaoPSPereira)](https://github.com/JoaoPSPereira) - DEV Team <br>

### [![GitHub Badge](https://img.shields.io/github/followers/WeDias?label=WeDias&style=for-the-badge&color=black&link=https://github.com/WeDias)](https://github.com/WeDias) - DEV Team <br>





