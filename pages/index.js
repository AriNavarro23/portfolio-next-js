import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'



export default function Home() {
  return (
    <>
      <Head>
        <title>Ariel Navarro | Front-end Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ariel Navarro | Front-end Developer" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
