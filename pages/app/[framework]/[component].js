import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import useClipboard from 'react-use-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'

import ComponentConfigArea from '../../../components/ComponentConfigArea'
import { uikit } from '../../../data/sample'

export default function ComponentTemplate() {
  const router = useRouter()
  const { component } = router.query

  let codeStringClass = `"uk-button uk-button-secondary"`
  let codeClass = `uk-button uk-button-secondary`
  let codeString = `
  <div>
    <button className=${codeStringClass}>Button</button>
  </div>
  `
  let code = [
    <div>
      <button className={codeClass}>Button</button>
    </div>,
  ]
  let [isCopied, setCopied] = useClipboard(codeString)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://pro.fontawesome.com/releases/v5.14.0/css/all.css'
          integrity='sha384-VhBcF/php0Z/P5ZxlxaEx1GwqTQVIBu4G4giRWxTKOCjTxsPFETUDdVL5B6vYvOt'
          crossorigin='anonymous'
        ></link>
      </Head>
      <div className='uk-section'>
        <div className='uk-container uk-container-small'>
          <div
            id='preview'
            className='uk-card uk-card-default uk-card-body uk-margin-bottom'
          >
            <h3 className='uk-card-title uk-text-uppercase'>Preview</h3>
            <div className=''>{code[0]}</div>
          </div>
          <div
            id='settings'
            className='uk-card uk-card-default uk-card-body uk-margin-bottom'
          >
            <h3 className='uk-card-title uk-text-uppercase'>Settings</h3>
            {uikit.components.map((item) => {
              if (item.name == component) {
                return (
                  <>
                    <h1>{item.name}</h1>
                    <ComponentConfigArea settings={item.schema.settings} />
                  </>
                )
              } else return ''
            })}
          </div>
          <div
            id='code'
            className='uk-card uk-card-default uk-card-body uk-margin-bottom'
          >
            <h3 className='uk-card-title uk-text-uppercase uk-display-inline'>
              Code
            </h3>
            <a
              onClick={setCopied}
              data-uk-tooltip='Copy To Clipboard!'
              className='uk-float-right'
            >
              <i className='fad fa-copy fa-lg'></i>
              {/* {isCopied ? "Yes! 👍" : "Nope! 👎"} */}
            </a>
            <SyntaxHighlighter language='javascript'>
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  )
}
