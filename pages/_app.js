import '../styles/globals.css';
import { Main } from '../components/Container';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps, links }) {
  return (
    <>
      <Sidebar
        title="O_O"
        links={links}
      />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}

MyApp.getInitialProps = (ctx) => {
  const links = [
    { title: 'about', href: '/about' },
    { title: 'notebooks', href: '/notebooks' },
  ];

  return {
    links,
  };
}

export default MyApp
