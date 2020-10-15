import { useEffect } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import Remarkable from '../public/images/remarkable_notebooks.svg';
import { gray } from '../components/colors';
import Link from '../components/Link';

const MainImage = styled(Remarkable)`
  fill: ${gray};
  width: 50%;
  min-width: 300px;
  max-width: 500px;
`;

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const MaskContainer = styled.svg`
  z-index: 0;
  width: 1000px;
  height: 200px;
  position: absolute;
  left: -190px;
  top: -200px;
  transform: rotateZ(-45deg);
`;

const SvgContainer = styled.div`
  position: relative;
`;

const Footer = styled.p`
  justify-self: flex-end;
  > a {
    text-decoration: none;
  }
`;

const Home = () => {

  useEffect(() => {
    const t1 = gsap.timeline({
      repeat: 1,
      yoyo: true,
      repeatDelay: 0.5,
    });

    t1.to('.box', {
      duration: 2,
      scaleX: 10,
      ease: 'power2.inOut',
      stagger: {
        from: 0,
        grid: 'auto',
        each: 0.25,
      }
    }).to('.box', {
      duration: 1,
      scaleX: 1,
      ease: 'power2.inOut',
      stagger: {
        from: 0,
        grid: 'auto',
        each: 0.25,
      },
    });

  }, []);
  return (
    <Wrapper>
      <SvgContainer>
        <MainImage className="remarkableNotebookSvg" />
        <MaskContainer>
          {Array(5).fill(null).map((_, i) => {
            return (
              <rect
                className="box"
                key={`mask-${i}`}
                x="0"
                y={i*50}
                width="50"
                height="50"
                fill="#FFEEC2"
              />
            )
          })}
        </MaskContainer>
      </SvgContainer>
      <Footer>
        <Link href="/notebooks">
          ¯\_(ツ)_/¯
        </Link>
      </Footer>
    </Wrapper>
  )
};

export default Home;
