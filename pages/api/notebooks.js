import fs from  'fs';
import path from 'path';

const NOTEBOOKS_DIR = path.join(process.cwd(), 'public/images/notebooks')
const getNotebookDirs = source => (
  fs.readdirSync(source, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name)
);
const NOTEBOOKS = getNotebookDirs(NOTEBOOKS_DIR);

export default (req, res) => {
  res.statusCode = 200;
  res.json({
    notebooks: NOTEBOOKS,
  });
}
