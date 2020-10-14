import { useState, useEffect } from 'react';
import fs from  'fs';
import path from 'path';
import gsap from 'gsap';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from '../../components/Link';
import { NOTEBOOKS_DIR, getNotebookDirs} from '../../helpers';
import { smSpacing, lgSpacing } from '../../components/constants';
import { mediaQuery } from '../../components/mediaQueries';

const SelectedImage = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, .85);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    background: white;
    max-height: calc(100vh - ${lgSpacing});
    height: auto;
    width: auto;
    max-width: calc(100% - ${lgSpacing});
  }
`;

const ImageContainer = styled.div`
  background: white;
  width: calc(100vw / 3);
  max-width: 300px;
  box-shadow: 0 0 12px rgba(204, 143, 0, .1);
  position: relative;
  height: auto;
  margin: 0 ${smSpacing} ${lgSpacing};
  > img {
    width: 100%;
  }
  ${mediaQuery.tablet(`
    max-width: 100%;
    width: 100%;
    &:not(:last-child) {
      margin-right: 0;
    }
  `)}
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Notebook = ({ content }) => {
  // each notebook has images
  const router = useRouter();
  const { name } = router.query;
  const [selectedImage, setSelectedImage] = useState(null);

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
  }, []);

  return (
    <>
      <h1>{name}</h1>
      <p><Link href="/notebooks">&larr;</Link></p>
      {!!selectedImage ? (
        <SelectedImage
          onClick={(_) => setSelectedImage(null)}
        >
          <img src={selectedImage} />
        </SelectedImage>
      ) : null}
      <Section>
        {content[name].map(img => (
          <ImageContainer
            className="notebookImage"
            key={img.filename}
            onClick={(_) => setSelectedImage(img.content)}
          >
            <img src={img.content} />
          </ImageContainer>
        ))}
      </Section>
    </>
  )
}

export async function getStaticProps() {
  const NOTEBOOKS = getNotebookDirs(NOTEBOOKS_DIR, fs);
  const notebookPages = NOTEBOOKS.map(notebook => {
    const imgDir = path.join(NOTEBOOKS_DIR, notebook)
    const imgPaths = fs.readdirSync(imgDir);

    const IMG_EXTS = ['.png', '.bmp', '.gif', '.jpeg', '.jpg', '.tiff', '.svg'];
    const res = imgPaths
      .filter(file => IMG_EXTS.includes(path.extname(file).toLowerCase()))
      .map(img => {
        return {
          filename: img,
          content: `/images/notebooks/${notebook}/${img}`,
        }
      });

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
