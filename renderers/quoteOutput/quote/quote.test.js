import Quote from './index';

describe('Quote component:', () => {
	const quote = shallow(<Quote />);

	it('should match snapshot', () => expect(quote).toMatchSnapshot());
});
