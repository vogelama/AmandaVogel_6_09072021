// function to filter objects, shows class if class name matches and hides if class name does not match 

export const filterObjects = (c) => {
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
