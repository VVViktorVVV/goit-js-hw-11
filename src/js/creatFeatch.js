const axios = require('axios');

export default class NewFetchClass {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 40;
    
  };

  async fetchImages() {
    try {
              
      const response = await axios.get('https://pixabay.com/api/', {
          params: {
          key: '25005048-7b53cf58cba95630f757b4484',
          q: this.searchQuery,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          per_page: this.perPage,
          page: this.page,
        },
      });
      console.log(response.data)
      this.incrementPage();
      

      return response.data;
    }

    
    
    catch (error) {
      console.error(error);
    }
  }

  get query() {
    return this.searchQuery;
  }
  
  set query(newQwery) {
    this.searchQuery = newQwery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

 

}



