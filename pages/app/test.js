import React from 'react';
import useClipboard from "react-use-clipboard";
import SyntaxHighlighter from 'react-syntax-highlighter';

export default function Test() {
  let code = [<ul data-uk-accordion>
    <li className="uk-open">
      <a className="uk-accordion-title" href="#">Item 1</a>
      <div className="uk-accordion-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </li>
    <li>
      <a className="uk-accordion-title" href="#">Item 2</a>
      <div className="uk-accordion-content">
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
      </div>
    </li>
    <li>
      <a className="uk-accordion-title" href="#">Item 3</a>
      <div className="uk-accordion-content">
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
      </div>
    </li>
  </ul>]

  let codeString=(code)=>code
  
  
  let [isCopied, setCopied] = useClipboard(codeString);
  return (
    <div className="uk-section">
      <div className="uk-container">
        <div >
          <button onClick={setCopied}>
            Copy {isCopied ? "Yes! 👍" : "Nope! 👎"}
          </button>
          
          <SyntaxHighlighter language="javascript">
            {codeString(code[0])}
          </SyntaxHighlighter>
        </div>
        <div>
          {code}
        </div>
      </div>
    </div>
  );
}