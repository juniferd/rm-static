import fs from  'fs';
import styled from 'styled-components';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from '../../components/Link';
import { NOTEBOOKS_DIR, getNotebookDirs } from '../../helpers';
import { lightBlue } from '../../components/colors';
import { xsSpacing, smSpacing } from '../../components/constants';

const StyledList = styled.ul`
  padding-left: 0;
  > li {
    margin-bottom: ${xsSpacing};
    list-style: none;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  color: ${lightBlue};
  margin-right: ${smSpacing};
`;

export default function Page ({ notebooks }) {
  return (
    <>
      <h1>notebooks</h1>
      <StyledList>
        {notebooks.map(notebook => (
          <li key={`notebook-${notebook}`}>
            <Icon icon={faFileAlt} />
            <Link href={`/notebooks/${notebook}`}>{notebook}</Link>
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
