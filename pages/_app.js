import '../styles/globals.css';
import { Main } from '../components/Container';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }) {
  const links = [
    { title: 'notebooks', href: '/notebooks' },
    { title: 'about', href: '/about' },
  ];

  return (
    <>
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
