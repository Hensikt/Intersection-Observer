// Selects all the links in the nav.
let links = document.querySelectorAll('nav a');
// Selects all the sections
let theSections = document.querySelectorAll('section');

// Options for the intersection observer call.
const options = {
    threshold: 1.0
};

// Checks if there is an intersection happening at the targeted intersection.
// Debugging function.
const reactIntersection = (entries, observer) => {
    entries.forEach( entry => {
        console.log(entry.target.parentNode.id + " Intersect " + entry.isIntersecting);
        if( entry.isIntersecting ) {
            let link = searchMatchingLink('#' + entry.target.parentNode.id);
            makeActive(link);
        }
    });
};

// Intersection observer call to API so that this all can work.
let observer = new IntersectionObserver(reactIntersection, options);

// Selects the section I want to get observed.
// observer.observe(theSections[1]);
// Observers all the sections.
theSections.forEach( sectie => {
    observer.observe(sectie.getElementsByTagName('p')[0]);
});

// Function that removes the 'active' class from the navigation.
const deleteActive = () => {
    links.forEach( (link) => {
        if(link.classList = 'actief'){
            link.classList.remove('actief');
        }
    });
};

// Function that adds the 'active' class to the selected navigation intersection.
const makeActive = (elem) => {
    deleteActive();
    elem.classList.add('active');
};

// Function that reacts to the click on the nav bar and takes you to the specific intersection.
links.forEach( (link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        makeActive(e.target);
        window.location = e.target.href;
    })
});

const searchMatchingLink = (id) => {
    let link = document.querySelector('nav a[href="' + id + '"]');
    return link;
};