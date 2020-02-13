/** Warning Component
  *
  * Component to display warning messages to client
  *
  * @version 1.0.0
  * @created - 2019.08.20
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  */

//#region imports
import React from 'react';
import warningStyle from './warningStyle';
import PropTypes from 'prop-types';
//#endregion

const Warning = ({ message, customStyle }) => (
  <div style={ warningStyle.warning }>
    <span style={ warningStyle.content }>
      <svg style={ warningStyle.icon }  version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
          viewBox='0 0 50 50' style='enable-background:new 0 0 50 50;' xmlSpace='preserve'>
        <circle style={ warningStyle.circle } cx='25' cy='25' r='25'/>
        <line style={ warningStyle.line } x1='25' y1='10' x2='25' y2='32'/>
        <line style={ warningStyle.line } x1='25' y1='37' x2='25' y2='39'/>
        <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
      </svg>
      <p style={{ ...warningStyle.message, ...customStyle }}>{ message }</p>
    </span>
  </div>
);

Warning.propTypes = {
  message: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
};

Warning.defaultProps = {
  customStyle: {}
};

export default Warning;
