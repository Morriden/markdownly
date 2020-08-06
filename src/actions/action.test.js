import { UPDATE_MARKDOWN, updateMarkdown, newMarkdown, NEW_MARKDOWN } from './actions';

describe('actions', () => {
  it('will update markdown state', () => {
    const action = updateMarkdown('tester');

    expect(action).toEqual({
      type: UPDATE_MARKDOWN,
      payload: 'tester'
    });
  });

  it('will make a new markdown state', () => {
    const action = newMarkdown();
    expect(action).toEqual({
      type: NEW_MARKDOWN,
      payload: {
        id: expect.anything(),
        title: '',
        body: ''
      }
    });
  });
});
