export { createListImagesElement };

function createListImagesElement({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) {
    return `<li><a class='card' href="${largeImageURL}">
    <div class="card__img">
        <img src='${webformatURL}' alt='${tags}' loading='lazy' width = "240px" />
    </div>
    <div class='info'>
        <p class='info-item'>
            <b>Likes</b>
            <span>${likes}</span>
        </p>
        <p class='info-item'>
            <b>Views</b>
            <span>${views}</span>
        </p>
        <p class='info-item'>
            <b>Comments</b>
            <span>${comments}</span>
        </p>
        <p class='info-item'>
            <b>Downloads</b>
            <span>${downloads}</span>
        </p>
    </div>
</a></li>`
}