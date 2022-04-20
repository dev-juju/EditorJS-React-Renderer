const checklistOutputStyle = {
  container: {
    margin: '5px 0',
  },
  item: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  checkbox: {
    height: '17px',
    width: '17px',
    outline: 'none',
    display: 'inline-block',
    verticalAlign: 'top',
    position: 'relative',
    margin: 0,
    marginRight: '5px',
    cursor: 'pointer',
    border: '1px solid var(--bc, var(--border))',
    background: 'var(--b, var(--background))',
    transition: 'background .3s, border-color .3s, box-shadow .2s',
  },
  label: {
    fontSize: '14px',
    lineHeight: '21px',
    display: 'inline-block',
    verticalAlign: 'top',
    cursor: 'pointer',
    marginLeft: '4px',
  },
};

export default checklistOutputStyle;
