import Head from 'next/head'
import styles from '../styles/Home.module.css'

import * as sample from '../data/sample'
import { useEffect, useState } from 'react'

const generated = {
  collapsed: 'true',
  expanded: 'false',
}

const buttonSettings = [
  {
    name: 'button-disabled',
    type: 'checkbox',
    class: 'mana-checkbox',
    varname: 'is_disabled',
    default: false,
    current: false,
    label: 'Disabled',
  },
  {
    name: 'button-style',
    type: 'radio',
    items: [
      { name: 'Default', value: '.uk-button-default' },
      { name: 'Primary', value: '.uk-button-primary' },
      { name: 'Secondary', value: '.uk-button-secondary' },
      { name: 'Danger', value: '.uk-button-danger' },
      { name: 'Text', value: '.uk-button-text' },
      { name: 'Link', value: '.uk-button-link' },
    ],
    class: 'mana-radio',
    varname: 'style',
    default: 'Default',
    current: 'Default',
    label: 'Style',
  },
  {
    name: 'button-size',
    type: 'radio',
    items: [
      { name: 'Default', value: '' },
      { name: 'Small', value: '.uk-button-small' },
      { name: 'Large', value: '.uk-button-large' },
    ],
    class: 'mana-radio',
    varname: 'size',
    default: 'Default',
    current: 'Default',
    label: 'Size',
  },
]

const labelSettings = [
  {
    name: 'button-style',
    type: 'radio',
    items: [
      { name: 'Default', value: '' },
      { name: 'Success', value: '.uk-button-success' },
      { name: 'Warning', value: '.uk-button-warning' },
      { name: 'Danger', value: '.uk-button-danger' },
    ],
    class: 'mana-radio',
    varname: 'style',
    default: 'Default',
    label: 'Style',
  },
]

const buttonTemplate = `
    <button className="uk-button {{style}} {{size}} {{is_disabled}}"></button>
`

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

        <ComponentSettings
          componentId={0}
          schemaId={0}
          settings={buttonSettings}
          template={buttonTemplate}
        />
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
  const [settings, setSettings] = useState(props.settings)
  const [moustacheJson, setMoustacheJson] = useState('Initial')

  useEffect(() => {
    setMoustacheJson('')
    const result = {}
    settings.forEach((setting) => {
      result[setting.varname] = setting.current
    })
    setMoustacheJson(result)
  }, [settings])

  return (
    <>
      <pre>{JSON.stringify(settings)}</pre>
      Hello World!
      <pre>{JSON.stringify(moustacheJson)}</pre>
    </>
  )
}
