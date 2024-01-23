const toggle = document.getElementById("checkbox_toggle");
const bg = document.querySelector(".bg");
const fbg = document.querySelector(".fbg");

function changeLogo() {
    const images = [
        {id: "img1", src: "./assets/img/lOptic.svg", text: "Optic"},
        {id: "img2", src: "./assets/img/lPulse.svg", text: "Pulse"},
        {id: "img3", src: "./assets/img/lCosmos.svg", text: "Cosmos"},
        {id: "img4", src: "./assets/img/lTrophies.svg", text: "Trophies"}
    ];

    bg.classList.add("bg2");
    fbg.classList.add("fbg2");

    images.forEach((image) => {
        document.getElementById(image.id).src = image.src;
        document.getElementById(`text${image.id.slice(-1)}`).innerText = image.text;
    });

}

function resetLogo() {
    const images = [
        {id: "img1", src: "./assets/img/rLinksy.svg", text: "Linksy"},
        {id: "img2", src: "./assets/img/rTrophies.svg", text: "Trophies"},
        {id: "img3", src: "./assets/img/rShoppie.svg", text: "Shoppie"},
        {id: "img4", src: "./assets/img/rFields.svg", text: "Fields"}
    ];

    images.forEach((image) => {
        document.getElementById(image.id).src = image.src;
        document.getElementById(`text${image.id.slice(-1)}`).innerText = image.text;
    });

    bg.classList.remove("bg2");
    fbg.classList.remove("fbg2");
}

toggle.addEventListener("click", function() {
    if (toggle.checked) {
        changeLogo();
    } else {
        resetLogo();
    }
});
