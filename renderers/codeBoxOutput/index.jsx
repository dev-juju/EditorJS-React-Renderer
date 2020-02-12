/** CodeBoxOutput
  *
  * @version 1.0.0
  * @created - 2020.02.12
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  */

//#region imports
import React, { useEffect, useRef } from 'react';
import ReactHtmlParser from 'react-html-parser';
import codeBoxOutputStyle from './codeBoxOutputStyle';
//#endregion

const CodeBoxOutput = ({ data, style }) => {
  if (!data) return '';

  const codeAreaRef = useRef();
  let content = null;
  let language = null;

  const injectHighlightJSScriptElement = () => {
    const highlightJSScriptURL = 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/highlight.min.js';
    const highlightJSScriptElements = document.querySelectorAll('script');
    let isAlreadyIncluded = false;

    for (let i = 0; i < highlightJSScriptElements.length; i++) {
      if (highlightJSScriptElements[i].src.includes('highlight.min.js')) {
        isAlreadyIncluded = true;
        break;
      }
    }
    if (!isAlreadyIncluded) {
      const script = document.createElement('script');
      const head = document.querySelector('head');
      script.setAttribute('src', highlightJSScriptURL);

      if (head) head.appendChild(script);
    }
  };

  const injectHighlightJSCSSElement = highlightJSCSSURL => {
    if (!highlightJSCSSURL || typeof highlightJSCSSURL !== 'string') return;

    const highlightJSCSSElements = document.querySelectorAll('link');
    let isAlreadyIncluded = false;

    for (let i = 0; i < highlightJSCSSElements.length; i++) {
      if (highlightJSCSSElements[i].href === highlightJSCSSURL) {
        isAlreadyIncluded = true;
        break;
      }
    }
    if (!isAlreadyIncluded) {
      const link = document.createElement('link');
      const head = document.querySelector('head');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', highlightJSCSSURL);
      link.setAttribute('id', highlightCSSID);

      if (head) head.appendChild(link);
    }
  };

  // useEffect(() => {
  //   if (data && data.theme && codeAreaRef && codeAreaRef.current) {
  //     injectHighlightJSCSSElement(data.theme);
  //     injectHighlightJSScriptElement();
  //     hljs.highlightBlock(codeAreaRef.current);
  //   }
  // }, [data, codeAreaRef]);

  if (typeof data === 'string') content = data;
  else if (typeof data === 'object') {
    if (data.code && typeof data.code === 'string') content = data.code;
    if (data.language && typeof data.language === 'string') language = data.language;
  }

  if (!content) return '';
  return (
    <pre>
      <div ref={ codeAreaRef } style={ codeBoxOutputStyle } className={ language }>{ ReactHtmlParser(content) }</div>
    </pre>
  );
};

export default CodeBoxOutput;
