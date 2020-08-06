import { UPDATE_MARKDOWN } from '../actions/actions';


export const initialState = {
  currentMarkdownID: 1234,
  
  markdownList: [  
    { 
      id: 1234,
      title: 'whatever', 
      body: 'Look at that markdown file.'
    },
    { 
      id: 5678,
      title: 'new tab', 
      body: 'Look at that markdown file.'
    },
  ]
}; 

export default function reducer(state, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state,  markdownList: state.markdownList.map(markdown => {
        if(markdown.id === state.currentMarkdownID) {
          return { ...markdown, body: action.payload };
        } else {
          return markdown;
        }
      })  };
    default:
      return state;
  }
}
