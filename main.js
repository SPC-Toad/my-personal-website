(async function () {
    await fetch("../templates/nav.html").then(res => res.text()).then(data => document.getElementsByName("nav_slot")[0].innerHTML = data);
    const menu = document.getElementById("menu");

    menu.addEventListener("click", clickFunction);

    function clickFunction(event) {
        menu.classList.toggle("change");
    }
}()); 

