import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import UserService from "../services/UserService";
function Dashboard() {
  const [tokenUser, setTokenUser] = useState<string>("");
  const [infosUser, setInfosUser] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  const getIdTokenParsedFunction = async () => {
    const infosUserKeycloak = await UserService.getIdTokenParsed();
    const tokenUserKeycloak = await UserService.getToken();
    setTokenUser(String(tokenUserKeycloak));
    setInfosUser(Object(infosUserKeycloak));
  };
  useEffect(() => {
    getIdTokenParsedFunction();
  }, []);
  return (
    <>
      {infosUser ? (
        <>
          <NavBar />
          <Container sx={{ mt: 10 }}>
            <Typography variant="h4">My confidential dashboard</Typography>
            <Typography variant="h5">Name: {infosUser.name}</Typography>
            <Typography variant="h5">Email: {infosUser.email}</Typography>
            <Typography variant="h5">
              Token: <Typography>{tokenUser}</Typography>
            </Typography>
          </Container>
        </>
      ) : (
        <Typography>... loading</Typography>
      )}
    </>
  );
}
export default Dashboard;
