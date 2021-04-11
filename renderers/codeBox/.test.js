import CodeBoxOutput from './index';

describe('CodeBoxOutput renderer:', () => {
  const codeBoxOutput = shallow(<CodeBoxOutput />);

  it('should match snapshot', () => expect(codeBoxOutput).toMatchSnapshot());
});
