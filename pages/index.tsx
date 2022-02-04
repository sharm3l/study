import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="title">
          Welcome to my Playground
        </h1>

        <img src="/sharmel.jpg" />
      </div>


    </div>
  )
}
