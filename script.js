function openGift() {

    document.getElementById("intro").classList.add("hidden");

    document.getElementById("menu").classList.remove("hidden");

}


function showSection(section) {

    document.getElementById("menu").classList.add("hidden");

    document.querySelectorAll(".content-section")
        .forEach(element => {
            element.classList.add("hidden");
        });

    document.getElementById(section)
        .classList.remove("hidden");

}


function goBack() {

    document.querySelectorAll(".content-section")
        .forEach(element => {
            element.classList.add("hidden");
        });

    document.getElementById("menu")
        .classList.remove("hidden");

}
