import { useState, useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import fs from  'fs';
import path from 'path';
import gsap from 'gsap';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Breadcrumbs from '../../components/Breadcrumbs';
import Link from '../../components/Link';
import { NOTEBOOKS_DIR, getNotebookDirs} from '../../helpers';
import { smSpacing, lgSpacing } from '../../components/constants';
import { mediaQuery } from '../../components/mediaQueries';

const SelectedImage = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: -100px;
  padding-bottom: 100px;
  background: rgba(0, 0, 0, .85);
  z-index: 10;
  display: ${props => props.showing ? 'flex' : 'none'};
  opacity: 1;
  justify-content: center;
  align-items: center;
  > img {
    display: block;
    background: white;
    max-height: calc(100vh - ${lgSpacing});
    height: auto;
    width: auto;
    max-width: calc(100% - ${lgSpacing});
  }
`;

const ImageContainer = styled.div`
  background: ${props => props.theme && props.theme.notebookPageBackground};
  width: calc(100vw / 3);
  max-width: 300px;
  box-shadow: 0 0 12px rgba(204, 143, 0, .1);
  position: relative;
  height: auto;
  margin: 0 ${smSpacing} ${lgSpacing};
  &:hover {
    cursor: pointer;
  }
  > img {
    display: block;
    width: 100%;
  }
  ${mediaQuery.tablet`
    max-width: 100%;
    width: 100%;
  `}
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
  const selectedImageRef = useRef();

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
    return function cleanup() {
      clearAllBodyScrollLocks();
    }
  }, []);

  const toggleSelectedImage = (img) => {
    if (img === null) {
      enableBodyScroll(selectedImageRef.current);
    } else {
      disableBodyScroll(selectedImageRef.current);
      gsap.from(selectedImageRef.current, {
        duration: .25,
        opacity: 0,
      });
    }
    setSelectedImage(img);
  };

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { link: '/', text: 'home' },
          { link: '/notebooks', text: 'notebooks' },
          { text: name },
        ]}
      />
      <Section>
        {content[decodeURIComponent(name)].map(img => (
          <ImageContainer
            className="notebookImage"
            key={img.filename}
            onClick={(_) => toggleSelectedImage(img.content)}
          >
            <img src={img.content} />
          </ImageContainer>
        ))}
      </Section>
      <SelectedImage
        showing={!!selectedImage}
        ref={selectedImageRef}
        onClick={(_) => toggleSelectedImage(null)}
      >
        <img src={selectedImage} />
      </SelectedImage>
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
  // TODO whyyyyyy
  const paths = NOTEBOOKS.map(name => {
    return { params: { name: process.env.NODE_ENV === 'development' ? encodeURIComponent(name) : name } }
  });

  return {
    paths,
    fallback: false,
  };
}

export default Notebook;
