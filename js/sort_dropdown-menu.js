// FUNCTION TO OPEN DROPDOWN MENU AND HAVE SELECTED OPTIONS BE CURRENT OPTION
function DropDown(dropDown) {
    const [toggler, menu] = dropDown.children;

    // Defining value of item options in the menu 
    const setValue = (item) => {
        const val = item.textContent;
        toggler.textContent = val;
        this.value = val;
        this.toggle(false);
        dropDown.dispatchEvent(new Event('change'));
        toggler.focus();
    }

    // event listener to toggle menu when clicked, and to set selected value 
    toggler.addEventListener('click', () => this.toggle());
    [...menu.children].forEach(item => {
      item.addEventListener('click', () => setValue(item));
    });

    // if you click outside of menu box then menu will close 
    const handleClickOut = e => {
        if(!dropDown) {
            return document.removeEventListener('click', handleClickOut);
          }
          
          if(!dropDown.contains(e.target)) {
            this.toggle(false);
          }
      };

    // if menu is not expanded to expand it and add active class, click event listener and click out function, if menu is expanded to remove active class and and remove click event listener 
    this.element = dropDown;
    this.value = toggler.textContent;
    this.toggle = (expand = null) => {
        expand = expand === null
          ? menu.getAttribute('aria-expanded') !== 'true'
          : expand;
    
        menu.setAttribute('aria-expanded', expand);
        
        if(expand) {
          toggler.classList.add('active');
          menu.children[0].focus();
          document.addEventListener('click', handleClickOut);
          dropDown.dispatchEvent(new Event('opened'));
        } else {
          toggler.classList.remove('active');
          dropDown.dispatchEvent(new Event('closed'));
          document.removeEventListener('click', handleClickOut);
        }
      }
  }



window.data
.then(data => { 
  // console.log(window.mediaArray);
  // change to new menu items when clicked on and logs in console 
  const dropDown = new DropDown(document.querySelector('.dropdown'));
  dropDown.element.addEventListener('change', () => {
  console.log(dropDown.value);

    if (dropDown.value == 'Date'){
      sortByDate();
    }
    if (dropDown.value == 'Popularité'){
      sortByLikes();
    }
    if (dropDown.value == 'Titre'){
      sortByAlphabet();
    }
  });




// SORT IMAGES BY DATE
 const sortByDate = () => {
  const data = window.mediaArray.slice();
  data.sort((a, b) => {
     return a.date < b.date ? 1 : -1;
  })
  window.createList(data);  
}



// SORT IMAGES BY LIKES
const sortByLikes = () => {
  const data = window.mediaArray.slice();
  data.sort((a,b) => {
    return b.likes - a.likes;
  })
  window.createList(data);
}



// SORT IMAGES BY TITLE
const sortByAlphabet = () => {
  const data = window.mediaArray.slice();
  data.sort((a,b) => {
    return a.title > b.title ? 1 : -1;
  })
  window.createList(data);
}


dropDown.toggle('');

})



  
