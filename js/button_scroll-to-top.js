// BUTTON TO SCROLL TO TOP OF PAGE 

// target the link to take you to the top of the page
const goToTop = document.getElementById("top");

const myScrollFunc = (e) => {
    // // target the link to take you to the top of the page
    // const goToTop = document.getElementById("top");

    let y = window.scrollY;
    if (y >= 300) {
        //link shows if you are more than 300px from top of page
        goToTop.className = "topOfPageLink showLink";
    } else {
        //link is hidden if you are less than 300px from top of page
        goToTop.className = "topOfPageLink hideLink";
    }

    const url = new URL(window.location);
    url.hash = '';
    history.replaceState(null, document.title, url);
};

window.addEventListener("scroll", myScrollFunc);
goToTop.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        window.scrollTo(0, 0);
    }
})
/////////////////////////////////////////////////////////////////////////////////////////









