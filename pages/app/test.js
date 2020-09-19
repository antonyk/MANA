import React from "react";
import ReactDOMServer from "react-dom/server";
import useClipboard from "react-use-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function Test() {
  let code = [
    {
      data: (
        <ul data-uk-accordion>
          <li className="uk-open">
            <a className="uk-accordion-title" href="#">
              Item 1
            </a>
            <div className="uk-accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">
              Item 2
            </a>
            <div className="uk-accordion-content">
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor reprehenderit.
              </p>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">
              Item 3
            </a>
            <div className="uk-accordion-content">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat proident.
              </p>
            </div>
          </li>
        </ul>
      ),
    },
  ];

  let codeToString = (code) => {
    let formatted = ReactDOMServer.renderToString(code);
    formatted.toString();
    return formatted;
  };

  let codeFormatter = (string) => {
    //insert \n every time the string has an ">"
    let arr = string.split(/(><)/);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == ">") {
        arr.splice(i + 1, 0, "\n");
      }
      arr.join("");
    }

    return arr;
  };

  let codeString = codeToString(code[0].data);

  function createMarkup(codeString) {
    return { __html: `${codeString}` };
  }

  console.log(codeString);
  console.log(codeFormatter(codeString));

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
        <div dangerouslySetInnerHTML={createMarkup(codeString)} />
      </div>
    </div>
  );
}
