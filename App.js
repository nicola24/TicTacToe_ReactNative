import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity,
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
      isNext: true, // if true play X if false player O
    };
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { board, isNext } = this.state;
    const squares = board.slice();

    squares[0] = isNext ? 'X' : 'O';
    this.setState({
      board: squares,
      isNext: !isNext,
    });
  }

  renderSquare(i) {
    const { board } = this.state;
    return (
      <TouchableOpacity onPress={() => console.log(i)}>
        <View style={styles.cell}>
          <Text style={styles.text}>
            {board[i]}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
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
    );
  }
}
