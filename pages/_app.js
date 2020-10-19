import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { faBookDead, faInfoCircle, faTint } from '@fortawesome/free-solid-svg-icons'
import { Main } from '../components/Container';
import Sidebar from '../components/Sidebar';
import { pastelTheme, grayTheme, defaultTheme } from '../components/colors';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    background-color: ${props => props.theme && props.theme.background};
    color: ${props => props.theme && props.theme.text};
  }

  * {
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }) {
  const themes = {
    defaultTheme,
    grayTheme,
    pastelTheme,
  };
  const themeKeys = Object.keys(themes);
  const getRandom = (items) => items[Math.floor(Math.random() * items.length)]; 

  const [currentTheme, setTheme] = useState('defaultTheme');

  const setRandomTheme = () => {
    const remainingThemes = themeKeys.filter(th => th !== currentTheme);
    const randomTheme = getRandom(remainingThemes);
    setTheme(randomTheme);
  }

  const links = [
    { title: 'notebooks', href: '/notebooks', icon: faBookDead },
    { title: 'about', href: '/about', icon: faInfoCircle },
    { title: 're-skin', onClick: setRandomTheme, icon: faTint }
  ];

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyle />
      <Sidebar links={links} />
      <Main collapsedSidebar={false}>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  )
}

export default MyApp
