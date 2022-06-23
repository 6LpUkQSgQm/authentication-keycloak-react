import Keycloak from "keycloak-js";

const keycloak = new Keycloak('/keycloak.json');

const initKeycloak = async () => {
  await keycloak.init({
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
  })
    .then((authenticated) => {
      if (!authenticated) {
        console.log("user is not authenticated..!");
        return false
      } else {
        return true
      }
    })
    .catch(console.error);
};

const login = keycloak.login;
const logout = keycloak.logout;
console.log(keycloak, 'keycloak')
const getUsername = () => keycloak.tokenParsed?.preferred_username;
const getToken = () => keycloak.idToken;
const getIdTokenParsed = () => keycloak.idTokenParsed;
const UserService = {
  initKeycloak,
  login,
  logout,
  getUsername,
  getIdTokenParsed,
  getToken
};

export default UserService;