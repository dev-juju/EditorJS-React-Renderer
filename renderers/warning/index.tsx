/** WarningOutput
 *
 * @version 1.0.0
 * @created - 2019.08.20
 * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
 *
 * Version History
 * ---------------
 * @version 1.0.1 - 2020.02.12 - Covert to React component - Adombang Munang Mbomndih
 * @version 1.0.2 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
 * @version 1.1.0 - 2021.04.11 - Add classNames parameter - Adombang Munang Mbomndih
 * @version 1.1.1 - 2021.04.12 - Add validation for config parameter - Adombang Munang Mbomndih
 */

//#region imports
import parse from "html-react-parser";
import Warning from "./warning/index";
//#endregion

const supportedKeys = ["container", "icon", "title", "message"];

const WarningOutput = ({
  data,
  style,
  classNames,
  config,
}: ErrRendererProps<"warning">) => {
  if (!data) return "";
  if (!style || typeof style !== "object") style = {};
  if (!config || typeof config !== "object")
    config = { disableDefaultStyle: false };

  supportedKeys.forEach((key) => {
    if (!style[key] || typeof style[key] !== "object") style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== "string")
      classNames[key] = "";
  });
  let message = null,
    title = "Warning";

  if (typeof data === "string") message = data;
  else if (typeof data === "object") {
    if (data.message && typeof data.message === "string")
      message = data.message;
    if (data.title && typeof data.title === "string") title = data.title;
  }

  if (!message) return "";
  return (
    <Warning
      title={parse(title)}
      message={parse(message)}
      customStyle={style}
      config={config}
      classNames={classNames}
    />
  );
};

export default WarningOutput;
