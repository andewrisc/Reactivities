import { Box, Container, CssBaseline } from "@mui/material";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router";
import Homepage from "../../features/home/Homepage";

function App() {

  const location = useLocation();

  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
      {location.pathname === '/' ? <Homepage /> : (
        <>
          <Navbar />
          <Container maxWidth='xl' sx={{ mt: 3 }}>
            <Outlet />
          </Container>
        </>
      )}
    </Box>
  )
}

export default App
