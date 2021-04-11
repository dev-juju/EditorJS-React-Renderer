import QuoteOutput from './index';

describe('QuoteOutput renderer:', () => {
	const quoteOutput = shallow(<QuoteOutput />);

	it('should match snapshot', () => expect(quoteOutput).toMatchSnapshot());
});
