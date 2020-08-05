import { getMarkdown, getMarkdownPreview } from './markdownSelectors';

describe('getMarkdown selector', () => {
  it('will get the markdown with the selector', () => {
    const state = {
      markdown: 'test'
    };

    const newmarkdown = getMarkdown(state);

    expect(newmarkdown).toEqual('test');
  });
});

describe('getMarkdownPreview selector', () => {
  it('will get the markdown preview with the selector', () => {
    const state = {
      markdown: 'test'
    };

    const newmarkdown = getMarkdownPreview(state);

    expect(newmarkdown).toEqual('<p>test</p>\n');
  });
});
