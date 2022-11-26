/** ChecklistOutput
  *
  * @version 1.0.0
  * @created - 2020.05.25
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.07.17 - Add config parameter
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter
  * @version 1.1.2 - 2022.04.20 - fix console errors (make input readOnly)
  * @version 1.1.3 - 2022.11.26 - Redefine types
  */
/// <reference types="react" />
import type { ChecklistOutputProps } from '../err';
/**********************************************     FUNCTIONS     ******************************************/
declare const ChecklistOutput: ({ data, style, classNames, config }: ChecklistOutputProps) => JSX.Element;
export default ChecklistOutput;
