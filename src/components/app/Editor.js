import React from 'react'
import useClipboard from 'react-use-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import syntax from './Syntax'

export default function Template() {
  let codeStringClass = `'uk-button uk-button-secondary'`
  let codeClass = `uk-button uk-button-secondary`
  let codeData = `disabled`
  let codeString = `
  <div>
    <button className=${codeStringClass} ${codeData}>Button</button>
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
      <div className='uk-section uk-section-small'>
        <div className='uk-container'>
          <h2 className='uk-text-center'>UIKit Button</h2>
          <div
            id='preview'
            className='uk-card uk-card-body uk-card-default uk-margin-bottom'
          >
            <h3 className='uk-card-title'>Preview</h3>
            <div className='uk-tile uk-tile-muted'>{code[0]}</div>
          </div>
          <div
            id='settings'
            className='uk-card uk-card-default uk-card-body uk-margin-bottom'
          >
            <h3 className='uk-card-title'>Settings</h3>
            {/* settings go here */}
          </div>
          <div
            id='code'
            className='uk-card uk-card-default uk-card-body uk-margin-bottom'
          >
            <h3 className='uk-card-title uk-display-inline'>Code</h3>
            <a
              onClick={setCopied}
              data-uk-tooltip='Copy To Clipboard!'
              className='uk-float-right'
            >
              <i className='fad fa-copy fa-lg'></i>
              {/* {isCopied ? 'Yes! 👍' : 'Nope! 👎'} */}
            </a>
            <SyntaxHighlighter language='javascript' style={syntax}>
              {codeString}
            </SyntaxHighlighter>
          </div>
          <div className='uk-text-center'>
            <a className='uk-text-center' href=''>
              UIKit Documentation
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
