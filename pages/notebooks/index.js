import fs from  'fs';
import { NOTEBOOKS_DIR, getNotebookDirs } from './helpers';

export default function Page ({ content }) {
  return (
    <div>
      <h1>Notebooks:</h1>
      <ul>
        {content.map(notebook => (
          <li><a href={`/notebooks/${notebook}`}>{notebook}</a></li>
        ))}
      </ul>
    </div>
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
