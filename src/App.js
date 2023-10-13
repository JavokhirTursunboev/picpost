import { ThemeProvider } from "@emotion/react";
import { createTheme, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [mode, setMode] = useState("light");
  const [barOpen, setbarOpen] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar barOpen={barOpen} setbarOpen={setbarOpen} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar
            setMode={setMode}
            mode={mode}
            barOpen={barOpen}
            setbarOpen={setbarOpen}
           
          />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
