import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  realm: "authentication_keycloak_react",
  url: "http://localhost:8080/auth",
  clientId: "authentication_keycloak_react",
});

const initKeycloak = async () => {
  await keycloak
    .init({
      onLoad: "check-sso",
      silentCheckSsoRedirectUri:
        window.location.origin + "/silent-check-sso.html",
    })
    .then(function (authenticated) {
      console.log(authenticated);
    })
    .catch(function () {
      alert("failed to initialize");
    });
};

const login = keycloak.login;

const logout = keycloak.logout;

const getToken = () => keycloak.token;

const getIdTokenParsed = () => keycloak.idTokenParsed;

const isLoggedIn = () => !!keycloak.token;

const updateToken = () => keycloak.updateToken(5).then().catch(login);

const getUsername = () => keycloak.tokenParsed?.preferred_username;

const UserService = {
  initKeycloak,
  login,
  logout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  getIdTokenParsed,
};

export default UserService;
