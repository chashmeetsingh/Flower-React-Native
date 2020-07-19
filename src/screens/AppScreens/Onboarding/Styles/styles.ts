import {StyleSheet, Dimensions} from 'react-native';

const styleSheet = StyleSheet.create({
  mainContainer: {
    flex: 1,
    fontFamily: 'Nunito',
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center',
  },
  image: {
    // flex: 1,
    // width: Dimensions.get("window").width,
    resizeMode: 'contain',
  },
  defaultImageBackground: {
    backgroundColor: '#FCD028',
  },
  bodyContainer: {
    flex: 2,
  },
  titleContainer: {
    flex: 0,
    alignItems: 'center',
    padding: 20,
  },
  titleText: {
    color: '#5F5D70',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subTitleText: {
    color: '#5F5D70',
    fontSize: 17,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 0,
    marginVertical: '3.5%',
    marginHorizontal: '10%',
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
    color: '#5F5D70',
  },
  textInput: {
    color: '#5F5D70',
    fontSize: 17,
    height: 40,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  textInvalidInput: {
    color: '#E02020',
    fontSize: 17,
    height: 40,
    borderBottomColor: '#E02020',
    borderBottomWidth: 1,
  },
  validationMessageContainer: {
    flex: 0,
    position: 'relative',
    flexDirection: 'row',
    marginHorizontal: '10%',
    alignContent: 'flex-end',
  },
  validationMessageText: {
    fontSize: 12,
    color: '#E02020',
    marginRight: '5%',
  },
  validationAlertIcon: {
    color: '#E02020',
    fontSize: 12,
    alignSelf: 'center',
    marginRight: '2%',
  },
  footerContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignContent: 'center',
  },
  sliderContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    marginLeft: '4.5%',
    flexDirection: 'row',
    paddingVertical: '1%',
  },
  sliderIcon: {
    marginHorizontal: '2.5%',
    alignSelf: 'center',
  },
  touchableContainer: {
    flex: 1,
    marginRight: '4.5%',
  },
  touchable: {
    alignSelf: 'flex-end',
  },
  touchableContent: {
    fontSize: 17,
    color: '#5F5D70',
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
    color: '#5F5D70',
  },
  checkboxWrapper: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
    color: '#5F5D70',
    fontSize: 17,
  },
  checkbox: {
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: '46.14%',
    backgroundColor: '#FDD12B',
    borderRadius: 22,
  },
  buttonText: {
    fontSize: 17,
    color: '#5F5D70',
  },
});

export default styleSheet;
