import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import styleSheet from '../Onboarding/Styles/styles';

class Feelings extends React.Component<any, any> {
  render() {
    return (
      <ImageBackground
        source={require('./Images/back-1.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>How are you feeling </Text>
            <Text style={styles.headerText}>today?</Text>
          </View>
          <View style={styles.optionsHorizontalWrapper}>
            <View style={styles.optionContainer}>
              <View style={styles.imageContainer}>
                <TouchableHighlight style={styles.touchableContainer}>
                  <Image
                    style={styles.image}
                    source={require('../../../../assets/images/feelings/upset.png')}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Upset</Text>
              </View>
            </View>

            <View style={styles.optionContainer}>
              <View style={styles.imageContainer}>
                <TouchableHighlight style={styles.touchableContainer}>
                  <Image
                    style={styles.image}
                    source={require('../../../../assets/images/feelings/peaceful.png')}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Peaceful</Text>
              </View>
            </View>
          </View>

          <View style={styles.optionsHorizontalWrapper}>
            <View style={styles.optionContainer}>
              <View style={styles.imageContainer}>
                <TouchableHighlight style={styles.touchableContainer}>
                  <Image
                    style={styles.image}
                    source={require('../../../../assets/images/feelings/angry.png')}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Angry</Text>
              </View>
            </View>

            <View style={styles.optionContainer}>
              <View style={styles.imageContainer}>
                <TouchableHighlight style={styles.touchableContainer}>
                  <Image
                    style={styles.image}
                    source={require('../../../../assets/images/feelings/happy.png')}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Happy</Text>
              </View>
            </View>
          </View>

          <View style={styles.optionsHorizontalWrapper}>
            <View style={styles.optionContainer}>
              <View style={styles.imageContainer}>
                <TouchableHighlight style={styles.touchableContainer}>
                  <Image
                    style={styles.image}
                    source={require('../../../../assets/images/feelings/energized.png')}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Energized</Text>
              </View>
            </View>

            <View style={styles.optionContainer}>
              <View style={styles.imageContainer}>
                <TouchableHighlight style={styles.touchableContainer}>
                  <Image
                    style={styles.image}
                    source={require('../../../../assets/images/feelings/worried.png')}
                  />
                </TouchableHighlight>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Worried</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styleSheet.button]}
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Text style={styleSheet.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#FFF',
    marginTop: '30%',
    marginBottom: '4%',
    marginLeft: '4%',
    marginRight: '4%',
    borderRadius: 35,
  },
  headerContainer: {
    flex: 1,
    alignContent: 'center',
    marginTop: '5%',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#424242',
    alignSelf: 'center',
  },
  optionsHorizontalWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  optionContainer: {
    flex: 1,
    alignContent: 'center',
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 2,
    alignContent: 'center',
    marginHorizontal: '10%',
    marginVertical: '10%',
  },
  descriptionContainer: {
    flex: 0,
    alignContent: 'center',
  },
  touchableContainer: {
    flex: 0,
  },
  image: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  descriptionText: {
    fontSize: 17,
    color: '#5F5D70',
    alignSelf: 'center',
    marginTop: '30%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: '10%',
  },
});

export default Feelings;
