import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#5C6BC0',
    padding: 10,
    alignItems: 'center',
  },
  x: {
    top: '30%',
    fontSize: 100,
    color: '#ff3333',
    fontWeight: 'bold',
  },
  o: {
    fontSize: 100,
    color: '#3299ff',
    fontWeight: 'bold',
  },
  homeButton: {
    top: '40%',
    backgroundColor: '#5C6BC0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
    height: 70,
    borderWidth: 5,
    borderColor: '#3F51B5',
  },
  homeText: {
    fontSize: 25,
    color: '#fafafa',
    fontWeight: 'bold',
  },
});

export default styles;
