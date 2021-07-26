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
  
  // change to new menu items when clicked on and logs in console 
  const dropDown = new DropDown(document.querySelector('.dropdown'));
    
  dropDown.element.addEventListener('change', e => {
    console.log('changed', dropDown.value);
  });
  
  dropDown.element.addEventListener('opened', e => {
    console.log('opened', dropDown.value);
  });
  
  dropDown.element.addEventListener('closed', e => {
    console.log('closed', dropDown.value);
  });
  
  dropDown.toggle(e);