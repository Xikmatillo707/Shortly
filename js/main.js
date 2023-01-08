const elUrlSHortener = document.querySelector('.url-shortener')
const elUrlSHortenerForm = document.querySelector('.js-url-shortener__form');
const elUrlSHortenerResults = document.querySelector('.url-shortener__results');

if( elUrlSHortenerForm){
    elUrlSHortenerForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    
    elUrlSHortenerResults.classList.add('url-shortener__results--open');
    });
}

if(elUrlSHortener){
    elUrlSHortener.addEventListener('click', function (evt) {
        if (evt.target.matches('.js-copy-short-link-button')){
        
            // change button text
        evt.target.textContent ='Copied!';

        //  change button bgcolor
        evt.target.classList.add('url-shortener__copy-button--copied');
        
// copy short link to clipboard
navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);

    //  Reset button text and class after 1 second
setTimeout(function (){
    evt.target.textContent ='Copy';
    evt.target.classList.remove('url-shortener__copy-button--copied');

},1000);    
}
    });
}