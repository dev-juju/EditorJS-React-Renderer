import ListOutput from './index';

describe('ListOutput renderer:', () => {
	const listOutput = shallow(<ListOutput />);

	it('should match snapshot', () => expect(listOutput).toMatchSnapshot());
});
