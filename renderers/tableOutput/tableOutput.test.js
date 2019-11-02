import TableOutput from './index';

describe('TableOutput renderer:', () => {
	const tableOutput = shallow(<TableOutput />);

	it('should match snapshot', () => expect(tableOutput).toMatchSnapshot());
});
