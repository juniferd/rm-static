import fs from  'fs';
import styled from 'styled-components';
import Link from '../../components/Link';
import { NOTEBOOKS_DIR, getNotebookDirs } from '../../helpers';
import { xsSpacing, smSpacing } from '../../components/constants';
import { mediaQuery } from '../../components/mediaQueries';

const StyledList = styled.ul`
  padding-left: 0;
  > li {
    margin-bottom: ${xsSpacing};
    list-style: none;
    ${mediaQuery.tablet`
      margin-bottom: ${smSpacing}; 
      font-size: 1.25em;
    `}
  }
`;

export default function Page ({ notebooks }) {
  return (
    <>
      <h1>notebooks</h1>
      <StyledList>
        {notebooks.map(notebook => (
          <li key={`notebook-${notebook}`}>
            <Link href={`/notebooks/${encodeURIComponent(notebook)}`}>{notebook}</Link>
          </li>
        ))}
      </StyledList>
    </>
  );
}

export async function getStaticProps() {

  const NOTEBOOKS = getNotebookDirs(NOTEBOOKS_DIR, fs);

  return {
    props: {
      notebooks: NOTEBOOKS,
    },
  }
}
