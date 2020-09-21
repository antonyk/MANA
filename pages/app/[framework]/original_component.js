import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useClipboard from 'react-use-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'

import ComponentConfigArea from '../../../src/components/app/ComponentConfigArea'
import { uikit } from '../../../data/sample'
import Mustache from 'mustache'

export default function ComponentTemplate() {
  const router = useRouter()
  // const { component } = router.query
  const [component, setComponent] = useState(
    uikit.components[router.query['component']]
  )
  const [templateData, setTemplateData] = useState({})
  const [compiledTemplate, setCompiledTemplate] = useState('')

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

  useEffect(() => {
    setComponent(uikit.components[router.query['component']])
  }, [router])

  useEffect(() => {
    const compiled = component
      ? Mustache.render(component.template, templateData)
      : ''
    setCompiledTemplate(compiled)
  }, [templateData])

  function createMarkup(markup) {
    return {
      __html: `${markup}`,
    }
  }
  if (component) {
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
          <h1>{component.name}</h1>
          <div className='uk-container uk-container-small'>
            <div
              id='preview'
              className='uk-card uk-card-default uk-card-body uk-margin-bottom'
            >
              <h3 className='uk-card-title uk-text-uppercase'>Preview</h3>
              {console.log(createMarkup(compiledTemplate))}
              <div
                dangerouslySetInnerHTML={createMarkup(compiledTemplate)}
              ></div>
            </div>
            <div
              id='settings'
              className='uk-card uk-card-default uk-card-body uk-margin-bottom'
            >
              <h3 className='uk-card-title uk-text-uppercase'>Settings</h3>
              {component ? (
                <>
                  <ComponentConfigArea
                    settings={component.schema.settings}
                    templateData={templateData}
                    setTemplateData={setTemplateData}
                  />
                </>
              ) : (
                ''
              )}
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
                {compiledTemplate}
                {/* {codeString} */}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return <div>Unknown component?</div>
  }
}
