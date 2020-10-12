import '../styles/globals.css';
import { Main } from '../components/Container';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Sidebar
        title="O_O"
      />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}

export default MyApp
