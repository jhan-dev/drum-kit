const handleClick = () => {
    alert("I got clicked!")
}

const drums = document.querySelectorAll(".drum")

// for (let i = 0; i < drums.length; i++) {
//     // Calling handleClick function after click
//     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)

//     // Using anonymous function to create an alert inside
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         alert("I got clicked!")
//     })
// }

for (let i = 0; i < drums.length; i++) {

    if (i === 0) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let audio = new Audio('sounds/kick-bass.mp3')
        audio.play()
        })
    }
    else if (i === 1) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let audio = new Audio('sounds/hi-hat.mp3')
        audio.play()
        })
    }
    else if (i === 2) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let audio = new Audio('sounds/snare.mp3')
        audio.play()
        })
    }
    else if (i === 3) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let audio = new Audio('sounds/crash.mp3')
        audio.play()
        })
    }
    else if (i === 4) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let audio = new Audio('sounds/tom-1.mp3')
        audio.play()
        })
    }
    else if (i === 5) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let audio = new Audio('sounds/tom-2.mp3')
        audio.play()
        })
    }
    else if (i === 6) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let audio = new Audio('sounds/tom-3.mp3')
        audio.play()
        })
    }
    else if (i === 7) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let audio = new Audio('sounds/tom-4.mp3')
        audio.play()
        })
    }
}
