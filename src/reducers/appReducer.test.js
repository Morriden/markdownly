import reducer from './appReducer';
import { updateMarkdown, newMarkdown } from '../actions/actions';

describe('app reducer', () => {
  it('handles the updatemarkdown action', () => {
    const state = {
      currentMarkdownID: 1234,
  
      markdownList: [  
        { 
          id: 1234,
          title: 'whatever', 
          body: 'Look at that markdown file.'
        },
        { 
          id: 5678,
          title: 'whatever', 
          body: 'Do not Look at that markdown file.'
        },
      ]
    };

    const action = updateMarkdown('something else');

    const newstate = reducer(state, action);

    expect(newstate).toEqual(
      { 'currentMarkdownID': 1234, 
        'markdownList': [{ 'body': 'something else', 'id': 1234, 'title': 'whatever' }, { 'body': 'Do not Look at that markdown file.', 'id': 5678, 'title': 'whatever' }] }
    );
  });

  it('handles the new tab action', () => {
    const state = {
      currentMarkdownID: 1234,
  
      markdownList: [  
        { 
          id: 1234,
          title: 'whatever', 
          body: 'Look at that markdown file.'
        },
        { 
          id: 5678,
          title: 'whatever', 
          body: 'Do not Look at that markdown file.'
        },
      ]
    };

    const action = newMarkdown();

    const newstate = reducer(state, action);
    
    expect(newstate).toEqual(
      { 'currentMarkdownID': expect.anything(), 
        'markdownList': [{ 'body': 'Look at that markdown file.', 'id': 1234, 'title': 'whatever' }, 
          { 'body': 'Do not Look at that markdown file.', 'id': 5678, 'title': 'whatever' },
          { 'id': expect.anything(), title: '', body: '' }] }
    );
  });


});
