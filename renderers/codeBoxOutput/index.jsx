/** CodeBoxOutput
  *
  * @version 1.0.0
  * @created - 2020.02.12
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
  */

//#region imports
import React, { PureComponent } from 'react';
import ReactHtmlParser from 'react-html-parser';

import codeBoxOutputStyle from './codeBoxOutputStyle';
//#endregion

class CodeBoxOutput extends PureComponent {
  constructor(props){
    super(props);

    this.codeAreaRef = React.createRef();
    this.supportedStyles = ['container', 'code'];
  }

  componentDidMount(){
    let { data={}, style='' } = this.props;

    if (data && data.theme && this.codeAreaRef.current) {
      this.injectHighlightJSCSSElement(data.theme);
      this.injectHighlightJSScriptElement();
      this.highlightBlock();
    }
  }

  highlightBlock = () => {
    if (typeof hljs !== 'undefined') hljs.highlightBlock(this.codeAreaRef.current);
    else setTimeout(this.highlightBlock, 250);
  };

  injectHighlightJSScriptElement = () => {
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

  injectHighlightJSCSSElement = highlightJSCSSURL => {
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

  render(){
    let { data, style, config } = this.props;
    if (!data) return '';
    if (!style || typeof style !== 'object') style = {};

    this.supportedStyles.forEach(customStyle => {
      if (!style[customStyle] || typeof style[customStyle] !== 'object') style[customStyle] = {};
    });

    const containerStyle = config.disableDefaultStyle ? style.container : { ...codeBoxOutputStyle.container, ...style.container };
    const codeStyle = config.disableDefaultStyle ? style.code : { ...codeBoxOutputStyle.code, ...style.code };

    let content = null;
    let language = null;

    if (typeof data === 'string') content = data;
    else if (typeof data === 'object') {
      if (data.code && typeof data.code === 'string') content = data.code;
      if (data.language && typeof data.language === 'string') language = data.language;
    }

    if (!content) return '';
    return (
      <pre style={ containerStyle }>
        <code ref={ this.codeAreaRef } style={ codeStyle } className={ language }>{ ReactHtmlParser(content) }</code>
      </pre>
    );
  }
};

export default CodeBoxOutput;
