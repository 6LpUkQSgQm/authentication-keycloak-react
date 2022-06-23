import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import UserService from "../services/UserService";

function NavBar() {
  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Authentication_keycloak_react
        </Typography>
        <Button onClick={() => UserService.logout()} color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
