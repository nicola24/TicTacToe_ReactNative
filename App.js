import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#5C6BC0',
    alignItems: 'center',
  },
  grid: {
    alignItems: 'center',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    backgroundColor: '#5C6BC0',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#3F51B5',
  },
  textBoard: {
    color: '#fafafa',
    fontWeight: 'bold',
    fontSize: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    paddingTop: 60,
    paddingBottom: 30,
    color: '#fafafa',
  },
  display: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 45,
    color: '#fafafa',
  },
  resetButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3F51B5',
    padding: 10,
    width: '100%',
    height: 70,
  },
  resetText: {
    fontSize: 25,
    color: '#fafafa',
    fontWeight: 'bold',
  },
});

export default class TicTacToe extends Component {
  constructor() {
    super();
    this.state = {
      board: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' ',
      ],
      player: true,
      winX: 'GAME OVER X WINNER!',
      winO: 'GAME OVER O WINNER!',
      count: 0,
    };
    this.onPressReset = this.onPressReset.bind(this);
  }

  onPress(i) {
    const {
      board, player, count,
    } = this.state;
    const squares = board.slice();

    if (squares[i] === ' ') {
      squares[i] = player ? 'X' : 'O';
      this.setState({
        board: squares,
        player: !player,
        count: count + 1,
      });
    }
  }

  onPressReset() {
    this.setState({
      board: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' ',
      ],
      player: true,
      count: 0,
    });
  }

  findWinner() {
    const {
      board, winX, winO, count,
    } = this.state;

    let result = null;

    // row X
    if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') result = winX;
    if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') result = winX;
    if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') result = winX;
    // column X
    if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') result = winX;
    if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') result = winX;
    if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') result = winX;
    // diagonal X
    if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') result = winX;
    if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') result = winX;
    // row O
    if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') result = winO;
    if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') result = winO;
    if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') result = winO;
    // column O
    if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') result = winO;
    if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') result = winO;
    if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') result = winO;
    // diagonal O
    if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') result = winO;
    if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') result = winO;

    else if (result === null && count === 9) result = 'It\'s a draw!';

    return result;
  }

  renderSquare(i) {
    const { board } = this.state;
    return (
      <TouchableOpacity onPress={() => this.onPress(i)}>
        <View style={styles.cell}>
          <Text style={styles.textBoard}>
            {board[i]}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }


  render() {
    const { player, count } = this.state;

    let result;
    if (this.findWinner() === null && count !== 9) {
      result = player ? 'X Turn' : 'O Turn';
    } else {
      result = this.findWinner();
    }

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          Tic Tac Toe
        </Text>
        <View style={styles.grid}>
          <View style={styles.row}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </View>
          <View style={styles.row}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </View>
          <View style={styles.row}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </View>
        </View>
        <Text style={styles.display}>
          {result}
        </Text>
        <TouchableOpacity
          onPress={this.onPressReset}
          style={styles.resetButton}
        >
          <Text style={styles.resetText}>
              RESTART GAME
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
