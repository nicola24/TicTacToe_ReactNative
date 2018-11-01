import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

const Home = () => (
  <View style={styles.home}>
    <Text style={styles.x}>
    X
      <Text style={styles.o}>
      O
      </Text>
    </Text>
    <TouchableOpacity onPress={() => Actions.TicTacToe()} style={styles.homeButton}>
      <Text style={styles.homeText}>
        PLAY GAME
      </Text>
    </TouchableOpacity>
  </View>
);

export default Home;
