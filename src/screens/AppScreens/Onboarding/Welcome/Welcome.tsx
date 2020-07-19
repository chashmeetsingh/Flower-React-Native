import * as React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import styleSheet from '../Styles/styles';
import {getSelectedTheme, themes} from '../ThemeSwitch/theme';
import {connect} from 'react-redux';

class Welcome extends React.Component<any, any> {
  render() {
    const {navigate} = this.props.navigation;
    const theme = getSelectedTheme(this.props.selectedTheme)
    return (
      <View style={styleSheet.mainContainer}>
        <View style={styleSheet.imageContainer}>
          <Image
            style={
              [styleSheet.image, {backgroundColor: theme.themeColor}]
            }
            source={require('./img/Welcome.png')}
          />
        </View>

        <View style={styleSheet.bodyContainer}>
          <View style={styleSheet.titleContainer}>
            <Text style={styleSheet.titleText}>Welcome to the</Text>
            <Text style={styleSheet.titleText}>Flower Community!</Text>
          </View>

          <View style={styleSheet.textContainer}>
            <Text style={styles.text}>
              We were able to verify the information you provided, and your
              account setup is now complete.
            </Text>
            <Text style={styles.text}>
              Continue and write down your personal health information and start
              enjoying everything that Flower has to offer!
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: theme.buttonBackRoundColor}]}
            onPress={() => {
              navigate('MyPreferences');
            }}>
            <Text style={[styles.buttonText, {color: theme.fontColor}]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    textAlign: 'center',
    color: '#5F5D70',
  },
  socialLoginsContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: '3%',
  },
  socialLoginsText: {
    fontSize: 17,
    color: '#424242',
  },
  socialMediaIconWrapping: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  socialMediaIcons: {
    marginHorizontal: 10,
    fontSize: 25,
    color: '#5F5D70',
  },
  signInOptionsContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUp: {
    marginHorizontal: 5,
    fontSize: 15,
    color: '#5F5D70',
  },
  backToLogin: {
    marginHorizontal: 5,
    fontSize: 15,
    color: '#FDD12B',
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

const mapStateToProps = state => ({
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps)(Welcome);
