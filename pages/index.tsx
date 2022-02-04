import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to my Playground
        </h1>

        <div>
          <Image src="/sharmel.jpg" width="400px" height="300px"/>
        </div>

      </main>


    </div>
  )
}
