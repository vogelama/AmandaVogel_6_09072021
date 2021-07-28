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
    });

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
