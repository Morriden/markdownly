import reducer from './appReducer';
import { updateMarkdown } from '../actions/actions';

describe('app reducer', () => {
  it('handles the updatemarkdown action', () => {
    const state = {
      markdown: 'something'
    };

    const action = updateMarkdown('something else');

    const newstate = reducer(state, action);

    expect(newstate).toEqual({
      markdown: 'something else'
    });
  });
});