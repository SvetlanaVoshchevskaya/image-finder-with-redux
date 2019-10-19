const API_KEY = "10567453-efb51e377e8530461eabbaf35";
const URL = "https://pixabay.com/api/";

export const urlRequest = (query, page) =>
  `${URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`;
