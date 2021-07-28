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
    section.appendChild(link);
    displayImage(photographer, link); 
    displayName(photographer, link);
}
// image element (id photo)
const displayImage = (photographer, link) => {
    const image = document.createElement('img');
    image.classList.add('photographer__circleimg');
    image.src = `img/Photographers_ID_Photos/${photographer.portrait}`;
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
    section.appendChild(city);
}

// <p> element : tagline
const displayTagline = (photographer, section) => {
    const tagline = document.createElement('p');
    tagline.classList.add('photographer__tagline');
    tagline.textContent = `${photographer.tagline}`;
    section.appendChild(tagline);
}

// <p> element : price
const displayPrice = (photographer, section) => {
    const price = document.createElement('p');
    price.classList.add('photographer__price');
    price.textContent = `${photographer.price}€/jour`;
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
        tags.appendChild(link);
    }
}




















































// IMAGE INFO 

fetch("FishEyeData.json")
    .then(response => response.json())
    .then(data => {

        // Images - Photographer 1
        // Image 1
        // title
        console.log(data.media[28].title)
        document.querySelector("#portfolio__image-title1-1").innerText = data.media[28].title
        // date
        console.log(data.media[28].date)
        document.querySelector("#portfolio__image-date1-1").innerText = data.media[28].date
        // price
        console.log(data.media[28].price)
        document.querySelector("#portfolio__image-price1-1").innerText = data.media[28].price + '€'
        // Image 2
        // title
        console.log(data.media[29].title)
        document.querySelector("#portfolio__image-title1-2").innerText = data.media[29].title
        // date
        console.log(data.media[29].date)
        document.querySelector("#portfolio__image-date1-2").innerText = data.media[29].date
        // price
        console.log(data.media[29].price)
        document.querySelector("#portfolio__image-price1-2").innerText = data.media[29].price + '€'
        // Image 3
        // title
        console.log(data.media[30].title)
        document.querySelector("#portfolio__image-title1-3").innerText = data.media[30].title
        // date
        console.log(data.media[30].date)
        document.querySelector("#portfolio__image-date1-3").innerText = data.media[30].date
        // price
        console.log(data.media[30].price)
        document.querySelector("#portfolio__image-price1-3").innerText = data.media[30].price + '€'
        // Image 4
        // title
        console.log(data.media[31].title)
        document.querySelector("#portfolio__image-title1-4").innerText = data.media[31].title
        // date
        console.log(data.media[31].date)
        document.querySelector("#portfolio__image-date1-4").innerText = data.media[31].date
        // price
        console.log(data.media[31].price)
        document.querySelector("#portfolio__image-price1-4").innerText = data.media[31].price + '€'
        // Image 5
        // title
        console.log(data.media[32].title)
        document.querySelector("#portfolio__image-title1-5").innerText = data.media[32].title
        // date
        console.log(data.media[32].date)
        document.querySelector("#portfolio__image-date1-5").innerText = data.media[32].date
        // price
        console.log(data.media[32].price)
        document.querySelector("#portfolio__image-price1-5").innerText = data.media[32].price + '€'
        // Image 6
        // title
        console.log(data.media[33].title)
        document.querySelector("#portfolio__image-title1-6").innerText = data.media[33].title
        // date
        console.log(data.media[33].date)
        document.querySelector("#portfolio__image-date1-6").innerText = data.media[33].date
        // price
        console.log(data.media[33].price)
        document.querySelector("#portfolio__image-price1-6").innerText = data.media[33].price + '€'
        // Image 7
        // title
        console.log(data.media[34].title)
        document.querySelector("#portfolio__image-title1-7").innerText = data.media[34].title
        // date
        console.log(data.media[34].date)
        document.querySelector("#portfolio__image-date1-7").innerText = data.media[34].date
        // price
        console.log(data.media[34].price)
        document.querySelector("#portfolio__image-price1-7").innerText = data.media[34].price + '€'
        // Image 8
        // title
        console.log(data.media[35].title)
        document.querySelector("#portfolio__image-title1-8").innerText = data.media[35].title
        // date
        console.log(data.media[35].date)
        document.querySelector("#portfolio__image-date1-8").innerText = data.media[35].date
        // price
        console.log(data.media[35].price)
        document.querySelector("#portfolio__image-price1-8").innerText = data.media[35].price + '€'
        // Image 9
        // title
        console.log(data.media[36].title)
        document.querySelector("#portfolio__image-title1-9").innerText = data.media[36].title
        // date
        console.log(data.media[36].date)
        document.querySelector("#portfolio__image-date1-9").innerText = data.media[36].date
        // price
        console.log(data.media[36].price)
        document.querySelector("#portfolio__image-price1-9").innerText = data.media[36].price + '€'
        // Image 10
        // title
        console.log(data.media[37].title)
        document.querySelector("#portfolio__image-title1-10").innerText = data.media[37].title
        // date
        console.log(data.media[37].date)
        document.querySelector("#portfolio__image-date1-10").innerText = data.media[37].date
        // price
        console.log(data.media[37].price)
        document.querySelector("#portfolio__image-price1-10").innerText = data.media[37].price + '€'
    })


