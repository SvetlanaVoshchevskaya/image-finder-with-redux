import {
  ADD_QUERY,
  ADD_PAGE,
  FETCH_IS_LOADING,
  FETCH_IS_SUCCSESS,
  FETCH_IS_ERROR,
  OPEN_MODAL,
  CLOSE_MODAL
} from './action-type';

export const addQuery = query => ({
  type: ADD_QUERY,
  payload: { query }
});
export const addPage = page => ({ type: ADD_PAGE, payload: { page } });

export const fetchIsError = bool => ({ type: FETCH_IS_ERROR, payload: bool });

export const fetchIsLoading = bool => ({
  type: FETCH_IS_LOADING,
  payload: bool
});
export const fetchIsSuccsess = items => ({
  type: FETCH_IS_SUCCSESS,
  payload: items
});
export const openModal = img => ({
  type: OPEN_MODAL,
  payload: img
});

export const closeModal = bool => ({
  type: CLOSE_MODAL,
  payload: bool
});
