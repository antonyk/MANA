import Head from 'next/head'
import useClipboard from "react-use-clipboard";
import Header from '../src/components/app/Header'
import Sidebar from '../src/components/app/Sidebar'

export default function Home() {
  const [isCopied, setCopied] = useClipboard("Text to copy");
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-VhBcF/php0Z/P5ZxlxaEx1GwqTQVIBu4G4giRWxTKOCjTxsPFETUDdVL5B6vYvOt" crossorigin="anonymous"></link>
      </Head>
      <Header/>
      
    </>
  )
}
