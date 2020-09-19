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
    cssClass: 'mana-checkbox',
    varname: 'is_disabled',
    initial: false,
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
    cssClass: 'mana-radio',
    varname: 'style',
    initial: 'Default',
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
    cssClass: 'mana-radio',
    varname: 'size',
    initial: 'Default',
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

        <ComponentSettings
          componentId={0}
          schemaId={0}
          settings={buttonSettings}
          template={buttonTemplate}
        />

        <ComponentSnippet template={buttonTemplate} vars={vars} />
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

  //   useEffect(() => {
  //       let html = ''
  //       settings.forEach(item => {
  //         if (item.type) === 'checkbox' {
  //             html += 'checkbox'
  //         }
  //       })
  //     }, [])

  return (
    <div>
      <h1>Component Settings</h1>
      <section>
        <h2>Settings JSON</h2>
        {/* <pre>{JSON.stringify(settings)}</pre> */}
      </section>
      <section>
        <h2>Settings UI</h2>
        <form>
          {settings.map((item) => (
            <SettingsItem setting={item} />
          ))}
        </form>
      </section>
      <section>
        <h2>Output JSON</h2>
        <pre>{JSON.stringify(moustacheJson)}</pre>
      </section>
    </div>
  )
}

function ComponentSnippet(props) {
  //     const
  return ''
}

function SettingsItem(props) {
  const { type, label, initial, cssClass, name } = props.setting
  const [current, setCurrent] = useState(props.setting.current)

  const testing = <h1>HELLO</h1>

  function checkboxChangeHandler(e) {
    setCurrent(e.target.checked)
  }

  function radioChangeHandler(e) {
    setCurrent(e.target.checked)
  }

  return (
    <>
      {/* {testing} */}
      {type == 'checkbox' ? (
        current ? (
          <label>
            <input
              name={name}
              className={'uk-checkbox ' + cssClass}
              type='checkbox'
              checked
              onChange={checkboxChangeHandler}
            />
            {label}
          </label>
        ) : (
          <label>
            <input
              name={name}
              className={'uk-checkbox ' + cssClass}
              type='checkbox'
              onChange={checkboxChangeHandler}
            />
            {label}
          </label>
        )
      ) : type == 'radio' ? (
        <div className='uk-margin uk-grid-small uk-child-width-auto uk-grid'>
          {props.setting.items.map((item) => {
            return item.name == current ? (
              <label>
                <input
                  name={name}
                  className={'uk-radio ' + cssClass}
                  type='radio'
                  checked
                  onChange={radioChangeHandler}
                />
                {item.name}
              </label>
            ) : (
              <label>
                <input
                  name={name}
                  className={'uk-radio ' + cssClass}
                  type='radio'
                  onChange={radioChangeHandler}
                />
                {item.name}
              </label>
            )
          })}
        </div>
      ) : (
        ''
      )}
    </>
  )
}
