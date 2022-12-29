# Authentication with React.js and Keycloak

[![Maintainability](https://api.codeclimate.com/v1/badges/87e358f7da97100ef6ab/maintainability)](https://codeclimate.com/github/JulienChapron/authentication-keycloak-react/maintainability)
![Known Vulnerabilities](https://snyk.io/test/github/JulienChapron/authentication-keycloak-react/badge.svg)

Simple authentication "username password" form with keycloak

### Tech stack

![image](https://img.shields.io/badge/react.js-FFFFFF?style=for-the-badge&logo=react&logoColor=blue)
![image](https://img.shields.io/badge/mui-FFFFFF?style=for-the-badge&logo=mui&logoColor=blue)
![image](https://img.shields.io/badge/keycloak-FFFFFF?style=for-the-badge&logo=keycloak&logoColor=grey)
![image](https://img.shields.io/badge/postgresql-FFFFFF?style=for-the-badge&logo=postgresql&logoColor=blue)
![image](https://img.shields.io/badge/docker-FFFFFF?style=for-the-badge&logo=docker&logoColor=blue)

## First step

Run docker command:

```bash
docker-compose up
```
![alt text](https://raw.githubusercontent.com/JulienChapron/authentication-keycloak-react/main/readme/docker-desktop.png)

Connect you to keycloak at `http://localhost:8080` with user:`admin` and password: `Pa55w0rd`

1. Add Realm: 
  -  realm ID: `authentication_keycloak_react`

2. Add user and credentials:
  -   username:`test`
  -   email:`test@test.com`
  -   check "email verified"
  -   add a credential: test

3. Add client:
  -   Client ID: `authentication_keycloak_react`
  -   url: http://localhost:3000
  -   redirect uri: http://localhost:*
  -   logout: http://localhost:*
  
<hr />
Connect you to pgadmin  at `http://localhost:6084` with email: `admin@admin.com` and password: `root`

1. Connect your db created with script `0-init-keycloak-database.sh` 
  -   Register a server named `keycloak` with host: `postgres` , user: `keycloak` and password: `password`
