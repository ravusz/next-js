import Head from 'next/head'
import Navbars from '../src/components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Star Wars Info</h1>
        <Navbars />
      </main>
    </div>
  )
}
