import fs from  'fs';
import Link from '../../components/Link';
import { NOTEBOOKS_DIR, getNotebookDirs } from '../../helpers';

export default function Page ({ content }) {
  return (
    <>
      <h1>Notebooks:</h1>
      <Link href="/">&larr;</Link>
      <ul>
        {content.map(notebook => (
          <li><Link href={`/notebooks/${notebook}`}>{notebook}</Link></li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {

  const NOTEBOOKS = getNotebookDirs(NOTEBOOKS_DIR, fs);

  return {
    props: {
      content: NOTEBOOKS,
    },
  }
}
