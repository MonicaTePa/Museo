let museum = new Museum();
museum.initializeGallery();

const artPieces = museum.getPieces();

function showInfoByClickButton() {
    alert(artPieces[0].getDescription())
};


function playSound() {
    let sound1 = document.querySelector(".reproductor")

    sound1.addEventListener("click", () => {
        let audio = document.createElement("audio")
        audio.setAttribute("src", "/assets/sound/s1.mp3")
        audio.play()
    })
}

function pauseSound() {
    let sound1 = document.querySelector(".reproductor")

    sound1.addEventListener("click", () => {
        let audio = document.createElement("audio")
        audio.setAttribute("src", "/assets/sound/s1.mp3")
        audio.pause()
    })
}

function pressKey() {
    alert("Reproduciendo sonido");
    let audio = document.createElement("audio")
    audio.setAttribute("src", "/assets/sound/s2.mp3")
    audio.play()

}

function bigImg(x) {
    x.style.height = "400px";
    x.style.width = "500px";
    let audio = document.createElement("audio")
    audio.setAttribute("src", "/assets/sound/s3.mp3")
    audio.play()
}

function normalImg(x) {
    x.style.height = "300px";
    x.style.width = "400px";

}

function functionPiece4() {
    let audio = document.createElement("audio")
    audio.setAttribute("src", "/assets/sound/s4.mp3")
    audio.play()
}

function functionPiece5() {
    let audio = document.createElement("audio")
    audio.setAttribute("src", "/assets/sound/s5.mp3")
    audio.play()
}

//this is an example of the use of the setter in the description
/*function changeInfo(){
  artPieces[0].setDescription("esta es la nueva descripción");
} */