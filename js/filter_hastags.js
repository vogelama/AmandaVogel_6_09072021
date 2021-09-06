// FILTER FUNCTION FOR HASHTAGS 

//target the hashtags in the header navigation 
filter = document.getElementsByClassName("tagLink");
const activeFilter = document.getElementsByClassName("active");

// function to filter objects, shows class if class name matches and hides if class name does not match 
const filterObjects = (tag) => {
    let photographer, i;
    photographer = document.getElementsByClassName("photographer");
    if (tag == "all") tag = " ";
    for (i = 0; i < photographer.length; i++) {
        removeClass(photographer[i], "showFilter"); //only working if you click on one filter, doesn't work for multiple filters
        if (photographer[i].className.indexOf(tag) > -1) addClass(photographer[i], "showFilter")
    }
}

// function to add class based off the class name 
const addClass = (element, name) => {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i] == -1)) {
            element.className += " " + arr2[i];
        }
    }
}
// function to remove class based off the class name 
const removeClass = (element, name) => {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// filterObjects("all");
/////////////////////////////////////////////////////////////////////////////////////////


// FUNCTION TO MAKE ACTIVE HASHTAG FILTERS HAVE ACTIVE CLASS AND NON ACTIVE HASHTAG FILTERS TO NOT BE ACTIVE

const removeActiveLink = (tagsNav) => {
    for (let tag of tagsNav) {
        tag.classList.remove('active');
    }
}

const addActiveLink = (tags) => {
    for (let tag of tags) {
        tag.classList.add('active');
    }
}

// const addActiveLinkPhotographer = () => {
//     let photographer = document.querySelector('.photographer');
//     for (let i = 0; i < photographer.length; i++) {
//         photographer[i].classList.add('active');
//     }
//     // document.querySelector('a.active').closest('section').addClass('active');
// }

const removeActiveLinkPhotographer = () => {
    let photographer = document.querySelectorAll('.photographer');
    for (let i = 0; i < photographer.length; i++) {
        photographer[i].classList.remove('active');
    }
}

const findTextContentInArray = (tagsNav, textContent) => {
    const tags = tagsNav.filter(tag => tag.textContent === textContent);
    if (tags !== 'all') {
        addActiveLink(tags);
        // addActiveLinkPhotographer();
    } 

    const all = document.querySelector('.all');
    all.addEventListener('click', () => {
        removeActiveLink(tags);
        removeActiveLinkPhotographer();
     })
}


const clickOnTags = () => {
    for (let tag of tagsNav) {
        tag.addEventListener('click', () => {
            filterObjects(tag.className.split('tagLink ')[1]);
            // removeActiveLinks();
            findTextContentInArray(tag.textContent);
        })
    }
}


window.addEventListener('hashchange', () => {
    const tagsNav = [...document.querySelectorAll('.tagLink')];
    const hash = window.location.hash.replace('#', '');
    filterObjects(hash);
    // removeActiveLinks(tagsNav);
    findTextContentInArray(tagsNav, window.location.hash);
    console.log(hash)
}) 




/////////////////////////////////////////////////////////////////////////////////////////
