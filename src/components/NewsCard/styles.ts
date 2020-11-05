import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: 10,
    // height: 200,
    backgroundColor: 'white',
    width: width,
    // borderWidth: 2,
    // borderColor: 'black',
  },
  titleWrapper: {
    // marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageWrapper: {
    height: 200,
    backgroundColor: 'lightblue',
    marginVertical: 5,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  descriptionWrapper: {
    // paddingTop: 5,
  },
  descriptionText: {
    // backgroundColor: 'blue',
  },
  descriptionMore: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});
