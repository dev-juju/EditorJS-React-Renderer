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
/// <reference types="react" />
import type { CodeBoxOutputProps } from '../err';
/**********************************************     FUNCTIONS     ******************************************/
declare const CodeBoxOutput: ({ data, style, classNames, config }: CodeBoxOutputProps) => JSX.Element;
export default CodeBoxOutput;
