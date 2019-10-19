import {
  ADD_QUERY,
  ADD_PAGE,
  FETCH_IS_LOADING,
  FETCH_IS_SUCCSESS,
  FETCH_IS_ERROR,
  OPEN_MODAL,
  CLOSE_MODAL
} from "./action-type";

const InitState = {
  galleryArray: [],
  isLoading: true,
  isError: false,
  page: 1,
  value: "",
  modal: false,
  largeIMG: ""
};

const ImageReducer = (state = InitState, action) => {
  switch (action.type) {
    case ADD_QUERY:
      return {
        ...state,
        value: action.payload.query,
        galleryArray: state.value !== action.payload ? [] : [state.galleryArray]
      };
    case ADD_PAGE:
      return { ...state, page: action.payload.page };
    case FETCH_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case FETCH_IS_ERROR:
      return { ...state, isError: action.payload };
    case FETCH_IS_SUCCSESS:
      return {
        ...state,
        galleryArray:
          state.value === "" && state.page === 1
            ? [...action.payload]
            : [...state.galleryArray, ...action.payload]
      };
    case OPEN_MODAL:
      return {
        ...state,
        modal: true,
        largeIMG: action.payload
      };
    case CLOSE_MODAL:
      return { ...state, modal: false };
    default:
      return state;
  }
};
export default ImageReducer;
