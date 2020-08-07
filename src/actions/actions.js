export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = (data, id) => ({
  type: UPDATE_MARKDOWN,
  payload: {
    data,
    id
  }
});

export const NEW_MARKDOWN = 'NEW_MARKDOWN';
export const newMarkdown = title => ({
  type: NEW_MARKDOWN,
  payload: {
    id: Date.now(),
    title: title,
    body: ''
  }
});

export const DELETE_MARKDOWN = 'DELETE_MARKDOWN';
export const deleteMarkdown = id => ({
  type: DELETE_MARKDOWN,
  payload: id
});

export const FILTER_TITLE = 'FILTER_TITLE';
export const filterTitle = (title) => ({
  type: FILTER_TITLE,
  payload: title.toLowerCase()
});

export const FILTER_BODY = 'FILTER_BODY';
export const filterBody = (body) => ({
  type: FILTER_BODY,
  payload: body.toLowerCase()
});
