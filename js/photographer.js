// PHOTOGRAPHERS PAGE HEADER INFO  

window.data = fetch("FishEyeData.json").then(response => response.json()); //the promise

window.data
    .then(data => {
        // targeting the main class 
        const section = document.querySelector('.main__info');
        const photographerid = getPhotographerId();

        const photographer = data.photographers.find(photographer => photographer.id == photographerid)

        const person = displayHeader(photographer, section);
        displayName(photographer, person);
        displayCity(photographer, person);
        displayTagline(photographer, person);
        displayTags(photographer, person);
        displayImage(photographer, person);

        // insert name of person into contact form 
        document.querySelector('.form-title').innerText = `Contactez-moi ${photographer.name}`;

        // insert price of person into bottom likes bar 
        document.querySelector('#photographer__price').innerText = `${photographer.price}€/jour`;
    });

// Replacing the id of the photographer in the url on refresh part 1
const getPhotographerId = () => {
    let id = window.location.hash.replace('#', '');
    const lastId = localStorage.getItem('photographerId');
    if (!isNaN(+id)) {// if it is a number
        localStorage.setItem('photographerId', id);
    } else if (lastId) {
        id = lastId;
    } else {
        window.location.replace("/");
    }
    return id;
}

// Replacing the id of the photographer in the url on refresh part 2
const url = new URL(window.location);
url.hash = getPhotographerId();
history.replaceState(null, document.title, url);

//Entire header section
const displayHeader = (photographer, section) => {
    const person = document.createElement('div');
    person.classList.add('main__infobg');
    section.appendChild(person);
    return person
}

//Photographer's name
const displayName = (photographer, section) => {
    const name = document.createElement('h1');
    name.classList.add('photographer__name');
    name.classList.add('photographer__name2');
    name.textContent = `${photographer.name}`; 
    name.tabIndex = "2";
    section.appendChild(name);
}

// Photographer's city 
const displayCity = (photographer, section) => {
    const city = document.createElement('p');
    city.classList.add('photographer__city');
    city.classList.add('photographer__city2');
    city.textContent = `${photographer.city}, ${photographer.country}`;
    city.tabIndex = "3";
    section.appendChild(city);
}

//Photographer's tagline
const displayTagline = (photographer, section) => {
    const tagline = document.createElement('p');
    tagline.classList.add('photographer__tagline');
    tagline.classList.add('photographer__tagline2');
    tagline.textContent = `${photographer.tagline}`;
    tagline.tabIndex = "3";
    section.appendChild(tagline);
}

//Photographer's tags
const displayTags = (photographer, section) => {
    const tags = document.createElement('div');
    tags.classList.add('tagLinks');
    tags.classList.add('tagLinksNav2');
    tags.tabIndex = "4";
    section.appendChild(tags);
    for (const tag of photographer.tags) {
        const link = document.createElement('a');
        link.classList.add('tagLink');
        link.href = `#${tag}`;
        link.textContent = `#${tag}`;
        link.tabIndex = "4";
        tags.appendChild(link);
    }
}

//Photographer's circle image 
const displayImage = (photographer, section) => {
    const image = document.createElement('img');
    image.classList.add('photographer__circleimg');
    image.classList.add('photographer__circleimg2');
    image.src = `img2/Photographers_ID_Photos/${photographer.portrait}`;
    image.alt = `${photographer.name}`;
    image.tabIndex = "6";
    section.appendChild(image);
}


////////////////////////////////////////////////////////////////////////////////////
// MEDIA SECTION OF PHOTOGRAPHER'S PAGE 

let currentIndex = 0;
let newIndex = 0;
let slides = [];

// PULLING DATA FROM JSON FILE ONTO PHOTOGRAPHERS PAGE FOR IMAGES  
window.data
    .then(data => {
        // targeting the portfolio section 
        const mediaId = getPhotographerId();
        const mediaArray = data.media.filter(media => media.photographerId == mediaId);
        window.mediaArray = mediaArray; //storing current photographer media 
        window.createList(mediaArray);
    });

window.createList = (mediaArray) => {
    const section = document.querySelector('.portfolio__row');
    section.innerHTML = '';
    // Loop for photographer's media 
    for (let i = 0; i < mediaArray.length; i++) {

        const person = displayPortfolio(mediaArray[i], section);
        displayPhoto(mediaArray[i], person, i);
        displayImageInfo(mediaArray[i], person);
        displayDate(mediaArray[i], person);
        displayPhotoPrice(mediaArray[i], person);
        countLikeButton(mediaArray[i], person);
        // Clicking opens lightbox
        person.querySelector('.portfolio__image').addEventListener('click', (e) => {
            currentIndex = +e.target.getAttribute('data-index');
            openLightbox();
        });
        // Pressing enter opens lightbox
        person.querySelector('.portfolio__image').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === 32) {
                currentIndex = +e.target.getAttribute('data-index');
                openLightbox();
            }
        });
        // Allows focus to stay on lightbox while it's open
        person.querySelector(".portfolio__image").addEventListener('keydown', (e) => { 
            if (e.keyCode === 9) {
                document.querySelector(".lbBackground").focus();
            } 
        });
    };
    displaySlidesBackground(section, mediaArray);
}

// DOM FOR IMAGES ON PHOTOGRAPHERS PAGE

// each photo with image, title, likes and heart button, date, and cost
const displayPortfolio = (media, section) => {
    const person = document.createElement('div');
    person.classList.add('portfolio__column');
    person.classList.add('photographer');
    person.classList.add('showFilter');
    for (const tag of media.tags) {
        person.classList.add(tag);
    }
    section.appendChild(person);
    return person
}

// photo or video image 
const displayPhoto = (media, section, index) => {
    if (media.image) {
        const photo = document.createElement('img');
        photo.classList.add('portfolio__image');
        photo.src = `img2/${media.image}`;
        photo.setAttribute('data-index', index);
        photo.alt = `Image titled ${media.title}`;
        photo.tabIndex = "10";
        section.appendChild(photo);
    } else {
        const video = document.createElement('video');
        video.classList.add('portfolio__image');
        video.src = `img2/${media.video}`;
        video.setAttribute('data-index', index);
        video.alt = `Video titled ${media.title}`;
        video.tabIndex = "10";
        section.appendChild(video);
    }
};

// image info section that includes title and likes container
const displayImageInfo = (media, section) => {
    const info = document.createElement('div');
    info.classList.add('portfolio__image-info');
    section.appendChild(info);
    displayTitle(media, info);
    displayLikesContainer(media, info);
}

// image title
const displayTitle = (media, info) => {
    const title = document.createElement('p');
    title.classList.add('portfolio__image-title');
    title.textContent = `${media.title}`;
    title.tabIndex = "10";
    info.appendChild(title);
}

// likes container with paragraph text for like counter and heart button 
let totalLikes = 0;
const displayLikesContainer = (media, info) => {
    const likesContainer = document.createElement('div');
    likesContainer.classList.add('likes-container');
    info.appendChild(likesContainer);
    displayLikes(media, likesContainer);
    displayHeartContainer(media, likesContainer);

    likesContainer.addEventListener('click', () => {
        document.querySelector('.photographer__likes').innerHTML = 1 + totalLikes++;
    }
        , { once: true });

    likesContainer.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === 32) {
            document.querySelector('.photographer__likes').innerHTML = 1 + totalLikes++;
        }}
        , { once: true });
}

// paragraph for numer of likes 
const displayLikes = (media, likesContainer) => {
    totalLikes += media.likes;
    document.querySelector('.photographer__likes').innerHTML = totalLikes;
    const likes = document.createElement('p');
    likes.classList.add('number-likes');
    likes.textContent = `${media.likes}  `;
    likesContainer.appendChild(likes);
}

// span that hold i element
const displayHeartContainer = (media, likesContainer) => {
    const link = document.createElement('span');
    link.classList.add('like-counter');
    link.tabIndex = "10";
    likesContainer.appendChild(link);
    displayIcon(link);
}

// heart i element from fontawesome
const displayIcon = (link) => {
    const icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-heart');
    icon.classList.add('heart');
    link.appendChild(icon);
}

// image date
const displayDate = (media, section) => {
    const date = document.createElement('p');
    date.classList.add('portfolio__image-date');
    date.textContent = `${media.date}`;
    section.appendChild(date);
}

// image price
const displayPhotoPrice = (media, section) => {
    const price = document.createElement('p');
    price.classList.add('portfolio__image-price');
    price.textContent = `${media.price}€`;
    section.appendChild(price);
}

// Increase likes for image one time when clicked
const countLikeButton = (media, person) => {
    const btnsHeart = person.querySelector('.like-counter');
    btnsHeart.addEventListener('click', () => {
        media.likes++;
        person.querySelector('.number-likes').innerHTML = media.likes;
    },
        { once: true });

    btnsHeart.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === 32) {
            media.likes++;
            person.querySelector('.number-likes').innerHTML = media.likes;
        }}
        , { once: true });
}


// DOM FOR LIGHTBOX

// entire lightbox 
const displaySlidesBackground = (section, mediaArray) => {
    const slides = document.createElement('div');
    slides.classList.add('lbBackground');
    slides.tabIndex = "10";
    section.appendChild(slides);

    const content = document.createElement('div');
    content.classList.add('lbContent');
    content.style.width = `${mediaArray.length * 100}vw`;
    slides.appendChild(content);

    displaySlidesContent(mediaArray, content);
    displayClose(slides);
    displayArrLeft(slides);
    displayArrRight(slides);
}

// lightbox slide which contains image, title, close button, left and right arrows
const displaySlidesContent = (mediaArray, content) => {
    for (const media of mediaArray) {
        displaySlide(media, content);
    }
}

const displaySlide = (media, content) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    content.appendChild(slide);
    displaySlideImg(media, slide);
    displaySlideTitle(media, slide);
}

// slide image or video 
const displaySlideImg = (media, slide) => {
    if (media.image) {
        const slideImg = document.createElement('img');
        slideImg.classList.add('slide__photo');
        slideImg.src = `img2/${media.image}`;
        slideImg.alt = `Image titled ${media.title}`;
        slideImg.tabIndex = "10";
        slide.appendChild(slideImg);
    } else {
        const slideVid = document.createElement('video');
        slideVid.classList.add('slide__photo');
        slideVid.src = `img2/${media.video}`;
        slideVid.alt = `Video titled ${media.title}`;
        slideVid.tabIndex = "10";
        slide.appendChild(slideVid);
    }
}

// slide image title 
const displaySlideTitle = (media, slide) => {
    const slideTitle = document.createElement('p');
    slideTitle.classList.add('slide__title');
    slideTitle.textContent = `${media.title}`;
    slideTitle.tabIndex = "10";
    slide.appendChild(slideTitle);
}

// slide close button 
const displayClose = (content) => {
    const closeSlide = document.createElement('span');
    closeSlide.classList.add('close');
    closeSlide.classList.add('lb-close');
    closeSlide.addEventListener("click", closeLightbox);
    closeSlide.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.querySelector(".lbBackground").style.display = "none";
            window.location.reload();
        }
    });
    closeSlide.tabIndex = "10";
    content.appendChild(closeSlide);
}

// slide left arrow button 
const displayArrLeft = (slides) => {
    const arrLeft = document.createElement('button');
    arrLeft.classList.add('arrow');
    arrLeft.classList.add('left');
    arrLeft.addEventListener("click", leftArrow);
    arrLeft.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            newIndex--;
            navigateSlider();
        }
    });
    arrLeft.tabIndex = "10";
    slides.appendChild(arrLeft);
    displayLeftIcon(arrLeft);
}

const displayLeftIcon = (arrLeft) => {
    const left = document.createElement('i');
    left.classList.add('fas');
    left.classList.add('fa-chevron-left');
    arrLeft.appendChild(left);
}

// slide right arrow button 
const displayArrRight = (slides) => {
    const arrRight = document.createElement('button');
    arrRight.classList.add('arrow');
    arrRight.classList.add('right');
    arrRight.classList.add('block-tab3');
    arrRight.addEventListener("click", rightArrow);
    arrRight.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === 32) {
            newIndex++;
            navigateSlider();
        }
    });
    arrRight.addEventListener('keydown', (e) => { 
        if (e.keyCode == 9) {
            document.querySelector(".lbBackground").focus();
        } 
      });
    arrRight.tabIndex = "10";
    slides.appendChild(arrRight);
    displayRightIcon(arrRight);
}

const displayRightIcon = (arrRight) => {
    const right = document.createElement('i');
    right.classList.add('fas');
    right.classList.add('fa-chevron-right');
    arrRight.appendChild(right);
}

// CODE TO OPEN/CLOSE LIGHTBOX 

// Open lightbox
const openLightbox = () => {
    hideSlides();
    manageArrows();
    slides = [...document.querySelectorAll(".slide")];
    document.querySelector(".lbBackground").style.display = "block";
    document.querySelectorAll(".slide")[currentIndex].style.display = "block";
}
// Close lightbox
const closeLightbox = () => {
    document.querySelector(".lbBackground").style.display = "none";
    window.location.reload();
}
// Controls arrows part 1
const navigateSlider = () => {
    const slidesLength = slides.length;
    hideSlides();

    if (newIndex === -1) newIndex = 0;
    if (newIndex === slidesLength) newIndex = slidesLength - 1;

    slides[newIndex].style.display = "block";
    currentIndex = newIndex;
    manageArrows();
}
// hides slides that aren't active
const hideSlides = () => {
    for (const slide of slides) {
        slide.style.display = "none";
    }
}
// controls arrows part 2
const manageArrows = () => {
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    
    left.style.opacity = "1";
    right.style.opacity = "1";
    if (currentIndex === 0) {
        left.style.opacity = ".25";
    }
    if (currentIndex === slides.length - 1) {
        right.style.opacity = ".25";
    }
}
// controls arrows part 3
 const leftArrow = () => {
    newIndex--;
    navigateSlider();
}

 const rightArrow = () => {
    newIndex++;
    navigateSlider();
}

// Closing lightbox and contact form with escape key

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.location.reload();
        document.querySelector('.bground').style.display = "none";
        document.querySelector('.success-background').style.display = "none";
        document.querySelector('.lbBackground').style.display = "none";
    }
  });
