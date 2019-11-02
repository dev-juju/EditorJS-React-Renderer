import HeaderOutput from './index';

describe('HeaderOutput renderer:', () => {
	const headerOutput = shallow(<HeaderOutput />);

	it('should match snapshot', () => expect(headerOutput).toMatchSnapshot());
});
