/** Quote Component
  *
  * Component to display Quote messages to client
  *
  * @version 1.0.0
  * @created - 2019.08.20
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
  */

//#region imports
import React from 'react';
import quoteStyle from './quoteStyle';
import PropTypes from 'prop-types';
//#endregion

const Quote = ({ author, message, config, style: { container, content, message: messageStyle, author: authorStyle }}) => (
  <div style={ config && config.disableDefaultStyle ? quoteStyle.quoteStyle : { ...quoteStyle.quoteStyle, ...container }}>
    <span style={ config && config.disableDefaultStyle ? quoteStyle.contentStyle : { ...quoteStyle.contentStyle, ...content }}>
      <p style={ config && config.disableDefaultStyle ? quoteStyle.messageStyle : { ...quoteStyle.messageStyle, ...messageStyle }}>
        <strong>"</strong>{ message }<strong>"</strong>
      </p>
      <p style={ config && config.disableDefaultStyle ? quoteStyle.authorStyle : { ...quoteStyle.authorStyle, ...authorStyle }}>
        <strong><small>{ author }</small></strong>
      </p>
    </span>
  </div>
);

Quote.propTypes = {
  author: PropTypes.string,
  message: PropTypes.string.isRequired,
  config: PropTypes.object,
  style: PropTypes.shape({
    container: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired
  }),
};

Quote.defaultProps = {
  author: 'Unknown'
};

export default Quote;
