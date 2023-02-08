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

    // Using If Else statements
    // if (i === 0) {
    //     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //     let audio = new Audio('sounds/kick-bass.mp3')
    //     audio.play()
    //     })
    // }
    // else if (i === 1) {
    //     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //     let audio = new Audio('sounds/hi-hat.mp3')
    //     audio.play()
    //     })
    // }
    // else if (i === 2) {
    //     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //     let audio = new Audio('sounds/snare.mp3')
    //     audio.play()
    //     })
    // }
    // else if (i === 3) {
    //     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //     let audio = new Audio('sounds/crash.mp3')
    //     audio.play()
    //     })
    // }
    // else if (i === 4) {
    //     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //     let audio = new Audio('sounds/tom-1.mp3')
    //     audio.play()
    //     })
    // }
    // else if (i === 5) {
    //     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //     let audio = new Audio('sounds/tom-2.mp3')
    //     audio.play()
    //     })
    // }
    // else if (i === 6) {
    //     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //     let audio = new Audio('sounds/tom-3.mp3')
    //     audio.play()
    //     })
    // }
    // else if (i === 7) {
    //     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //     let audio = new Audio('sounds/tom-4.mp3')
    //     audio.play()
    //     })
    // }
    // ===========================================================

    // Detect click press
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
    })
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

// Detected keyboard press with switch expression
function makeSound(key) {

    switch (key) {
        case "w":
            let kickbass = new Audio('sounds/kick-bass.mp3')
            kickbass.play()
            break

        case "a":
            let hihat = new Audio('sounds/hi-hat.mp3')
            hihat.play()
            break

        case "s":
            let snare = new Audio('sounds/snare.mp3')
            snare.play()
            break

        case "d":
            let crash = new Audio('sounds/crash.mp3')
            crash.play()
            break

        case "i":
            let tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break

        case "j":
            let tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break

        case "k":
            let tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break

        case "l":
            let tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
            break

        default: console.log()

    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector(`.${currentKey}`)

    activeButton.classList.add("pressed")
    
    setTimeout(function() {
        activeButton.classList.remove("pressed"); 
    }, 100)
}