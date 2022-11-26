/** CodeBoxOutput
  *
  * @version 1.0.0
  * @created - 2020.02.12
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.07.17 - Add config parameter
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter
  * @version 1.1.2 - 2022.11.26 - Redefine types
  */

//#region imports
import { createRef, useEffect, useCallback, CSSProperties } from 'react';
import parse from 'html-react-parser';
import type { CodeBoxOutputProps } from '../err';
//#endregion

/**********************************************      GLOBALS      ******************************************/

const supportedKeys = ['container', 'code'];

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

    if (head) head.appendChild(link);
  }
};

const defaultStyle: {[key: string]: CSSProperties} = {
  container: {
    width: '100%',
  },
  code: {
    width: '100%',
    minHeight: '30px',
    boxSizing: 'border-box',
    textAlign: 'left',
    margin: '8px 0',
    marginTop: '15px',
    padding: '10px',
    borderRadius: '2px 2px 2px 0',
    border: 'none !important',
    outline: 'none !important',
    fontSize: '14px',
  }
};


/**********************************************     FUNCTIONS     ******************************************/

const CodeBoxOutput = ({ data, style, classNames, config }: CodeBoxOutputProps): JSX.Element => {
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'object') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  const codeAreaRef = createRef<HTMLElement>();
  const highlightBlock = useCallback(() => {
    if (typeof (window as any).hljs !== 'undefined') (window as any).hljs.highlightBlock(codeAreaRef.current);
    else setTimeout(highlightBlock, 250);
  }, []);

  useEffect(() => {
    if (data && data.theme && codeAreaRef.current) {
      injectHighlightJSCSSElement(data.theme);
      injectHighlightJSScriptElement();
      highlightBlock();
    }
  }, []);

  if (!data || !data.code || typeof data.code != 'string') return <></>;
  const containerStyle = config.disableDefaultStyle ? style.container : { ...defaultStyle.container, ...style.container };
  const codeStyle = config.disableDefaultStyle ? style.code : { ...defaultStyle.code, ...style.code };

  const language = data.language && typeof data.language === 'string' ? data.language : null;

  return (
    <pre style={ containerStyle } className={ classNames.container }>
      <code ref={ codeAreaRef } style={ codeStyle } className={`${ language } ${ classNames.code }`}>{ parse(data.code) }</code>
    </pre>
  );
};

export default CodeBoxOutput;
