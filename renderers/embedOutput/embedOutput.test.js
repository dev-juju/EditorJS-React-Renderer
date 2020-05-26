import EmbedOutput from './index';

describe('EmbedOutput renderer:', () => {
  const embedOutput = shallow(<EmbedOutput />);

  it('should match snapshot', () => expect(embedOutput).toMatchSnapshot());
});
