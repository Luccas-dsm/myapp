import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import dark from "./styles/Themes/dark";
import light from "./styles/Themes/light";
import Layout from "./components/Layout";
const App: React.FC = () => {
    return (
        <ThemeProvider theme={light}>
        <GlobalStyles />
        <Layout />
        </ThemeProvider>
    );
};
export default App;