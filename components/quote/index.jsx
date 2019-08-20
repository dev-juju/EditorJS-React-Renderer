/** Quote Component
 * 
 * Component to display Quote messages to client
 * 
 * @version 1.0.0
 * @created - 2019.08.20
 * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://portfolio.bomdi.now.sh)
 */

//#region imports
import quoteStyle from './quoteStyle';

import PropTypes from 'prop-types';
//#endregion

const Quote = ({ author, message, customStyle }) => (
	<div style={{ ...quoteStyle.quoteStyle, ...customStyle }}>
		<span style={ quoteStyle.contentStyle }>
			<p><strong>"</strong>{ message }<strong>"</strong></p>
			<p style={ quoteStyle.authorStyle }><strong>{ author }</strong></p>
		</span>
	</div>
);

Quote.propTypes = {
	author: PropTypes.string,
	message: PropTypes.string.isRequired,
	customStyle: PropTypes.object,
};

Quote.defaultProps = {
	author: 'Unknown',
	customStyle: {}
};

export default Quote;
