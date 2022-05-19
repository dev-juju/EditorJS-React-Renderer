
const defaultStyle = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    minWidth: '280px',
    flexWrap: 'wrap-reverse',
    border: '1px solid #eee',
    boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  textHolder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '80%',
    padding: '12px 20px'
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0,
    cursor: 'pointer'
  },
  description: {
    textAlign: 'left',
    lineHeight: '1.7',
    fontWeight: 200,
    fontSize: '15px',
    cursor: 'pointer'
  },
  image: {
    width: '15%',
    borderRadius: '4px',
    cursor: 'pointer',
    flexGrow: 1
  },
  siteName: {
    color: 'grey',
    cursor: 'pointer',
    margin: 0,
    fontSize: '12px',
  },
};

export default defaultStyle;
