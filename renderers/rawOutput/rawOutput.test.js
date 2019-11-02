import RawOutput from './index';

describe('RawOutput renderer:', () => {
	const rawOutput = shallow(<RawOutput />);

	it('should match snapshot', () => expect(rawOutput).toMatchSnapshot());
});
