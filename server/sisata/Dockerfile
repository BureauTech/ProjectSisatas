FROM maven

WORKDIR /app

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["mvn", "spring-boot:run"]