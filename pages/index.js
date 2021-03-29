import Head from 'next/head'
import Card from './components/Card';

export default function Home() {
  return (
    <div className="h-screen mx-auto bg-gray-800 md:pt-16">
      <Head>
        <title>Daryl Findlay - Web Engineer 👨🏼‍💻</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto rounded-xl bg-gray-300 p-8">
        <h1 className="text-6xl font-bold tracking-wide font-mono text-red-900">Daryl's Portfolio</h1>

        <div className="flex justify-between flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="mx-auto">
          <p className="text-xl">
            Built with NextJS and Tailwind!
          </p>
        </div>
      </main>
    </div>
  )
}
