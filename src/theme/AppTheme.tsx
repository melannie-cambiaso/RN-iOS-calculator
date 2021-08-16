import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black'
  },
  calContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end'
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right'
  },
  miniResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10
  }
});

export default styles;
