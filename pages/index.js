import Head from 'next/head'
import Link from '../components/Link';

export default function Home() {
  return (
    <>
      <Head>
        {/* TODO: fill this in */}
      </Head>
      <>
        <p><Link href="/notebooks">notebooks</Link></p>
        <p><Link href="/about">about</Link></p>
      </>
    </>
  )
}
