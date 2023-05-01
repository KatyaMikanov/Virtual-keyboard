//virtual keyboard

const keyboard = document.querySelector ('body');
let board;
let boardButtons;
let textBoard;

let arrayTextButtons = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', ' ' , 'Shift', 'Ctrl', 'Win', 'Alt', '                       ', 'Alt', ' ', ' ', ' ', 'Ctrl'];


function createKeyBoard () {

    board = document.createElement("div");
    board.classList.add('keyboard');

    textBoard = document.createElement("div");
    textBoard.classList.add('screen');

    boardButtons = document.createElement("div");
    boardButtons.classList.add('boardButtons');

    function createButton () {
        arrayTextButtons.forEach (el => {
            let newButton = document.createElement("div");
            newButton.classList.add('button');
            newButton.textContent = el;

            boardButtons.append(newButton);
        })
    }
    createButton ()
 
    board.append(textBoard);
    board.append(boardButtons);
    keyboard.append(board);
}

createKeyBoard ();

document.querySelectorAll('.boardButtons').forEach(function (element) {
    element.onclick = function(event) {
        document.querySelectorAll('.boardButtons').forEach(function (element) {
            textBoard.innerHTML = textBoard.innerHTML+event.target.innerText;
        })
    }
})


boardButtons.addEventListener('click', function (e) {
    let pushingButton = e.target;
    pushingButton.classList.toggle('active');
    console.log(pushingButton)
    boardButtons.addEventListener('click', function (e) {
        pushingButton.classList.remove('active');
        let pushingNextButton = e.target;
        pushingNextButton.classList.add('active');
    })
})