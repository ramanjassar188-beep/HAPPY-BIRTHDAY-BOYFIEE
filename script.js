function openGift() {

    document
        .getElementById("intro")
        .classList
        .add("hidden");


    document
        .getElementById("menu")
        .classList
        .remove("hidden");

}



function showSection(section) {


    document
        .getElementById("menu")
        .classList
        .add("hidden");


    document
        .querySelectorAll(
            ".content-section"
        )
        .forEach(
            element => {

                element
                    .classList
                    .add("hidden");

            }
        );


    document
        .getElementById(section)
        .classList
        .remove("hidden");

}



function goBack() {


    document
        .querySelectorAll(
            ".content-section"
        )
        .forEach(
            element => {

                element
                    .classList
                    .add("hidden");

            }
        );


    document
        .getElementById("menu")
        .classList
        .remove("hidden");

}



function bloomBouquet() {


    document
        .getElementById("flowers")
        .classList
        .remove("hidden");

}



function playSong() {


    const message =
        document
            .getElementById(
                "song-message"
            );


    message.innerHTML =
        "🎵 Our song is waiting for us... 🤍";

}
