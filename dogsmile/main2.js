var dogImages = [
    { caption: "frenchie", url: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/smiling-dogs/smiling-dogs-1.jpg'},
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
var currentI;
// var currentImage = 0;


var container = document.querySelector('.image-list');
var lightBoxImage = document.querySelector('.lightbox-img');
var lightbox = document.querySelector('.lightbox');
for (var index = 0; index < dogImages.length; index++) {
    (function(){
        var currentImageIndex = index;
        var image = dogImages[index];
        var createImage = document.createElement('img');
        createImage.setAttribute('src', image.url);

        var handleClick = function(event) {
            currentI = currentImageIndexi;
            lightBoxImage.setAttribute('src', event.currentTarget.src);
            lightbox.setAttribute('class', 'open');
        }
        
        // createImage.setAttribute('data-index', index);
        createImage.addEventListener('click', handleClick);

        container.appendChild(createImage);
    
    })();
}

var galleryNav = function(event) {
    switch (event.key) {
        case "ArrowLeft":
            currentI = (currentI + dogImages.length - 1) % dogImages.length;
            lightBoxImage.setAttribute('src', dogImages[currentI].url);
            break;
        case "ArrowRight":
            currentI = (currentI + 1) % dogImages.length;
            lightBoxImage.setAttribute('src', dogImages[currentI].url);
            break;
        case "Escape":
            lightbox.setAttribute('class', 'lightbox');
        }
    }


window.addEventListener("keydown", galleryNav);