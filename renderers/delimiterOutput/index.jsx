/** DelimiterOutput
  *
  * @version 1.0.0
  * @created - 2019.11.30
  * @author - Tomáš Hylský <thylsky@gmail.com> (https://linktr.ee/thylsky)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert to React component - Adombang Munang Mbomndih
 */

//#region imports
import React from 'react';
import delimiterOutputStyle from './delimiterOutputStyle';
//#endregion

const DelimiterOutput = ({ style }) => {
  if (!style || typeof style !== 'object') style = {};

  const delimiterStyle = { ...delimiterOutputStyle, ...style };

  return <hr style={ delimiterStyle } />;
};

export default DelimiterOutput;
