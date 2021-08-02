// PHOTOGRAPHERS PAGE HEADER INFO  

fetch("FishEyeData.json")
    .then(response => response.json())
    .then(data => {
    // targeting the main class 
        const section = document.querySelector('.main__info');
        const photographerid = window.location.hash.replace('#', '');

        const photographer = data.photographers.find(photographer => photographer.id == photographerid)
   
            const person = displayHeader(photographer, section);
            displayName2(photographer, person);
            displayCity2(photographer, person);
            displayTagline2(photographer, person);
            displayTags2(photographer, person);
            displayImage2(photographer, person);

        // insert name of person into contact form 
        document.querySelector('.form-title').innerText = `Contactez-moi ${photographer.name}`;

        // insert price of person into bottom likes bar 
        document.querySelector('#photographer__price').innerText = `${photographer.price}€/jour`;
    });


/////////////////////////////////////////////////////////
    const url = new URL(window.location);
    url.hash = '243'; 
    history.replaceState(null, document.title, url);
    //**** NOT WORKING ONLY WORKS FOR THAT PHOTOGRAPHER
/////////////////////////////////////////////////////////

const displayHeader = (photographer, section) => {
    const person = document.createElement('div');
    person.classList.add('main__infobg');
    section.appendChild(person);
    return person
}
const displayName2 = (photographer, section) => {
    const name = document.createElement('h1');
    name.classList.add('photographer__name');
    name.classList.add('photographer__name2');
    name.textContent = `${photographer.name}`;
    section.appendChild(name);
}
const displayCity2 = (photographer, section) => {
    const city = document.createElement('p');
    city.classList.add('photographer__city');
    city.classList.add('photographer__city2');
    city.textContent = `${photographer.city}, ${photographer.country}`;
    section.appendChild(city);
}
const displayTagline2 = (photographer, section) => {
    const tagline = document.createElement('p');
    tagline.classList.add('photographer__tagline');
    tagline.classList.add('photographer__tagline2');
    tagline.textContent = `${photographer.tagline}`;
    section.appendChild(tagline);
}
const displayTags2 = (photographer, section) => {
    const tags = document.createElement('div');
    tags.classList.add('tagLinks');
    tags.classList.add('tagLinksNav2');
    section.appendChild(tags);
    for(const tag of photographer.tags){
        const link = document.createElement('a');
        link.classList.add('tagLink');
        link.href = `#${tag}`;
        link.textContent = `#${tag}`;
        tags.appendChild(link);
    }
}
const displayImage2 = (photographer, section) => {
    const image = document.createElement('img');
    image.classList.add('photographer__circleimg');
    image.classList.add('photographer__circleimg2');
    image.src = `img/Photographers_ID_Photos/${photographer.portrait}`;
    section.appendChild(image);
}





// PHOTOGRAPHERS PAGE MEDIA INFO  

fetch("FishEyeData.json")
    .then(response => response.json())
    .then(data => {
    // targeting the portfolio section 
        const section = document.querySelector('.portfolio__row');
        const mediaId = window.location.hash.replace('#', '');
        const media = data.media.find(media => media.photographerId == mediaId);
        
        // for (const media of data.media) {
            const person = displayPortfolio(media, section);
            displayPhoto(media, person);
            displayImageInfo(media, person);
            displayDate(media, person);
            displayPhotoPrice(media, person);
        // }
    }); 

const displayPortfolio = (media, section) => {
    const person = document.createElement('div');
    person.classList.add('portfolio__column');
    person.classList.add('photographer');
    person.classList.add('showFilter');
    for(const tag of media.tags){
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
    displayLikes(media, info);
}
const displayTitle = (media, info) => {
    const title = document.createElement('p');
    title.classList.add('portfolio__image-title');
    title.textContent = `${media.title}`;
    info.appendChild(title);
}
const displayLikes = (media, info) => {
    const likes = document.createElement('p');
    likes.textContent = `${media.likes} `;
    info.appendChild(likes);
    displayContainer(media, likes);
}
const displayContainer = (media, likes) => {
    const link = document.createElement('a');
    link.classList.add('btn-counter');
    link.classList.add('multiple-count');
    likes.appendChild(link);
    displayIcon(media, link);
}
const displayIcon = (media, link) => {
    const icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-heart');
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
















