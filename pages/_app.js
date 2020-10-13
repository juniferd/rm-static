import '../styles/globals.css';
import { Main } from '../components/Container';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }) {
  const links = [
    { title: 'about', href: '/about' },
    { title: 'notebooks', href: '/notebooks' },
  ];

  return (
    <>
      <Sidebar
        title="O_O"
        links={links}
      />
      <Main collapsedSidebar={false}>
        <Component {...pageProps} />
      </Main>
    </>
  )
}

export default MyApp
