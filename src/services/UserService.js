import Keycloak from "keycloak-js";

const keycloak = new Keycloak('/keycloak.json');

const initKeycloak = () => {
  keycloak.init({
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
  })
    .then((authenticated) => {
      if (!authenticated) {
        console.log("user is not authenticated..!");
      }
    })
    .catch(console.error);
};

const login = keycloak.login;
const logout = keycloak.logout;
const getUsername = () => keycloak.tokenParsed?.preferred_username;
const hasRole = (roles) => roles.some((role) => keycloak.hasRealmRole(role));

const UserService = {
  initKeycloak,
  login,
  logout,
  getUsername,
  hasRole,
};

export default UserService;