# Authentication with React.js and Keycloak

Simple authetication "username password" form with keycloak

## First step

Install keycloak server with Docker (change username and password):

```bash
docker run -p 8080:8080 -e KEYCLOAK_USER=<username> -e KEYCLOAK_PASSWORD=<password> quay.io/keycloak/keycloak:18.0.0
```
