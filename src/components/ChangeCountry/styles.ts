import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: 100,
    marginRight: 10,
  },
  pickedCountry: {
    fontWeight: 'bold',
    fontSize: 25,
    backgroundColor: 'black',
    color: 'white',
  },
  unPickedCountry: {
    fontWeight: 'bold',
    fontSize: 25,
    backgroundColor: 'white',
    color: 'black',
  },
});
