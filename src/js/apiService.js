import axios from 'axios'
const apiKey = '21721342-68d9d1f48726b2a3d1f97678a';
export default {
  searchQuery: '',
  page: 1,
  async fetchImages() {
    const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;
      return await axios.get(BASE_URL)
          .then(({ data: { hits } }) =>  {
        this.page += 1;
        return hits;
      })
      .catch(error => console.log(error)); 
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
