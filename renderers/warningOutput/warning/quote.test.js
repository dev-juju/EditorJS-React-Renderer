import Warning from './index';

describe('Warning component:', () => {
	const warning = shallow(<Warning />);

	it('should match snapshot', () => expect(warning).toMatchSnapshot());
});
