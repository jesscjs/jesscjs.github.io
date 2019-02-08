// SMOOTH SCROLLING

let anchorTags = document.querySelectorAll('a[href^="#"]');
 
for (let item of anchorTags) { 

    item.addEventListener('click', (e)=> {

        let href = item.getAttribute('href');
        let target = document.querySelector(href);

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        history.pushState(null, null, href);
        e.preventDefault();
    })
}
