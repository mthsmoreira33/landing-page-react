import React, { Component, useState} from "react";
import Header from './components/Header/Header';
import GlobalStyle from './shared/global';
import { ThemeProvider } from 'styled-components';
import light from './themes/light';
import dark from './themes/dark'
import Presentation from "./components/Presentation/Presentation";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import PreFooter from "./components/PreFooter/PreFooter";



function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
        <Presentation />
        <MainContent />
        <PreFooter />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
