import React from 'react'
import useClipboard from "react-use-clipboard"
import SyntaxHighlighter from 'react-syntax-highlighter'
 
export default function Template() {

  let vars = settings.variable
  let code = vars.code
  let codeString = vars.codeString
  let [isCopied, setCopied] = useClipboard(codeString);

  return (
    <div className="uk-section">
      <div className="uk-container">
        <div >
          <button onClick={setCopied}>
            Copy {isCopied ? "Yes! 👍" : "Nope! 👎"}
          </button>
          <SyntaxHighlighter language="javascript">
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div>
          {code}
        </div>
      </div>
    </div>
  )
}