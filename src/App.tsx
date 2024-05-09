import React, { useState } from "react";
import "./App.css";

function App() {
  const [turn, setTurn] = useState<number>(1);
  const [turnText, setTurnText] = useState<string>("Player 1 turn");
  const [btn, setBtn] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [winText, setWinText] = useState<string>("");
  let checkWinner = (turn: string, arr: string[]): boolean => {
    if (
      (arr[0] === turn && arr[1] === turn && arr[2] === turn) ||
      (arr[0] === turn && arr[3] === turn && arr[6] === turn) ||
      (arr[0] === turn && arr[4] === turn && arr[8] === turn) ||
      (arr[1] === turn && arr[4] === turn && arr[7] === turn) ||
      (arr[2] === turn && arr[4] === turn && arr[6] === turn) ||
      (arr[2] === turn && arr[5] === turn && arr[8] === turn) ||
      (arr[3] === turn && arr[4] === turn && arr[5] === turn) ||
      (arr[6] === turn && arr[7] === turn && arr[8] === turn)
    )
      return true;
    else return false;
  };
  let checkDraw = (arr: string[]): boolean => {
    let check: boolean = true;
    arr.forEach((val) => {
      if (val === "") check = false;
    });
    return check;
  };

  const reset = () => {
    setBtn(["", "", "", "", "", "", "", "", ""]);
    setWinText("");
    setTurn(1);
    setTurnText("Player 1 turn");
  };
  const btnClick = (box: number) => {
    if (turn === 1) {
      let newArr = [...btn];
      if (newArr[box] === "" && winText === "") {
        newArr[box] = "X";
        setBtn(newArr);
        let win: boolean = checkWinner("X", newArr);

        if (checkDraw(newArr)) {
          setWinText("Draw!..Press Reset button to play again");
          setTurnText("Well Played..");
        }
        if (win) {
          setWinText("Player 1 Wins!..Press Reset button to play again");
          setTurnText("Great..");
        }
        if (!win && !checkDraw(newArr)) {
          setTurn(2);
          setTurnText("Player 2 turn");
        }
      }
    } else {
      let newArr = [...btn];
      if (newArr[box] === "" && winText === "") {
        newArr[box] = "O";
        setBtn(newArr);
        let win: boolean = checkWinner("O", newArr);

        if (checkDraw(newArr)) {
          setWinText("Draw!..Press Reset button to play again");
          setTurnText("Well Played..");
        }
        if (win) {
          setWinText("Player 2 Wins!..Press Reset button to play again");
          setTurnText("Great..");
        }
        if (!win && !checkDraw(newArr)) {
          setTurn(1);
          setTurnText("Player 1 turn");
        }
      }
    }
  };
  return (
    <div className="App">
      <div className="heading">Tic Tac Toe</div>
      <div className="heading1">{turnText}</div>
      <div className="playArea">
        <div className="row">
          <div className="btn" onClick={() => btnClick(0)}>
            {btn[0]}
          </div>
          <div className="btn" onClick={() => btnClick(1)}>
            {btn[1]}
          </div>
          <div className="btn" onClick={() => btnClick(2)}>
            {btn[2]}
          </div>
        </div>
        <div className="row">
          <div className="btn" onClick={() => btnClick(3)}>
            {btn[3]}
          </div>
          <div className="btn" onClick={() => btnClick(4)}>
            {btn[4]}
          </div>
          <div className="btn" onClick={() => btnClick(5)}>
            {btn[5]}
          </div>
        </div>
        <div className="row">
          <div className="btn" onClick={() => btnClick(6)}>
            {btn[6]}
          </div>
          <div className="btn" onClick={() => btnClick(7)}>
            {btn[7]}
          </div>
          <div className="btn" onClick={() => btnClick(8)}>
            {btn[8]}
          </div>
        </div>
      </div>
      <div className="winText">{winText}</div>
      <div className="btnDiv">
        <button className="button-54" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
