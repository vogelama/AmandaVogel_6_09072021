// HOMEPAGE PHOTOGRAPHERS INFO

fetch("FishEyeData.json")
    .then(response => response.json())
    .then(data => {
    // targeting the photographers class 
        const section = document.querySelector('.photographers');
    // for every photographer in the json file add a section with a class of photographer
        for (const photographer of data.photographers) {
            const person = displayPerson(photographer, section);
            displayLink(photographer, person);
            displayCity(photographer, person);
            displayTagline(photographer, person);
            displayPrice(photographer, person);
            displayTags(photographer, person);
        }
    });

// each photographer's section 
const displayPerson = (photographer, section) => {
    const person = document.createElement('section');
    person.classList.add('photographer');
    person.classList.add('showFilter');
    for(const tag of photographer.tags){
        person.classList.add(tag);
    }
    section.appendChild(person);
    return person
}

// <a> element : image and h2
const displayLink = (photographer, section) => {
    const link = document.createElement('a');
    photographerName = photographer.name.replace(/\s/g , "-");
    link.href = `photographer.html#${photographer.id}`; 
    link.tabIndex = "4";
    section.appendChild(link);
    displayImage(photographer, link); 
    displayName(photographer, link);
}
// image element (id photo)
const displayImage = (photographer, link) => {
    const image = document.createElement('img');
    image.classList.add('photographer__circleimg');
    image.src = `img2/Photographers_ID_Photos/${photographer.portrait}`;
    image.alt = `${photographer.name}`;
    link.appendChild(image);
}
// h2 element (name)
const displayName = (photographer, link) => {
    const name = document.createElement('h2');
    name.classList.add('photographer__name');
    name.textContent = `${photographer.name}`;
    link.appendChild(name);
}

// <p> element : city
const displayCity = (photographer, section) => {
    const city = document.createElement('p');
    city.classList.add('photographer__city');
    city.textContent = `${photographer.city}, ${photographer.country}`;
    city.tabIndex = "4";
    section.appendChild(city);
}

// <p> element : tagline
const displayTagline = (photographer, section) => {
    const tagline = document.createElement('p');
    tagline.classList.add('photographer__tagline');
    tagline.textContent = `${photographer.tagline}`;
    tagline.tabIndex = "4";
    section.appendChild(tagline);
}

// <p> element : price
const displayPrice = (photographer, section) => {
    const price = document.createElement('p');
    price.classList.add('photographer__price');
    price.textContent = `${photographer.price}€/jour`;
    price.tabIndex = "4";
    section.appendChild(price);
}

// <div> element : <a> tags
const displayTags = (photographer, section) => {
    const tags = document.createElement('div');
    tags.classList.add('tagLinks');
    section.appendChild(tags);
    for(const tag of photographer.tags){
        const link = document.createElement('a');
        link.classList.add('tagLink');
        link.href = `#${tag}`;
        link.textContent = `#${tag}`;
        link.tabIndex = "4";
        tags.appendChild(link);
    }
}



















































