# Authentication with React.js and Keycloak

Simple authetication "username password" form with keycloak

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

