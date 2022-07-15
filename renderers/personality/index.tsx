/** PersonalityOutput
 *
 * @version 1.0.0
 * @created - 2022.05.19
 * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
 *
 * Version History
 * ---------------
 *
 */

//#region imports
import parse from "html-react-parser";
import defaultStyle from "./style";
//#endregion

const supportedKeys = [
  "container",
  "textHolder",
  "name",
  "description",
  "photo",
  "link",
];

const PersonalityOutput = ({
  data,
  style,
  classNames,
  config,
}: ErrRendererProps<"personality">) => {
  if (!data || !data.link) return "";
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
    : { ...defaultStyle.container, ...style.container };
  const textHolderStyle = config.disableDefaultStyle
    ? style.textHolder
    : { ...defaultStyle.textHolder, ...style.textHolder };
  const nameStyle = config.disableDefaultStyle
    ? style.name
    : { ...defaultStyle.name, ...style.name };
  const descriptionStyle = config.disableDefaultStyle
    ? style.description
    : { ...defaultStyle.description, ...style.description };
  const linkStyle = config.disableDefaultStyle
    ? style.link
    : { ...defaultStyle.link, ...style.link };
  const photoStyle = config.disableDefaultStyle
    ? style.photo
    : { ...defaultStyle.photo, ...style.photo };

  const handleClick = () => {
    let win = window.open(data.link, "_blank");
    win?.focus();
  };

  return (
    <div
      style={containerStyle}
      className={classNames.container}
      onClick={handleClick}
    >
      <div style={textHolderStyle} className={classNames.textHolder}>
        {data.name && (
          <p style={nameStyle} className={classNames.name}>
            {parse(data.name)}
          </p>
        )}
        {data.description && (
          <p style={descriptionStyle} className={classNames.description}>
            {parse(data.description)}
          </p>
        )}
        <a href={data.link} style={linkStyle} className={classNames.link}>
          {data.link}
        </a>
      </div>
      {data.photo && (
        <img
          src={data.photo}
          alt="image of person"
          style={photoStyle}
          className={classNames.photo}
        />
      )}
    </div>
  );
};

export default PersonalityOutput;
