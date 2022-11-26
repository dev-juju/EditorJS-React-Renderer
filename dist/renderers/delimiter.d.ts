/** DelimiterOutput
  *
  * @version 1.0.0
  * @created - 2019.11.30
  * @author - Tomáš Hylský <thylsky@gmail.com> (https://linktr.ee/thylsky)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert to React component
  * @version 1.0.2 - 2020.02.13 - Use SVG stars as delimiter
  * @version 1.0.3 - 2020.07.17 - Add config parameter
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter
  * @version 1.1.2 - 2022.11.26 - Redefine types
 */
/// <reference types="react" />
import type { DelimiterOutputProps } from '../err';
/**********************************************     FUNCTIONS     ******************************************/
declare const DelimiterOutput: ({ style, classNames, config }: DelimiterOutputProps) => JSX.Element;
export default DelimiterOutput;
