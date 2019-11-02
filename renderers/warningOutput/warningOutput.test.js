import WarningOutput from './index';

describe('WarningOutput renderer:', () => {
	const warningOutput = shallow(<WarningOutput />);

	it('should match snapshot', () => expect(warningOutput).toMatchSnapshot());
});
