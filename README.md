# Authentication with React.js and Keycloak

Simple authetication "username password" form with keycloak

### Tech stack

![image](https://img.shields.io/badge/react.js-FFFFFF?style=for-the-badge&logo=react&logoColor=blue)
![image](https://img.shields.io/badge/mui-FFFFFF?style=for-the-badge&logo=mui&logoColor=blue)
![image](https://img.shields.io/badge/keycloak-FFFFFF?style=for-the-badge&logo=keycloak&logoColor=grey)

## First step

Install keycloak server with Docker (change username and password):

```bash
docker run -p 8080:8080 -e KEYCLOAK_USER=<username> -e KEYCLOAK_PASSWORD=<password> quay.io/keycloak/keycloak:18.0.0
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

Download the app:

```bash
git clone https://github.com/JulienChapron/authentication-keycloak-react.git
```

Start the app:

```bash
cd authentication-keycloak-react
```

```bash
yarn install && docker build -t authentication-keycloak-react .
```
