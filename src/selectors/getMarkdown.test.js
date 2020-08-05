import getMarkdown from './getMarkdown';

describe('getMarkdown selector', () => {
  it('will get the markdown with the selector', () => {
    const state = {
      markdown: 'test'
    };

    const newmarkdown = getMarkdown(state);

    expect(newmarkdown).toEqual('test');
  });
});
