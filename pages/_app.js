import { createGlobalStyle } from 'styled-components';
import { faBookDead, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Main } from '../components/Container';
import Sidebar from '../components/Sidebar';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    background-color: #FFEEC2;
  }

  * {
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }) {
  const links = [
    { title: 'notebooks', href: '/notebooks', icon: faBookDead },
    { title: 'about', href: '/about', icon: faInfoCircle },
  ];

  return (
    <>
      <GlobalStyle />
      <Sidebar
        links={links}
      />
      <Main collapsedSidebar={false}>
        <Component {...pageProps} />
      </Main>
    </>
  )
}

export default MyApp
