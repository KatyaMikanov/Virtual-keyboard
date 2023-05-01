//virtual keyboard

const screen = document.querySelector ('body');


function createKeyBoard () {
    let  board = document.createElement("TEXTAREA");;
    board.classList.add('screen');


    screen.append(board);
}

createKeyBoard ();
