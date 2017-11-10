import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Hero {
    get id() { this._id; }
    set id(value) { this._id = value; }
    get name() { return this._name; }
    set name(value) { this._name = value; }
}



class Heroes extends React.Component {
    // constructor(value){
    //     super();
    //     this._title = value; 
    // }
    // get title() {return this._title;}
    // set title(value) {this._title = value;}
    render() {
        var selectedHero = new Hero();
        selectedHero = null;
        var count = [1, 2, 3];
        return (
            <div>
                <h2>My Heroes</h2>
                <ul class="heroes">
                    {

                        count.map((item, index) => (
                            <li>{index}</li>
                        ))
                    }
                </ul>
                {
                    (() => {
                        if (selectedHero) {

                            return (
                                <div>
                                    <h2>
                                        {selectedHero.name} is my hero
                                    </h2>
                                    <button click="gotoDetail()">View Details</button>
                                </div>
                            )
                        }
                    })()
                }
            </div>
        );
    }
}
class App extends React.Component {
                    render() {
                var title = 'Tour of React Heroes';
        return (
            <div>
                    <h1>{title}</h1>
                    <Heroes />
                </div>
                );
    }
    //#region old code
    //   constructor() {
                    //     super();
                    //     this.state = {
                    //       history: [
                    //         {
                    //           squares: Array(9).fill(null)
                    //         }
                    //       ],
                    //       stepNumber: 0,
                    //       xIsNext: true
                    //     };
                    //   }
                    //#endregion
                }

                ReactDOM.render(<App />, document.getElementById("root"));
// // <!doctype html>
// // <html lang="en">
// // <head>
// //   <meta charset="utf-8">
// //   <title>Myapp</title>
// //   <base href="/">

// //   <meta name="viewport" content="width=device-width, initial-scale=1">
// //   <link rel="icon" type="image/x-icon" href="favicon.ico">
// // </head>
// // <body>
// //   <my-app></my-app>
// // </body>
// // </html>
// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return (
//       <Square
//         value={this.props.squares[i]}
//         onClick={() => this.props.onClick(i)}
//       />
//     );
//   }

//   render() {
//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       history: [
//         {
//           squares: Array(9).fill(null)
//         }
//       ],
//       stepNumber: 0,
//       xIsNext: true
//     };
//   }

//   handleClick(i) {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? "X" : "O";
//     this.setState({
//       history: history.concat([
//         {
//           squares: squares
//         }
//       ]),
//       stepNumber: history.length,
//       xIsNext: !this.state.xIsNext
//     });
//   }

//   jumpTo(step) {
//     this.setState({
//       stepNumber: step,
//       xIsNext: (step % 2) === 0
//     });
//   }

//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);

//     const moves = history.map((step, move) => {
//       const desc = move ?
//         'Go to move #' + move :
//         'Go to game start';
//       return (
//         <li key={move}>
//           <button onClick={() => this.jumpTo(move)}>{desc}</button>
//         </li>
//       );
//     });

//     let status;
//     if (winner) {
//       status = "Winner: " + winner;
//     } else {
//       status = "Next player: " + (this.state.xIsNext ? "X" : "O");
//     }

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board
//             squares={current.squares}
//             onClick={i => this.handleClick(i)}
//           />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// // ========================================

// ReactDOM.render(<Game />, document.getElementById("root"));

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }
