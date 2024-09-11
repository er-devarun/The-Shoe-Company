const menuIcon = document.querySelector("#menu");
const navBar = document.querySelector("nav");
const closeMenu = document.querySelector("#close-menu");


function handleMenuBar(){
    if(menuIcon.classList.contains("active")){
        menuIcon.classList.add("invisible");
        navBar.classList.add("active");
        navBar.classList.add("flex");
        navBar.classList.remove("hidden");
    } else{
        navBar.classList.remove("active");
        menuIcon.classList.remove("invisible");
        navBar.classList.remove("flex");
        navBar.classList.add("hidden");
    }
}

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    handleMenuBar();
})

closeMenu.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    handleMenuBar();
})