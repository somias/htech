import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  newsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  newsInfoText: {
    color: 'grey',
  },
  titleWrapper: {
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  imageWrapper: {
    height: 200,
    marginVertical: 10,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  imageSource: {
    marginLeft: 5,
    color: 'grey',
  },
  contentWrapper: {
    marginVertical: 10,
    padding: 10,
  },
  content: {
    fontSize: 16,
  },
});
