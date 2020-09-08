import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Config() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Config Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  )
}
