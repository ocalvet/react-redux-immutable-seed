export const FETCH_IMAGE = 'FETCH_IMAGE';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_ERROR = 'FETCH_IMAGE_ERROR';

export const fetchImage = () => ({ type: FETCH_IMAGE });
export const fetchImageSuccess = (url) => ({ type: FETCH_IMAGE_SUCCESS, url });
export const fetchImageError = (error) => ({ type: FETCH_IMAGE_ERROR, error });
