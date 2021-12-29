import NewFetchClass from "./js/creatFeatch";
import { createListImagesElement } from "./js/createListElement";
import { Notify } from 'notiflix/build/notiflix-notify-aio';





// const input = document.querySelectorAll('.searchQuery');
const form = document.getElementById('search-form');
const imagesList = document.querySelector('.gallery__images-list');
const btn = document.querySelector('.load-more')
const newfetch = new NewFetchClass;


form.addEventListener('submit', loadImg);
btn.addEventListener('click', loadMoreImg);


function loadImg(e) {
    e.preventDefault();

    if (newfetch.query !== 0) {
      imagesList.innerHTML = ''  
    };

    newfetch.query = e.currentTarget.elements.searchQuery.value;
    newfetch.resetPage();

    if (newfetch.query == 0) {
       return Notify.success(`Enter your search term`)
    };


    newfetch.fetchImages().then(array => {
        if (array.hits.length === 0) {
           return Notify.failure("Sorry, there are no images matching your search query. Please try again.");
        }
        renderImagesList(array.hits);
        Notify.success(`Hooray! We found ${array.totalHits} images.`);
        
    });

    btn.classList.remove('is-hidden');
    
}


function loadMoreImg() {
    return newfetch.fetchImages().then(array => {
        renderImagesList(array.hits);

        if (newfetch.page * array.hits.length >= array.totalHits) {
            btn.classList.add('is-hidden');

            Notify.info("We're sorry, but you've reached the end of search results.");
        }
    });
}





function renderImagesList(array) {
    const imageElList = array.map((element => createListImagesElement(element))).join('');
    return imagesList.insertAdjacentHTML('beforeend', imageElList)
}