const toggle = document.getElementById("bar");
const  nav = document.getElementById("navItems");
const close = document.getElementById("close");

if (toggle) {
    toggle.addEventListener('click' , () => {
        nav.classList.add('active');
        console.log("worked")
    })
}

if (close) {
    close.addEventListener('click' , () => {
        nav.classList.remove('active');
        console.log("worked")
    })
}