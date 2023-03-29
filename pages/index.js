import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Ariel Navarro | Front-end Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ariel Navarro | Front-end Developer" />
      </Head>
      <Navbar />
    </>
  )
}
