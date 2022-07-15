/** LinkToolOutput
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
  "title",
  "description",
  "image",
  "siteName",
];

const LinkToolOutput = ({
  data,
  style,
  classNames,
  config,
}: ErrRendererProps<"linktool">) => {
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
  const titleStyle = config.disableDefaultStyle
    ? style.title
    : { ...defaultStyle.title, ...style.title };
  const descriptionStyle = config.disableDefaultStyle
    ? style.description
    : { ...defaultStyle.description, ...style.description };
  const siteNameStyle = config.disableDefaultStyle
    ? style.siteName
    : { ...defaultStyle.siteName, ...style.siteName };
  const imageStyle = config.disableDefaultStyle
    ? style.image
    : { ...defaultStyle.image, ...style.image };

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
        {data.meta?.title && (
          <p style={titleStyle} className={classNames.title}>
            {parse(data.meta?.title)}
          </p>
        )}
        {data.meta?.description && (
          <p style={descriptionStyle} className={classNames.description}>
            {parse(data.meta?.description)}
          </p>
        )}
        {data.meta?.site_name && (
          <p style={siteNameStyle} className={classNames.siteName}>
            {parse(data.meta?.site_name)}
          </p>
        )}
      </div>
      {data.meta?.image.url && (
        <img
          src={data.meta?.image.url}
          alt="image of link"
          style={imageStyle}
          className={classNames.image}
        />
      )}
    </div>
  );
};

export default LinkToolOutput;
