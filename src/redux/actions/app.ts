import { LOAD_MENU } from 'redux/actions/actionTypes';

export const loadMenu = (component) => (dispatch) =>
  dispatch({
    type: LOAD_MENU,
    component
  });
