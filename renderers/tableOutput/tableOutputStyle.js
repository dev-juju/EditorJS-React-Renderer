import { MARGIN, fontFamily } from '../../style/template';

const tableOutputStyle = {
	table: {
		margin: 0,
		borderSpacing: '1px 2px',
		margin: MARGIN,
		fontFamily
	},
	th: {
		minWidth: '100px',
		padding: '12px 15px',
		borderRadius: '2px',
		backgroundColor: 'lightblue',
		fontFamily
	},
	td: {
		minWidth: '100px',
		padding: '12px 15px',
		borderRadius: '2px',
		textAlign: 'left',
		fontFamily
	},
	// table: `margin: 0;border-spacing: 1px 2px;margin: ${ MARGIN };font-family: ${ fontFamily };`,
	// th: `min-width: 100px;padding: 12px 15px;border-radius: 2px;background-color: lightblue;font-family: ${ fontFamily };`,
	// td: `min-width: 100px;padding: 12px 15px;border-radius: 2px;text-align: left;font-family: ${ fontFamily };`
};

export default tableOutputStyle;
