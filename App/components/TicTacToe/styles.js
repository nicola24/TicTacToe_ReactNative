import { StyleSheet } from 'react-native';

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
  x: {
    fontSize: 50,
    color: '#ff3333',
    fontWeight: 'bold',
  },
  o: {
    fontSize: 50,
    color: '#3299ff',
    fontWeight: 'bold',
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

export default styles;
