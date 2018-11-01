import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Home from '../Home';
import TicTacToe from '../TicTacToe';

const App = () => (
  <Router>
    <Stack key="root">
      <Scene component={Home} navTransparent />
      <Scene key="TicTacToe" component={TicTacToe} navTransparent navBarButtonColor="white" />
    </Stack>
  </Router>
);

export default App;
