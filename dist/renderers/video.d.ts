/** VideoOutput
  *
  * @version 1.0.0
  * @created - 2020.09.28
  * @author - Tomáš Hylský <thylsky@gmail.com> (https://linktr.ee/thylsky)
  *
  * Version History
  * ---------------
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter
  * @version 1.1.2 - 2022.11.26 - Redefine types
  */
/// <reference types="react" />
import type { VideoOutputProps } from '../err';
/**********************************************     FUNCTIONS     ******************************************/
declare const VideoOutput: ({ data, style, classNames, config }: VideoOutputProps) => JSX.Element;
export default VideoOutput;
