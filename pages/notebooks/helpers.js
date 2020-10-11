import path from 'path';

export const NOTEBOOKS_DIR = path.join(process.cwd(), 'public/images/notebooks')

// fs needs to be called inside of getStaticProps
export const getNotebookDirs = (source, fs) => (
  fs.readdirSync(source, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name)
);

export default function Test() {
  return <></>
};
