import { Box, Typography, Button, Container } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import KeycloakLogo from "../KeycloakLogo.png";
import UserService from "../services/userService";

function SignIn() {
  return (
    <Container>
      <Box
        sx={{ mt: 10, mx: "auto", p: 5, width: "500px", boxShadow: 3 }}
        textAlign="center"
      >
        <img src={KeycloakLogo} alt="Keycloak Logo" />
        <Typography variant="h5">Authentication with Keycloak</Typography>
        <div>
          <Button
            onClick={async () => await UserService.login()}
            size="large"
            sx={{ mt: 2 }}
            variant="contained"
          >
            <LoginIcon sx={{ mr: 1 }} />
            Sign In with Keycloak
          </Button>
        </div>
      </Box>
    </Container>
  );
}
export default SignIn;
