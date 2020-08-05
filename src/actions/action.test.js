import { UPDATE_MARKDOWN, updateMarkdown } from './actions';

describe('actions', () => {
  it('will update markdown state', () => {
    const action = updateMarkdown('tester');

    expect(action).toEqual({
      type: UPDATE_MARKDOWN,
      payload: 'tester'
    });
  });
});
