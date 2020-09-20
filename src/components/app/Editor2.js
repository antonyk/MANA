import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useClipboard from 'react-use-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import syntax from "./Syntax";

import ComponentConfigArea from '../../../components/ComponentConfigArea'
import { frameworks, uikit } from '../../../data/sample'
import Mustache from 'mustache'

export default function Editor() {
  const router = useRouter()
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
  let [isCopied, setCopied] = useClipboard(compiledTemplate)

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
        <div className='uk-section uk-section-small'>
          <div className='uk-container'>
            <h2 className="uk-text-center">{frameworks.name} {component.name}</h2>
            <div
                id='preview'
                className='uk-card uk-card-default uk-card-body uk-margin-bottom'
              >
              <h3 className='uk-card-title'>Preview</h3>
              <div className="uk-tile uk-tile-muted">
                <div dangerouslySetInnerHTML={createMarkup(compiledTemplate)}></div>
              </div>
            </div>
            <div
              id='settings'
              className='uk-card uk-card-default uk-card-body uk-margin-bottom'
            >
              <h3 className='uk-card-title'>Settings</h3>
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
              <h3 className='uk-card-title uk-display-inline'>
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
              <SyntaxHighlighter language='javascript' style={syntax}>
                {compiledTemplate}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <div className="uk-card uk-card-primary uk-card-body uk-text-center uk-margin-top">
            <h2>We are working on it!</h2>
          </div>
        </div>
      </div>
      
    )
  }
}
