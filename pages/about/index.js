import Link from '../../components/Link';
import RmGithub from '../../public/images/icons/rmGithub.svg';
import RmCatYelling from '../../public/images/icons/rmCatYelling.svg';
import RmFountainPen from '../../public/images/icons/rmFountainPen.svg';
import RmCoffee from '../../public/images/icons/rmCoffee.svg';
import Svg from '../../components/Svg';

export default function About() {
  return (
    <>
      <h1>about</h1>
      <p><Svg Component={RmCatYelling} width="32px" /> hi yes sometimes i make things. this is a collection of drawings made with the reMarkable e-ink tablet.</p>
      <p>
        <Svg Component={RmFountainPen} width="32px" /> this site is built with <Link href="https://nextjs.org/">next.js</Link>
        <br/><Svg Component={RmGithub} width="32px" /> sauce plz? <Link href="https://github.com/juniferd/rm-static">github</Link>
        <br/><Svg Component={RmCoffee} width="32px" /> shrug
      </p>
    </>
  );
}
