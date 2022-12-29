# Authentication with React.js and Keycloak

[![Maintainability](https://api.codeclimate.com/v1/badges/87e358f7da97100ef6ab/maintainability)](https://codeclimate.com/github/JulienChapron/authentication-keycloak-react/maintainability)
![Known Vulnerabilities](https://snyk.io/test/github/JulienChapron/authentication-keycloak-react/badge.svg)

Simple authentication "username password" form with keycloak

![alt text](https://raw.githubusercontent.com/JulienChapron/authentication-keycloak-react/main/readme/auth1.png)
![alt text](https://raw.githubusercontent.com/JulienChapron/authentication-keycloak-react/main/readme/auth2.png)
![alt text](https://raw.githubusercontent.com/JulienChapron/authentication-keycloak-react/main/readme/auth3.png)

### Tech stack

![image](https://img.shields.io/badge/react.js-FFFFFF?style=for-the-badge&logo=react&logoColor=blue)
![image](https://img.shields.io/badge/mui-FFFFFF?style=for-the-badge&logo=mui&logoColor=blue)
![image](https://img.shields.io/badge/keycloak-FFFFFF?style=for-the-badge&logo=keycloak&logoColor=grey)

## First step

Install keycloak server with Docker (change username and password):

```bash
docker run -p 8080:8080 -e KEYCLOAK_USER=<username> -e KEYCLOAK_PASSWORD=<password> quay.io/keycloak/keycloak:15.0.2
```


Add a Realm: 
-   `authentication_keycloak_react`

Add a user:
-   username:`test`
-   email:`test@test.com`
-   check "email verified"

Add a password for this user:
-   "password"

Check if this user exist:
-   go to this url `http://localhost:8080/auth/realms/authentication_keycloak_react/account/`
-   Connect you with your new user and new password

Add your app in Keycloak:
-   Create a new "client" with "id" `authentication_keycloak_react` and "url" `http://localhost:3000`


## Download and start your app

Download:

```bash
git clone https://github.com/JulienChapron/authentication-keycloak-react.git
```

Start:

```bash
cd authentication-keycloak-react
```

```bash
yarn install && docker build -t authentication-keycloak-react .
```
