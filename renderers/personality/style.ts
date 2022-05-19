
const personalityOutputStyle = {
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
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: 0
  },
  description: {
    textAlign: 'left',
    lineHeight: '1.7',
    cursor: 'pointer',
    fontWeight: 200,
    fontSize: '15px'
  },
  photo: {
    width: '15%',
    borderRadius: '4px',
    flexGrow: 1
  },
  link: {
    textDecoration: 'none',
    color: '#42A5F5',
    cursor: 'pointer',
    fontSize: '12px'
  },
};

export default personalityOutputStyle;
