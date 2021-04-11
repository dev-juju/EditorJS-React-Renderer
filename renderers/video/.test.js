import VideoOutput from './index';

describe('VideoOutput renderer:', () => {
	const videoOutput = shallow(<VideoOutput />);

	it('should match snapshot', () => expect(videoOutput).toMatchSnapshot());
});
