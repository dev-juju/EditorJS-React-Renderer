/** ChecklistOutput
 *
 * @version 1.0.0
 * @created - 2020.05.25
 * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
 *
 * Version History
 * ---------------
 * @version 1.0.1 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
 * @version 1.1.0 - 2021.04.11 - Add classNames parameter - Adombang Munang Mbomndih
 * @version 1.1.1 - 2021.04.12 - Add validation for config parameter - Adombang Munang Mbomndih
 * @version 1.1.2 - 2022.04.20 - fix console errors (make input readOnly)  - Adombang Munang Mbomndih
 */
/// <reference types="react" />
import "./style.css";
declare const ChecklistOutput: ({ data, style, classNames, config, }: ErrRendererProps<"checklist">) => "" | JSX.Element;
export default ChecklistOutput;
