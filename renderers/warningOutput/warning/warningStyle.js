import { fontFamily } from '../../../style/template';

const warningStyle = {
  warning: {
    width: '100%',
    margin: '5px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily
  },
  content: {
    minWidth: '240px',
    margin: '5px 0',
    padding: '0 8px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    fontFamily
  },
  icon: {
    marginRight: '10px',
    width: '20px',
    height: '20px',
    enableBackground: 'new 0 0 50 50',
    fontFamily
  },
  message: {
    fontFamily,
    fontWeight: 400
  },
  circle: {
    fill: '#EFCE4A'
  },
  line: {
    fill: 'none',
    stroke: '#FFFFFF',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeMiterlimit: 10
  }
};

export default warningStyle;
