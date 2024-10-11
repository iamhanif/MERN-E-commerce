import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";
import Home from "./pages/Home";

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Box>
  );
}

export default App;
