import { searchForPhotos, scrollHandler } from './handlers.js';
const searchForm = document.querySelector('#searchPhotosForm');
searchForm.addEventListener('submit', searchForPhotos);
window.addEventListener('scroll', scrollHandler);
