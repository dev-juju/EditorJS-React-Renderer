import ImageOutput from './index';

describe('ImageOutput renderer:', () => {
	const imageOutput = shallow(<ImageOutput />);

	it('should match snapshot', () => expect(imageOutput).toMatchSnapshot());
});
