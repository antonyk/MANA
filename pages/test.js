import { useEffect, useState } from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ComponentConfigArea from '../components/ComponentConfigArea'

import { uikit } from '../data/sample'

const generated = {
  collapsed: 'true',
  expanded: 'false',
}

export default function Test() {
  const [vars, setVars] = useState()

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

        <section>
          {uikit.components.map((item) => (
            <>
              <h1>{item.name}</h1>
              <ComponentConfigArea settings={item.schema.settings} />
            </>
          ))}

          {/* <ComponentSnippet template={buttonTemplate} vars={vars} /> */}
        </section>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}

function ComponentSnippet(props) {
  //     const
  return ''
}
