import React from 'react'
import useClipboard from "react-use-clipboard"
import SyntaxHighlighter from 'react-syntax-highlighter'
import schemas from '../data/saturday-sample' 

export default function Template() {
  
  let codeStringClass= `"uk-button uk-button-secondary"`
  let codeClass = `uk-button uk-button-secondary`
  let codeString = 
`
<div>
  <button className=${codeStringClass}>Button</button>
</div>
`
  let code = [
    <div>
      <button className={codeClass}>Button</button>
    </div>
  ]
  let [isCopied, setCopied] = useClipboard(codeString);

  return (
    <div className="uk-section">
      <div className="uk-container">
        <div>
          <button onClick={setCopied}>
            Copy {isCopied ? "Yes! 👍" : "Nope! 👎"}
          </button>
          
          <SyntaxHighlighter language="javascript">
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div>
          {code[0]}
        </div>
      </div>
    </div>
  )
}