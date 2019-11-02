import ParagraphOutput from './index';

describe('ParagraphOutput renderer:', () => {
	const paragraphOutput = shallow(<ParagraphOutput />);

	it('should match snapshot', () => expect(paragraphOutput).toMatchSnapshot());
});
