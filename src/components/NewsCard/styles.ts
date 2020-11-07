import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    width: width,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,

    elevation: 10,
  },
  titleWrapper: {},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageWrapper: {
    height: 200,
    marginVertical: 5,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  descriptionWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  descriptionText: {},
  descriptionMore: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});
