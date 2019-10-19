import { fetchIsLoading, fetchIsSuccsess, fetchIsError } from './action';
import { axiosData } from '../utils/API';

export const fetchData = url => dispatch => {
  dispatch(fetchIsLoading(true));

  axiosData(url)
    .then(items => {
      dispatch(fetchIsLoading(false));
      dispatch(fetchIsSuccsess(items.data.hits));
    })
    .catch(() => dispatch(fetchIsError(true)));
};
