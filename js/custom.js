// LOADER
const loader = document.querySelector('.loader');
function vanish(e) {
    e.preventDefault();
    loader.classList.add("disappear");
}
window.addEventListener("load", vanish);

// SCROLL TOP
const scrollTop = document.querySelector('.scroll-top');
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        scrollTop.classList.add("show");
    } else {
        scrollTop.classList.remove("show");
    }
});

// SEARCH
const Body = document.body
const search = document.getElementById('search');
Body.addEventListener('click', (e) => {
    result.style.display = 'none';
    search.value = '';
});