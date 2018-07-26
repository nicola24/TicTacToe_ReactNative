import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, Button,
} from 'react-native';

const styles = StyleSheet.create({
  grid: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#14bdac',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    backgroundColor: '#14bdac',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#0da192',
  },
  text: {
    color: '#f2ebd3',
    fontWeight: 'bold',
    fontSize: 50,
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
      player: true, // if true play X if false player O
      winX: 'GAME OVER X WINNER!',
      winO: 'GAME OVER O WINNER!',
      count: 0,
    };
    this.onPressReset = this.onPressReset.bind(this);
  }

  onPress(i) {
    const { board, player, count } = this.state;
    const squares = board.slice();

    squares[i] = player ? 'X' : 'O';
    this.setState({
      board: squares,
      player: !player,
      count: count + 1,
    });
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
    const { board, winX, winO } = this.state;
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
    return result;
  }

  renderSquare(i) {
    const { board } = this.state;
    return (
      <TouchableOpacity onPress={() => this.onPress(i)}>
        <View style={styles.cell}>
          <Text style={styles.text}>
            {board[i]}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }


  render() {
    const { player, count } = this.state;

    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
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
        <Text>
          {player ? 'X Turn' : 'O Turn'}
        </Text>
        <Text>
          {count === 9 ? 'It\'s a draw!' : this.findWinner()}
        </Text>
        <Button
          onPress={this.onPressReset}
          title="Reset"
        />
      </View>
    );
  }
}
