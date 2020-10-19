import Link from '../../components/Link';

export default function About() {
  return (
    <>
      <h1>about</h1>
      <p>hi yes sometimes i make things. this is a collection of drawings made with the reMarkable e-ink tablet.</p>
      <p>this site is built with <Link href="https://nextjs.org/">next.js</Link>
      <br/>sauce plz? <Link href="https://github.com/juniferd/rm-static">github</Link></p>
    </>
  );
}
