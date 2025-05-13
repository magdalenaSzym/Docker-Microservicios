# 📚 Tutorial Microservicios-Docker 

Este repositorio contiene una arquitectura de microservicios utilizando Spring Boot, Spring Cloud (Eureka + Gateway), Angular y Docker Compose. 
La finalidad de este proyecto es tener dos portales frontend similares que se comunican con el mismo backend.


### 🧱 Estructura del Proyecto

```
├── client/               # Frontend principal (Angular)
├── client2/              # Segundo frontend duplicado
├── tutorial-author/      # Microservicio: Autores
├── tutorial-borrow/      # Microservicio: Préstamos
├── tutorial-category/    # Microservicio: Categorías
├── tutorial-customer/    # Microservicio: Clientes
├── tutorial-eureka/      # Servidor de descubrimiento Eureka
├── tutorial-game/        # Microservicio: Juegos
├── tutorial-gateway/     # API Gateway con Spring Cloud
├── docker-compose.yml    # Orquestación de contenedores Docker
```

## ⚙️ Tecnologías utilizadas

- **Spring Boot**
- **Spring Cloud Eureka** (Service Discovery)
- **Spring Cloud Gateway** (Routing)
- **Angular 17** (Frontends)
- **Docker + Docker Compose**
