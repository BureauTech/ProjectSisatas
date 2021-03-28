# SISATA

A web app for tracking and management of meeting records.

</br>

# Technologies

</br>

# How to Run

</br>

## Server

On the [***server/sisata***](./server/sisata) folder: </br></br>
It can be ran directly with maven by the command:

```
mvn spring-boot:run
```

and it will be available on http://localhost/8080

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

</br>

# Progress


## Sprint 1

### Prototypes

Interactive screen prototypes can be found here:

https://bit.ly/3dgpchg

### Documentation

Project Backlog

Entity Relationship Document (DER)

Use Case Diagram  (DCU)

### Server

Created .xlsx minute template.
Implementation of the excel export functionality, although with a enconging bug that is planned
to be solved on the next Sprint.

![alt-text](https://github.com/BureauTech/ProjectSisatas/blob/feature/readme/assets/gifs/download_excel.gif)

### Client

Created .html template. 
Testing with button that calls the browser's printing function.

![alt-text](https://github.com/BureauTech/ProjectSisatas/blob/feature/readme/assets/gifs/download_pdf.gif)


# Project Contributors 

