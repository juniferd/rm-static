import { faBookDead, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import '../styles/globals.css';
import { Main } from '../components/Container';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }) {
  const links = [
    { title: 'notebooks', href: '/notebooks', icon: faBookDead },
    { title: 'about', href: '/about', icon: faInfoCircle },
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
