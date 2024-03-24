import React from "react";
import theme from "./utils/theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { AuthProvider } from "./Context/JWTAuthContext";
import axios from "./utils/axios";

function App() {
  // disable console logs in production
  if (process.env.NODE_ENV === "production") {
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
  }

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response && error.response.status === 401) {
        // Access token has expired, refresh it
        try {
          await axios.post("/verify")
          return axios(error.config);
        } catch (refreshError) {
          // Handle token refresh error
          throw refreshError;
        }
      }
      return Promise.reject(error);
    }
  );

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ChakraProvider>
    </Router>
  );
}

export default App;
