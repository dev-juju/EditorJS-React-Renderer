import DelimiterOutput from './index';

describe('DelimiterOutput renderer:', () => {
  const delimiterOutput = shallow(<DelimiterOutput />);

  it('should match snapshot', () => expect(delimiterOutput).toMatchSnapshot());
});
