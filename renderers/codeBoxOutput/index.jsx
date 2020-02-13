/** CodeBoxOutput
  *
  * @version 1.0.0
  * @created - 2020.02.12
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  */

//#region imports
import React, { PureComponent } from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

import codeBoxOutputStyle from './codeBoxOutputStyle';
//#endregion

class CodeBoxOutput extends PureComponent {
  constructor(props){
    super(props);

    this.codeAreaRef = React.createRef();
  }

  componentDidMount(){
    const { data, style } = this.props;

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
    const { data, style } = this.props;
    if (!data) return '';

    let content = null;
    let language = null;

    if (typeof data === 'string') content = data;
    else if (typeof data === 'object') {
      if (data.code && typeof data.code === 'string') content = data.code;
      if (data.language && typeof data.language === 'string') language = data.language;
    }

    if (!content) return '';
    return (
      <pre>
        <div ref={ this.codeAreaRef } style={ codeBoxOutputStyle } className={ language }>{ ReactHtmlParser(content) }</div>
      </pre>
    );
  }
};

CodeBoxOutput.propTypes = {
  style: PropTypes.string,
  data: PropTypes.object,
};

CodeBoxOutput.defaultProps = {
  style: '',
  data: {}
};

export default CodeBoxOutput;
