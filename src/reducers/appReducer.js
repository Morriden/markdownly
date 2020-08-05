import { UPDATE_MARKDOWN } from '../utils/actions';

export const initialState = 
  {
    markdown: 'Im a test sentence'
  }; 

export default function reducer(state, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
}
