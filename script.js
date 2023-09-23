let ticTacToe = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
];

const ox = ["o", "x"];
let o = 0;
let x = 0;
function calcOX() {
    for (let i = 0; i < ticTacToe.length; i++) {
        for (let j = 0; j < ticTacToe[i].length; j++) {
            let rand = Math.floor(Math.random() * 2);
            ticTacToe[i][j] = ox[rand];
            if (ticTacToe[i][j] === "o") {
                o++;
            }
            if (ticTacToe[i][j] === "x") {
                x++;
            }
        }
    }
    document.getElementById("o").innerHTML = "o: " + o;
    document.getElementById("x").innerHTML = "x: " + x;
    o = 0;
    x = 0;
}