export const FETCH_IMAGE = 'FETCH_IMAGE';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_ERROR = 'FETCH_IMAGE_ERROR';

export const fetchImage = () => ({ type: FETCH_IMAGE });
export const fetchImageSuccess = (image) => ({ type: FETCH_IMAGE_SUCCESS, image });
export const fetchImageError = (error) => ({ type: FETCH_IMAGE_ERROR, error });
