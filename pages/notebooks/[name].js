import { useEffect } from 'react';
import fs from  'fs';
import path from 'path';
import gsap from 'gsap';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from '../../components/Link';
import { NOTEBOOKS_DIR, getNotebookDirs} from '../../helpers';
import { lgSpacing } from '../../components/constants';

const Image = styled.div`
  background: white;
  width: calc(100vw / 3);
  max-width: 300px;
  box-shadow: 0 0 12px rgba(204, 143, 0, .1);
  position: relative;
  height: auto;
  > img {
    width: 100%;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > * {
    margin-bottom: ${lgSpacing};
    &:not(:last-child) {
      margin-right: ${lgSpacing};
    }
  }
`;

const Notebook = ({ content }) => {
  // each notebook has images
  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    // TODO maybe use refs instead of global css class
    gsap.from('.notebookImage', {
      duration: 1,
      opacity: 0,
      scale: 0.1,
      ease: 'power1.inOut',
      stagger: {
        from: 0,
        grid: 'auto',
        each: 0.25,
      },
    });
  });

  return (
    <>
      <h1>{name}</h1>
      <p><Link href="/notebooks">&larr;</Link></p>
      <ImageContainer>
        {content[name].map(img => (
          <Image
            className="notebookImage"
            key={img.filename}
          >
            <img src={img.content} />
          </Image>
        ))}
      </ImageContainer>
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
