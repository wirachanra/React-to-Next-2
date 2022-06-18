import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../assets/styles.css";
import { Provider } from "react-redux";
import rootReducer from "../redux/store";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: rootReducer });
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
