var dogImages = [
    { dataindex: 1, caption: "frenchie", url: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/smiling-dogs/smiling-dogs-1.jpg'},
    { caption: "forgotBreed", url: 'http://www.waycooldogs.com/wp-content/uploads/2015/10/smiling_dogs.jpg'},
    { caption: "chihuahua", url: 'http://www.fuzzfeed.com/wp-content/uploads/2015/10/Fuzzfeed_happy-smiling-dog-15-960x960_c.jpg'},
    { caption: "funny", url: 'https://gogrove.co.uk/uploads/739/awesome-most-funniest-smile-of-funny-dogs-smiling-inspiration-and-ideas.jpg'},
    { caption: "husky", url: 'https://s-media-cache-ak0.pinimg.com/originals/70/9a/47/709a4751d8d147108f9c4a6108e21ddc.jpg'},
    { caption: "spaniel", url: 'https://i.dailymail.co.uk/i/pix/2011/06/26/article-2008264-0CBC6F8800000578-279_468x348.jpg'},
    { caption: "animated", url: 'https://media.giphy.com/media/10SPpae7SQxpe/giphy.gif'},
    { caption: "chihuahua", url: 'http://www.fuzzfeed.com/wp-content/uploads/2015/10/Fuzzfeed_happy-smiling-dog-15-960x960_c.jpg'},
    { caption: "funny", url: 'https://gogrove.co.uk/uploads/739/awesome-most-funniest-smile-of-funny-dogs-smiling-inspiration-and-ideas.jpg'},
    { caption: "husky", url: 'https://s-media-cache-ak0.pinimg.com/originals/70/9a/47/709a4751d8d147108f9c4a6108e21ddc.jpg'},
    { caption: "spaniel", url: 'https://i.dailymail.co.uk/i/pix/2011/06/26/article-2008264-0CBC6F8800000578-279_468x348.jpg'},
    { caption: "animated", url: 'https://media.giphy.com/media/10SPpae7SQxpe/giphy.gif'},
    { caption: "chihuahua", url: 'http://www.fuzzfeed.com/wp-content/uploads/2015/10/Fuzzfeed_happy-smiling-dog-15-960x960_c.jpg'},
    { caption: "funny", url: 'https://gogrove.co.uk/uploads/739/awesome-most-funniest-smile-of-funny-dogs-smiling-inspiration-and-ideas.jpg'},
    { caption: "husky", url: 'https://s-media-cache-ak0.pinimg.com/originals/70/9a/47/709a4751d8d147108f9c4a6108e21ddc.jpg'},
    { caption: "spaniel", url: 'https://i.dailymail.co.uk/i/pix/2011/06/26/article-2008264-0CBC6F8800000578-279_468x348.jpg'},
    { caption: "animated", url: 'https://media.giphy.com/media/10SPpae7SQxpe/giphy.gif'}
];

var currentImage = 0;


var container = document.querySelector('.image-list');
var lightBoxImage = document.querySelector('.lightbox-img');
var lightbox = document.querySelector('.lightbox');

var exitLightbox = function (){
    lightbox.setAttribute('class', 'lightbox');
}

lightbox.addEventListener('click', exitLightbox);


var handleClick = function(event) {
    lightBoxImage.setAttribute('src', event.currentTarget.src);
    lightbox.setAttribute('class', 'open');
    currentImage = parseInt(event.target.attributes["data-index"].value);
    console.log(currentImage);
    window.addEventListener("keydown", galleryNav);

}

var galleryNav = function(event) {
    switch (event.key) {
        case "ArrowLeft":
            handleClick({
                currentTarget: {src: dogImages[currentImage-1].url},
                target: {attributes: {"data-index": {value: currentImage-1}}}
            })
    }
}


for (var index = 0; index < dogImages.length; index++) {
    var image = dogImages[index];

    var createImage = document.createElement('img');
    createImage.setAttribute('src', image.url);
    createImage.setAttribute('data-index', index);
    createImage.addEventListener('click', handleClick);

    // createImage.addEventListener('click', exitLightBox);

    // var divImages = document.createElement('div');
    // divImages.appendChild(createImage);

    container.appendChild(createImage);
}


// getElementById
// getElementsByClassName
// createElement
// setAttribute
// querySelector