import reducer from './appReducer';
import { updateMarkdown, newMarkdown, deleteMarkdown } from '../actions/actions';

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

    const action = updateMarkdown('something else', 1234);

    const newstate = reducer(state, action);

    expect(newstate).toEqual(
      { 'currentMarkdownID': 1234, 
        'markdownList': [{ 'body': 'something else', 'id': 1234, 'title': 'whatever' }, { 'body': 'Do not Look at that markdown file.', 'id': 5678, 'title': 'whatever' }] }
    );
  });

  it('handles the new tab action', () => {
    const state = {
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

    const action = newMarkdown('title');

    const newstate = reducer(state, action);
    
    expect(newstate).toEqual(
      {  
        'markdownList': [{ 'body': 'Look at that markdown file.', 'id': 1234, 'title': 'whatever' }, 
          { 'body': 'Do not Look at that markdown file.', 'id': 5678, 'title': 'whatever' },
          { 'id': expect.anything(), title: 'title', body: '' }] }
    );
  });

  it('deletes a object from the array', () => {
    const state = {
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

    const action = deleteMarkdown(5678);

    const newstate = reducer(state, action);
    
    expect(newstate).toEqual(
      {  
        'markdownList': [{ 'body': 'Look at that markdown file.', 'id': 1234, 'title': 'whatever' }, 
        ] }
    );
  });

});
