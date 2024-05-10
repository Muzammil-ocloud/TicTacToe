import React, { useState } from "react";
import "./App.css";

function App() {
  const [turn, setTurn] = useState<number>(1);
  const [inputValue, setInputValue] = useState<number>(0);
  const [input, setInput] = useState<boolean>(true);
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    let arr: string[][] = [];
    for (let i = 0; i < inputValue; i++) {
      let row = [];
      for (let j = 0; j < inputValue; j++) {
        row.push("");
      }
      arr.push(row);
    }

    setBtn(arr);
    setWinText("");
    setTurn(1);
    setTurnText("Player 1 turn");
    setInput(false);
  };
  const [turnText, setTurnText] = useState<string>("Player 1 turn");
  const [btn, setBtn] = useState<string[][]>([]);
  const [winText, setWinText] = useState<string>("");
  let checkWinner = (turn: string, arr: string[][]): boolean => {
    //Horizontal win check
    for (let i = 0; i < inputValue; i++) {
      let count: number = 0;
      for (let j = 0; j < inputValue; j++) {
        if (arr[i][j] === turn) count++;
      }
      if (count == inputValue) return true;
    }
    //Vertical win check

    for (let i = 0; i < inputValue; i++) {
      let count: number = 0;
      for (let j = 0; j < inputValue; j++) {
        if (arr[j][i] === turn) count++;
      }
      if (count == inputValue) return true;
    }
    //Left Diagonal win check
    let count: number = 0;
    for (let i = 0; i < inputValue; i++) {
      if (arr[i][i] === turn) count++;
    }
    if (count == inputValue) return true;
    //Right Diagonal win check

    count = 0;
    let j: number = inputValue - 1;
    for (let i = 0; i < inputValue; i++) {
      if (arr[i][j] === turn) count++;
      j--;
    }
    if (count == inputValue) return true;
    console.log(count);
    console.log(inputValue);
    //return it not win
    return false;
  };
  let checkDraw = (arr: string[][]): boolean => {
    let check: boolean = true;
    arr.forEach((val) => {
      val.forEach((v) => {
        if (v === "") check = false;
      });
    });
    return check;
  };

  const btnClick = (box: number, box2: number) => {
    if (turn === 1) {
      let newArr = [...btn];
      if (newArr[box][box2] === "" && winText === "") {
        newArr[box][box2] = "X";
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
      if (newArr[box][box2] === "" && winText === "") {
        newArr[box][box2] = "O";
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
    <div>
      {input ? (
        <div className="form">
          <form>
            <label>Enter a Number</label>
            <input type="number" min={2} onChange={handleChange} />
            <input type="submit" onClick={handleClick} />
          </form>
        </div>
      ) : (
        <div className="App">
          <div className="heading">Tic Tac Toe</div>
          <div className="heading1">{turnText}</div>
          <div className="playArea">
            {btn.map((value, index) => {
              return (
                <div key={index} className="row">
                  {value.map((val, i) => {
                    return (
                      <div
                        key={i}
                        className="btn"
                        onClick={() => btnClick(index, i)}
                      >
                        {val}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="winText">{winText}</div>
          <div className="btnDiv">
            <button className="button-54" onClick={handleClick}>
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
