// FILTER FUNCTION FOR HASHTAGS 

//target the hashtags in the header navigation 
filter = document.getElementsByClassName("tagLink");

// function to filter objects, shows class if class name matches and hides if class name does not match 
const filterObjects = (c) => {
    let x, i;
    x = document.getElementsByClassName("photographer");
    if (c == "all") c = " ";
    for (i = 0; i < x.length; i++) {
        // removeClass(x[i], "showFilter");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "showFilter")
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
// const removeClass = (element, name) => {
//     let i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         while (arr1.indexOf(arr2[i]) > -1) {
//             arr1.splice(arr1.indexOf(arr2[i]), 1);
//         }
//     }
//     element.className = arr1.join(" ");
// }

filterObjects("all");
/////////////////////////////////////////////////////////////////////////////////////////


// FUNCTION TO MAKE ACTIVE HASHTAG FILTERS HAVE ACTIVE CLASS AND NON ACTIVE HASHTAG FILTERS TO NOT BE ACTIVE

const removeActiveLinks = (tagsNav) => {
    for (let tag of tagsNav) {
        tag.classList.remove('active')
    }
}

const addActiveLink = (tags) => {
    for (let tag of tags) {
        tag.classList.add('active')
    }
}

const findTextContentInArray = (tagsNav, textContent) => {
    const tags = tagsNav.filter(tag => tag.textContent === textContent);
    addActiveLink(tags);
}


const clickOnTags = () => {
    for (let tag of tagsNav) {
        tag.addEventListener('click', () => {
            filterObjects(tag.className.split('tagLink ')[1]);
            // removeActiveLinks();
            findTextContentInArray(tag.textContent);
            // if (!tag.hasClass('active')) {
            //     removeActiveLinks();
            // }
        })

    }
}

window.addEventListener('hashchange', () => {
    const tagsNav = [...document.querySelectorAll('.tagLink')];
    const hash = window.location.hash.replace('#', '');
    filterObjects("hash");
    // removeActiveLinks(tagsNav);
    findTextContentInArray(tagsNav, window.location.hash);
}) 

/////////////////////////////////////////////////////////////////////////////////////////




