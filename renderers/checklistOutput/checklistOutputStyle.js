import { MARGIN, fontFamily } from '../../style/template';

const checklistOutputStyle = {
  container: {
    margin: MARGIN,
    fontFamily
  },
  item: {
    fontFamily,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  checkbox: {
    fontFamily,
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
    fontFamily,
    fontSize: '14px',
    lineHeight: '21px',
    display: 'inline-block',
    verticalAlign: 'top',
    cursor: 'pointer',
    marginLeft: '4px',
  },
};

export default checklistOutputStyle;
