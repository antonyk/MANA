import React from 'react'
import useClipboard from "react-use-clipboard"
import SyntaxHighlighter from 'react-syntax-highlighter'
import schemas from '../data/saturday-sample' 

export default function Template() {

  let code = schemas.code
  // let codeString = vars.codeString
  // let [isCopied, setCopied] = useClipboard(codeString);
  
  return (
    <div className="uk-section">
      <div className="uk-container">
        {/* <div >
          <button onClick={setCopied}>
            Copy {isCopied ? "Yes! 👍" : "Nope! 👎"}
          </button>
          <pre>{JSON.stringify(schemas.codeString, null, 2)}</pre>
          <SyntaxHighlighter language="javascript">
            {codeString}
          </SyntaxHighlighter>
        </div> */}
        <div>
          <pre>{JSON.stringify(code, null, 2)}</pre>
          {/* {code} */}
        </div>
      </div>
    </div>
  )
}