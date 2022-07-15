/** VideoOutput
 *
 * @version 1.0.0
 * @created - 2020.09.28
 * @author - Tomáš Hylský <thylsky@gmail.com> (https://linktr.ee/thylsky)
 *
 * Version History
 * ---------------
 * @version 1.1.0 - 2021.04.11 - Add classNames parameter - Adombang Munang Mbomndih
 * @version 1.1.1 - 2021.04.12 - Add validation for config parameter - Adombang Munang Mbomndih
 */

//#region imports
import parse from "html-react-parser";
import videoOutputStyle from "./style";
//#endregion

const supportedKeys = ["video", "figure", "figcaption"];

const VideoOutput = ({
  data,
  style,
  classNames,
  config,
}: ErrRendererProps<"video">) => {
  if (!data || !data.url) return "";
  if (!style || typeof style !== "object") style = {};
  if (!config || typeof config !== "object")
    config = { disableDefaultStyle: false };

  supportedKeys.forEach((key) => {
    if (!style[key] || typeof style[key] !== "object") style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== "string")
      classNames[key] = "";
  });

  const videoStyle = config.disableDefaultStyle
    ? style.video
    : { ...videoOutputStyle.videoStyle, ...style.video };
  videoStyle.width = data.stretched ? "100%" : "";

  const figureStyle = config.disableDefaultStyle
    ? style.figure
    : { ...videoOutputStyle.figureStyle, ...style.figure };

  if (!data.withBorder) figureStyle.border = "none";
  if (!data.withBackground) figureStyle.backgroundColor = "none";

  const figcaptionStyle = config.disableDefaultStyle
    ? style.figcaption
    : { ...videoOutputStyle.figcaptionStyle, ...style.figcaption };

  return (
    <figure style={figureStyle} className={classNames.figure}>
      <video
        style={videoStyle}
        className={classNames.video}
        autoPlay={data.autoPlay}
        muted={data.muted}
        controls={data.controls}
      >
        <source src={data.url} />
        Your browser does not support the video tag.
      </video>
      {data.caption && (
        <figcaption style={figcaptionStyle} className={classNames.figcaption}>
          {parse(data.caption)}
        </figcaption>
      )}
    </figure>
  );
};

export default VideoOutput;
