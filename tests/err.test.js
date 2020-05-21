import ERR from '../index.jsx';

describe('ERR renderer:', () => {
  const err = shallow(<ERR />);

  it('should match snapshot', () => expect(err).toMatchSnapshot());
});
