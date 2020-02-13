import { fontFamily } from '../../../style/template';

const warningStyle = {
  warningStyle: {
    width: '100%',
    margin: '5px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily
  },
  contentStyle: {
    minWidth: '240px',
    margin: '5px 0',
    padding: '0 8px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    fontFamily
  },
  iconStyle: {
    marginRight: '10px',
    width: '20px',
    height: '20px',
    fontFamily
  },
  messageStyle: {
    fontFamily,
    fontWeight: 600
  }
};

export default warningStyle;
