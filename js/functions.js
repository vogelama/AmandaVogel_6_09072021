// BUTTON TO SCROLL TO TOP OF PAGE 

// target the link to take you to the top of the page
goToTop = document.getElementById("top");

const myScrollFunc = () => {
    let y = window.scrollY;
    if (y >= 300) {
        //link shows if you are more than 300px from top of page
        goToTop.className = "topOfPageLink showLink"
    } else {
        //link is hidden if you are less than 300px from top of page
        goToTop.className = "topOfPageLink hideLink"
    }
};

window.addEventListener("scroll", myScrollFunc);
/////////////////////////////////////////////////////////////////////////////////////////


// FILTER FUNCTION FOR HASHTAGS 

// filterObjects("all");

//target the hashtags in the header navigation 
filter = document.getElementsByClassName("tagLink");

// function to filter objects, shows class if class name matches and hides if class name does not match 
const filterObjects = (c) => {
    let x, i;
    x = document.getElementsByClassName("photographer");
    if (c == "all") c = " ";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "showFilter");
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

filterObjects("all");
/////////////////////////////////////////////////////////////////////////////////////////


// FUNCTION TO MAKE ACTIVE HASHTAG FILTERS HAVE ACTIVE CLASS AND NON ACTIVE HASHTAG FILTERS TO NOT BE ACTIVE

const tagsNav = [...document.querySelectorAll('.tagLink')];
const removeActiveLinks = () => {
    for (let tag of tagsNav) {
        tag.classList.remove('active')
    }
}

const addActiveLink = (tags) => {
    for (let tag of tags) {
        tag.classList.add('active')
    }
}

const findTextContentInArray = (textContent) => {
    const tags = tagsNav.filter(tag => tag.textContent === textContent);
    addActiveLink(tags);
}


const clickOnTags = () => {
    for (let tag of tagsNav) {
        tag.addEventListener('click', () => {
            removeActiveLinks();
            findTextContentInArray(tag.textContent);
        })
    }
}

clickOnTags();
/////////////////////////////////////////////////////////////////////////////////////////

// filterObjects(tag.className.split('tagLink ')[1]);









