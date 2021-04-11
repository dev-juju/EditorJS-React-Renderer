import ChecklistOutput from './index';

describe('ChecklistOutput renderer:', () => {
  const checklistOutput = shallow(<ChecklistOutput />);

  it('should match snapshot', () => expect(checklistOutput).toMatchSnapshot());
});
