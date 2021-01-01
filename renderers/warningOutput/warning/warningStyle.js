import { fontFamily } from '../../../style/template';

const warningStyle = {
  container: {
    width: '100%',
    margin: '20px 8px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily
  },
  icon: {
    width: '30px',
    enableBackground: 'new 0 0 50 50',
    fontFamily
  },
  title: {
    fontFamily,
    fontWeight: 400,
    textTransform: 'uppercase',
    margin: 0,
    marginRight: '15px',
    marginLeft: '5px',
    fontSize: '90%',
  },
  message: {
    fontFamily,
    color: 'goldenrod',
    textAlight: 'left',
    fontSize: '90%',
    margin: 0,
  },
  circle: {
    fill: '#EFCE4A'
  },
  line: {
    fill: 'none',
    stroke: '#FFFFFF',
    strokeWidth: 5,
    strokeLinecap: 'round',
    strokeMiterlimit: 10
  }
};

export default warningStyle;
