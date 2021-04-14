# SISATAS

### Uma solução web para acompanhamento e gerenciamento de atas de reuniões.

<div align="center">

![alt-text](https://github.com/BureauTech/ProjectSisatas/blob/dev/readme/assets/png/BureauTechLogo.png)

Desenvolvido pela bureau tech.
</div>


## Protótipo das telas da aplicação


![alt-text](https://github.com/BureauTech/ProjectSisatas/blob/master/assets/gifs/telas.gif)

<br/>

Interactive screen prototypes can be found here: https://bit.ly/SISATAS

<br/>

# Technologies

- Spring Framework
- Maven
- ReactJS
- MaterialUI

</br>

# How to Run

## Server

On the [***server/sisata***](./server/sisata) folder: </br></br>
It can be ran directly with maven by the command:

```
mvn spring-boot:run
```

and it will be available on [localhost:8080](http://localhost/8080)

or

1. Building the Docker Image:

```
docker build -t bureau/sisata
```

2. Running the container:

```
docker run -p 8080:8080 {image-id}
```


## Client
On the [***client/***](./client) folder: </br></br>

1. Download node modules
```
npm install
```

2. Starting the application 
```
npm start
```
</br>

Now available on [localhost:3000](http://localhost/3000)

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

### [![GitHub Badge](https://img.shields.io/github/followers/QuodJP?label=QuodJP&style=for-the-badge&color=black&link=https://github.com/QuodJP)](https://github.com/QuodJP) - Master <br/>

### [![GitHub Badge](https://img.shields.io/github/followers/charles-ramos?label=charles-ramos&style=for-the-badge&color=black&link=https://github.com/charles-ramos)](https://github.com/charles-ramos) - PO <br/>

### [![GitHub Badge](https://img.shields.io/github/followers/anaclaragraciano?label=anaclaragraciano&style=for-the-badge&color=black&link=https://github.com/anaclaragraciano)](https://github.com/anaclaragraciano) - DEV Team<br/>

### [![GitHub Badge](https://img.shields.io/github/followers/bibiacoutinho?label=bibiacoutinho&style=for-the-badge&color=black&link=https://github.com/bibiacoutinho)](https://github.com/bibiacoutinho) - DEV Team</br> 

### [![GitHub Badge](https://img.shields.io/github/followers/caiquesjc?label=caiquesjc&style=for-the-badge&color=black&link=https://github.com/caiquesjc)](https://github.com/caiquesjc) - DEV Team<br/> 

### [![GitHub Badge](https://img.shields.io/github/followers/danielsantosoliveira?label=danielsantosoliveira&style=for-the-badge&color=black&link=https://github.com/danielsantosoliveira)](https://github.com/danielsantosoliveira) - DEV Team<br/>

### [![GitHub Badge](https://img.shields.io/github/followers/Denis-Lima?label=Denis-Lima&style=for-the-badge&color=black&link=https://github.com/Denis-Lima)](https://github.com/Denis-Lima) - DEV Team<br/> 

### [![GitHub Badge](https://img.shields.io/github/followers/WeDias?label=WeDias&style=for-the-badge&color=black&link=https://github.com/WeDias)](https://github.com/WeDias) - DEV Team<br/>





