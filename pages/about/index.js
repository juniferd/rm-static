import styled from 'styled-components';
import { mdSpacing, lgSpacing } from '../../components/constants';
import Link from '../../components/Link';
import Breadcrumbs from '../../components/Breadcrumbs';
import RmGithub from '../../public/images/icons/rmGithub.svg';
import RmCatYelling from '../../public/images/icons/rmCatYelling.svg';
import RmFountainPen from '../../public/images/icons/rmFountainPen.svg';
import RmCoffee from '../../public/images/icons/rmCoffee.svg';
import Svg from '../../components/Svg';
import { mediaQuery } from '../../components/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${mediaQuery.tablet`
    flex-direction: column;
    align-items: flex-start;
  `}
`;
const SpeechBubble = styled.p`
  margin-top: 0;
  background: ${props => props.theme && props.theme.sidebarBackground};
  border-radius: ${lgSpacing};
  line-height: ${lgSpacing};
  padding: 0 ${lgSpacing} ${mdSpacing};
  margin-right: ${lgSpacing};
  flex-basis: 100%;
`;

const Paragraph = styled.p`
  margin-top: 0;
  flex-basis: 100%;
`;

export default function About() {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { link: '/', text: 'home' },
          { text: 'about' },
        ]}
      />
      <Wrapper>
        <SpeechBubble><Svg Component={RmCatYelling} width="32px" /> hi yes sometimes i make things. this is a collection of drawings made with the reMarkable e-ink tablet.</SpeechBubble>
        <Paragraph>
          <Svg Component={RmFountainPen} width="32px" /> this site is built with <Link href="https://nextjs.org/">next.js</Link>
          <br/><Svg Component={RmGithub} width="32px" /> sauce plz? <Link href="https://github.com/juniferd/rm-static">github</Link>
          <br/><Svg Component={RmCoffee} width="32px" /> shrug
        </Paragraph>
      </Wrapper>
    </>
  );
}
