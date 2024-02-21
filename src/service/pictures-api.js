import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const Key = '40878380-6ee06a62f90a8337fbd0b4096';

const getImages = async (query, page) => {
  const { data } = await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${Key}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
export default getImages;
