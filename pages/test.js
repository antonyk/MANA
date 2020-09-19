import Head from 'next/head'
import styles from '../styles/Home.module.css'

import * as sample from '../data/sample'
import { useEffect, useState } from 'react'

const generated = {
  collapsed: 'true',
  expanded: 'false',
}

export default function Test() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <ComponentSettings componentId={0} schemaId={0} />
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

function ComponentSettings(props) {
  const [settings, setSettings] = useState(sample.schemas[props.schemaId].code)
  const [moustacheJson, setMoustacheJson] = useState('Initial')

  useEffect(() => {
    // setMoustacheJson('')
    // const tmpJson = JSON.parse(settings)
    // console.log(tmpJson)
    // const result = {}
    // tmpJson.settings.forEach((setting) => {
    //   result[setting.varname] = setting.current
    // })
    // setMoustacheJson(result)
  }, [settings])

  return (
    <>
      <pre>{settings}</pre>
      Hello World!
      <pre>{moustacheJson}</pre>
    </>
  )
}
