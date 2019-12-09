/** DelimiterOutput
 *
 * @version 1.0.0
 * @created - 2019.11.30
 * @author - Tomáš Hylský <thylsky@gmail.com> (https://linktr.ee/thylsky)
 */

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import delimiterOutputStyle from './delimiterOutputStyle';
//#endregion

const DelimiterOutput = style => {
  if (!style || typeof style !== 'object') style = {};

  const delimiterStyle = { ...delimiterOutputStyle, ...style };

  return <hr style={ delimiterStyle } />;
};

export default DelimiterOutput;
