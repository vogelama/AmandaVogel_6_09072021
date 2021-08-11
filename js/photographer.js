// PHOTOGRAPHERS PAGE HEADER INFO  

fetch("FishEyeData.json")
    .then(response => response.json())
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

/////////////////////////////////////////////////////////
const url = new URL(window.location);
url.hash = getPhotographerId();
history.replaceState(null, document.title, url);
// //**** NOT WORKING ONLY WORKS FOR THAT PHOTOGRAPHER
/////////////////////////////////////////////////////////

const displayHeader = (photographer, section) => {
    const person = document.createElement('div');
    person.classList.add('main__infobg');
    section.appendChild(person);
    return person
}

const displayName = (photographer, section) => {
    const name = document.createElement('h1');
    name.classList.add('photographer__name');
    name.classList.add('photographer__name2');
    name.textContent = `${photographer.name}`;
    section.appendChild(name);
}

const displayCity = (photographer, section) => {
    const city = document.createElement('p');
    city.classList.add('photographer__city');
    city.classList.add('photographer__city2');
    city.textContent = `${photographer.city}, ${photographer.country}`;
    section.appendChild(city);
}

const displayTagline = (photographer, section) => {
    const tagline = document.createElement('p');
    tagline.classList.add('photographer__tagline');
    tagline.classList.add('photographer__tagline2');
    tagline.textContent = `${photographer.tagline}`;
    section.appendChild(tagline);
}

const displayTags = (photographer, section) => {
    const tags = document.createElement('div');
    tags.classList.add('tagLinks');
    tags.classList.add('tagLinksNav2');
    section.appendChild(tags);
    for (const tag of photographer.tags) {
        const link = document.createElement('a');
        link.classList.add('tagLink');
        link.href = `#${tag}`;
        link.textContent = `#${tag}`;
        tags.appendChild(link);
    }
}

const displayImage = (photographer, section) => {
    const image = document.createElement('img');
    image.classList.add('photographer__circleimg');
    image.classList.add('photographer__circleimg2');
    image.src = `img2/Photographers_ID_Photos/${photographer.portrait}`;
    section.appendChild(image);
}


////////////////////////////////////////////////////////////////////////////////////


// PHOTOGRAPHERS PAGE MEDIA INFO  
fetch("FishEyeData.json")
    .then(response => response.json())
    .then(data => {
        // targeting the portfolio section 
        const section = document.querySelector('.portfolio__row');
        const mediaId = getPhotographerId();
        const mediaArray = data.media.filter(media => media.photographerId == mediaId);
        
            displaySlidesBackground(section, mediaArray);

        for (const media of mediaArray) {
            const person = displayPortfolio(media, section);
            displayPhoto(media, person);
            displayImageInfo(media, person);
            displayDate(media, person);
            displayPhotoPrice(media, person);

            const btnsHeart = person.querySelector('.like-counter');
            btnsHeart.addEventListener('click', () => {
                media.likes++;
                person.querySelector('.number-likes').innerHTML = media.likes;}, 
                { once: true });
        }

    });

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

const displayPhoto = (media, section) => {
    if (media.image) {
        const photo = document.createElement('img');
        photo.classList.add('portfolio__image');
        photo.src = `img2/${media.image}`;
        section.appendChild(photo);
    } else {
        const video = document.createElement('video');
        video.classList.add('portfolio__image');
        video.src = `img2/${media.video}`;
        section.appendChild(video);
    }
};

const displayImageInfo = (media, section) => {
    const info = document.createElement('div');
    info.classList.add('portfolio__image-info');
    section.appendChild(info);
    displayTitle(media, info);
    displayLikesContainer(media, info);
}

const displayTitle = (media, info) => {
    const title = document.createElement('p');
    title.classList.add('portfolio__image-title');
    title.textContent = `${media.title}`;
    info.appendChild(title);
}

let totalLikes = 0;
const displayLikesContainer = (media, info) => {
    const likesContainer = document.createElement('div');
    likesContainer.classList.add('likes-container');
    info.appendChild(likesContainer);
    displayLikes(media, likesContainer);
    displayHeartContainer(media, likesContainer);

    likesContainer.addEventListener('click', () => {
        document.querySelector('.photographer__likes').innerHTML = totalLikes++;
    })
}

const displayLikes = (media, likesContainer) => {
    totalLikes += media.likes;
    document.querySelector('.photographer__likes').innerHTML = totalLikes;
    const likes = document.createElement('p');
    likes.classList.add('number-likes');
    likes.textContent = `${media.likes}  `;
    likesContainer.appendChild(likes);
}

const displayHeartContainer = (media, likesContainer) => {
    const link = document.createElement('span');
    link.classList.add('like-counter');
    likesContainer.appendChild(link);
    displayIcon(media, link);
}

const displayIcon = (media, link) => {
    const icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-heart');
    icon.classList.add('heart');
    link.appendChild(icon);
}

const displayDate = (media, section) => {
    const date = document.createElement('p');
    date.classList.add('portfolio__image-date');
    date.textContent = `${media.date}`;
    section.appendChild(date);
}

const displayPhotoPrice = (media, section) => {
    const price = document.createElement('p');
    price.classList.add('portfolio__image-price');
    price.textContent = `${media.price}€`;
    section.appendChild(price);
}

// DOM for lightbox 

const displaySlidesBackground = (section, mediaArray) => {
    const slides = document.createElement('div');
    slides.classList.add('lbBackground');
    section.appendChild(slides);

    const content = document.createElement('div');
    content.classList.add('lbContent');
    content.style.width = `${mediaArray.length * 100}vw`;

    slides.appendChild(content);

    displaySlidesContent(mediaArray, content);
    displayClose(slides);
    displayArrLeft(slides, content);
    displayArrRight(slides, content);

}

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

const displaySlideImg = (media, slide) => {
    if (media.image) {
        const slideImg = document.createElement('img');
        slideImg.classList.add('slide__photo');
        slideImg.src = `img2/${media.image}`;
        slide.appendChild(slideImg);
    } else {
        const slideVid = document.createElement('video');
        slideVid.classList.add('slide__photo');
        slideVid.src = `img2/${media.video}`;
        slide.appendChild(slideVid);
    }
}

const displaySlideTitle = (media, slide) => {
    const slideTitle = document.createElement('p');
    slideTitle.classList.add('slide__title');
    slideTitle.textContent = `${media.title}`;
    slide.appendChild(slideTitle);
}

const displayClose = (content) => {
    const closeSlide = document.createElement('span');
    closeSlide.classList.add('close');
    closeSlide.classList.add('lb-close');
    closeSlide.addEventListener('click', () => {
        document.querySelector(".lbBackground").style.display = "none";
    })
    content.appendChild(closeSlide);
}

const displayArrLeft = (content) => {
    const arrLeft = document.createElement('span');
    arrLeft.classList.add('arrow');
    arrLeft.classList.add('left');
    content.appendChild(arrLeft);
    displayLeftIcon(arrLeft);
}

const displayLeftIcon = (arrLeft) => {
    const left = document.createElement('i');
    left.classList.add('fas');
    left.classList.add('fa-chevron-left');
    arrLeft.appendChild(left);
}

const displayArrRight = (slides, content) => {
    const arrRight = document.createElement('span');
    arrRight.classList.add('arrow');
    arrRight.classList.add('right');
    slides.appendChild(arrRight);
    displayRightIcon(arrRight);
    arrRight.addEventListener("click", () => {
        console.log("arrRight");
        content.style.transform = "translateX(" + (-100) + "vw)"
    })
}

const displayRightIcon = (arrRight) => {
    const right = document.createElement('i');
    right.classList.add('fas');
    right.classList.add('fa-chevron-right');
    arrRight.appendChild(right);

}
















