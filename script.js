let turn = "x";
let squares = [];
let title = document.querySelector(".title");
let endGame = (num1, num2, num3) => {
    title.innerHTML = `${squares[num1]} Winner`;
    document.getElementById("item" + num1).style.backgroundColor = "#1fcf0f";
    document.getElementById("item" + num2).style.backgroundColor = "#1fcf0f";
    document.getElementById("item" + num3).style.backgroundColor = "#1fcf0f";
    setTimeout(() => {
        location.reload();
    }, 2000);
};

let winner = () => {
    for (let i = 1; i <= 9; i++) {
        squares[i] = document.getElementById("item" + i).innerHTML;
    }
    if (squares[1] === "X" && squares[2] === "X" && squares[3] === "X" || squares[1] === "O" && squares[2] === "O" && squares[3] === "O") {
        endGame(1, 2, 3);
        turn = "";
    } else if (squares[4] === "X" && squares[5] === "X" && squares[6] === "X" || squares[4] === "O" && squares[5] === "O" && squares[6] === "O") {
        endGame(4, 5, 6);
        turn = "";
    } else if (squares[7] === "X" && squares[8] === "X" && squares[9] === "X" || squares[7] === "O" && squares[8] === "O" && squares[9] === "O") {
        endGame(7, 8, 9);
        turn = "";
    } else if (squares[1] === "X" && squares[4] === "X" && squares[7] === "X" || squares[1] === "O" && squares[4] === "O" && squares[7] === "O") {
        endGame(1, 4, 7);
        turn = "";
    } else if (squares[2] === "X" && squares[5] === "X" && squares[8] === "X" || squares[2] === "O" && squares[5] === "O" && squares[8] === "O") {
        endGame(2, 5, 8);
        turn = "";
    } else if (squares[3] === "X" && squares[6] === "X" && squares[9] === "X" || squares[3] === "O" && squares[6] === "O" && squares[9] === "O") {
        endGame(3, 6, 9);
        turn = "";
    } else if (squares[1] === "X" && squares[5] === "X" && squares[9] === "X" || squares[1] === "O" && squares[5] === "O" && squares[9] === "O") {
        endGame(1, 5, 9);
        turn = "";
    } else if (squares[3] === "X" && squares[5] === "X" && squares[7] === "X" || squares[3] === "O" && squares[5] === "O" && squares[7] === "O") {
        endGame(3, 5, 7);
        turn = ""
    }
    if (squares[1] !== "" && squares[2] !== "" && squares[3] !== "" && squares[4] !== "" && squares[5] !== "" && squares[6] !== "" && squares[7] !== "" && squares[8] !== "" && squares[9] !== "") {
        setTimeout(() => {
            location.reload();
        }, 2000);
    };
};
let game = (id) => {
    let element = document.getElementById(id);
    if (turn === "x" && element.innerHTML === "") {
        element.innerHTML = "X";
        turn = "o";
        title.innerHTML = "Turn O";
        title.style.color = "#ffff00";
    } else if (turn === "o" && element.innerHTML === "") {
        element.innerHTML = "O";
        turn = "x";
        title.innerHTML = "Turn X";
        title.style.color = "#ffff00";
    }
    winner();
};
