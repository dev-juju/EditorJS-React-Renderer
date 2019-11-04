/** Quote Component
	*
	* Component to display Quote messages to client
	*
	* @version 1.0.0
	* @created - 2019.08.20
	* @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://portfolio.bomdi.now.sh)
	*/

//#region imports
import React from 'react';
import quoteStyle from './quoteStyle';
import PropTypes from 'prop-types';
//#endregion

const Quote = ({ author, message, style }) => (
	<div style={{ ...quoteStyle.quoteStyle, ...style.container }}>
		<span style={{ ...quoteStyle.contentStyle, ...style.content }}>
			<p style={{ ...quoteStyle.messageStyle, ...style.message }}><strong>"</strong>{ message }<strong>"</strong></p>
			<p style={{ ...quoteStyle.authorStyle, ...style.author }}><strong><small>{ author }</small></strong></p>
		</span>
	</div>
);

Quote.propTypes = {
	author: PropTypes.string,
	message: PropTypes.string.isRequired,
	style: PropTypes.object.isRequired,
};

Quote.defaultProps = {
	author: 'Unknown'
};

export default Quote;
