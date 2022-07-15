/** ListOutput
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
import listOutputStyle from "./style";
//#endregion

const validListStyles = ["ordered", "unordered"];
const supportedKeys = ["container", "listItem"];

const ListOutput = ({
  data,
  style,
  classNames,
  config,
}: ErrRendererProps<"list">) => {
  if (!data) return "";
  if (!style || typeof style !== "object") style = {};
  if (!config || typeof config !== "object")
    config = { disableDefaultStyle: false };

  supportedKeys.forEach((key) => {
    if (!style[key] || typeof style[key] !== "object") style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== "string")
      classNames[key] = "";
  });

  const containerStyle = config.disableDefaultStyle
    ? style.container
    : { ...listOutputStyle.container, ...style.container };
  const listItemStyle = config.disableDefaultStyle
    ? style.listItem
    : { ...listOutputStyle.listItem, ...style.listItem };
  let content = [],
    listType = "unordered";

  if (typeof data === "string") content.push(data);
  else if (typeof data === "object") {
    if (data.items && Array.isArray(data.items))
      content = data.items.map((item, index) => (
        <li key={index} style={listItemStyle} className={classNames.listItem}>
          {parse(item)}
        </li>
      ));
    if (data.style && validListStyles.includes(data.style))
      listType = data.style;
  }

  if (content.length <= 0) return "";
  if (listType === "ordered")
    return (
      <ol style={containerStyle} className={classNames.container}>
        {content}
      </ol>
    );

  return (
    <ul style={containerStyle} className={classNames.container}>
      {content}
    </ul>
  );
};

export default ListOutput;
