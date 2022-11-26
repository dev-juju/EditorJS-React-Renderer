/** HeaderOutput
  *
  * @version 1.0.0
  * @created - 2019.08.20
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert to React component
  * @version 1.0.2 - 2020.07.17 - Add config parameter
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter
  * @version 1.2.0 - 2022.04.20 - Add support for applying different styles/classes to each header level
  * @version 1.2.1 - 2022.11.26 - Redefine types
  */
/// <reference types="react" />
import type { HeaderOutputProps } from '../err';
/**********************************************     FUNCTIONS     ******************************************/
declare const HeaderOutput: ({ data, style, classNames, config }: HeaderOutputProps) => JSX.Element;
export default HeaderOutput;
