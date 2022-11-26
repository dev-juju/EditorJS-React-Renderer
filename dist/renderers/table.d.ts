/** TableOutput
  *
  * @version 1.0.0
  * @created - 2019.11.02
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert to React component
  * @version 1.0.2 - 2020.05.21 - Add key to list items
  * @version 1.0.3 - 2020.07.17 - Add config parameter
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter
  * @version 1.1.2 - 2022.11.26 - Redefine types
  */
/// <reference types="react" />
import { TableOutputProps } from '../err';
/**********************************************     FUNCTIONS     ******************************************/
declare const TableOutput: ({ data, style, classNames, config }: TableOutputProps) => JSX.Element;
export default TableOutput;
