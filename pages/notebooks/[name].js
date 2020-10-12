import fs from  'fs';
import path from 'path';
import { useRouter } from 'next/router';
import Link from '../../components/Link';
import { NOTEBOOKS_DIR, getNotebookDirs} from '../../helpers';

const Notebook = ({ content }) => {
  // each notebook has images
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <h1>{name}</h1>
      <p><Link href="/notebooks">&larr;</Link></p>
      {content[name].map(img => (
        <img src={img.content} width="600" />
      ))}
    </>
  )
}

export async function getStaticProps() {
  const NOTEBOOKS = getNotebookDirs(NOTEBOOKS_DIR, fs);
  const notebookPages = NOTEBOOKS.map(notebook => {
    const imgDir = path.join(NOTEBOOKS_DIR, notebook)
    const imgPaths = fs.readdirSync(imgDir);

    const res = imgPaths.map(img => ({
      filename: img,
      content: `/images/notebooks/${notebook}/${img}`,
    }))
    return [notebook, res];
  });

  const notebookWithImages = Object.fromEntries(notebookPages)

  return {
    props: {
      content: notebookWithImages,
    },
  }
}

export async function getStaticPaths() {
  const NOTEBOOKS = getNotebookDirs(NOTEBOOKS_DIR, fs);
  const paths = NOTEBOOKS.map(name => {
    return { params: { name } }
  });

  return {
    paths,
    fallback: false,
  };
}

export default Notebook;
