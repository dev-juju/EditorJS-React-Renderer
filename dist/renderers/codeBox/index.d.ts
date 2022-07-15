/** CodeBoxOutput
  *
  * @version 1.0.0
  * @created - 2020.02.12
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter - Adombang Munang Mbomndih
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter - Adombang Munang Mbomndih
  */
import React from 'react';
declare class CodeBoxOutput extends React.PureComponent {
    codeAreaRef: any;
    supportedKeys: string[];
    props: ErrRendererProps;
    constructor(props: any);
    componentDidMount(): void;
    highlightBlock: () => void;
    injectHighlightJSScriptElement: () => void;
    injectHighlightJSCSSElement: (highlightJSCSSURL: any) => void;
    render(): any;
}
export default CodeBoxOutput;
