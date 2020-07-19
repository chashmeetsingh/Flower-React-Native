import * as React from 'react';
import styleSheet from '../Styles/styles';

import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {setSignUpData} from '../../../../redux/auth/authActions';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {validatePassword} from '../../../../util/validator';

interface PasswordStates {
  password: string;
  confirmPassword: string;
  isPasswordValid:boolean;
  isConfirmPasswordValid:boolean
}

class NewPassword extends React.Component<any, PasswordStates> {
  constructor(props) {
    super(props);
    this.state = {
      password: 'Qwerty123',
      confirmPassword: 'Qwerty123',
      isPasswordValid: true,
      isConfirmPasswordValid: true,
    };
  }

  private onNextClick = () => {
    const {signUpData, dispatch} = this.props;
    if (this.state.password == '') {
      this.setState(previousState => ({
        isPasswordValid: false,
      }));
    } else {
      this.setState(previousState => ({
        isPasswordValid: true,
      }));
    }
    if (this.state.confirmPassword == '') {
      this.setState(previousState => ({
        isConfirmPasswordValid: false,
      }));
    } else {
      this.setState(previousState => ({
        isConfirmPasswordValid: true,
      }));
    }
    if (
      this.state.password != '' &&
      this.state.confirmPassword != '' &&
      this.state.password === this.state.confirmPassword &&
      validatePassword(this.state.password)
    ) {
      this.setState(previousState => ({
        isPasswordValid: true,
        isConfirmPasswordValid: true,
      }));
      signUpData.password = this.state.password;
      dispatch(setSignUpData(signUpData));
      this.props.navigation.navigate('Interests');
    } else {
      this.setState(previousState => ({
        isPasswordValid: false,
        isConfirmPasswordValid: false,
      }));
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView style={styleSheet.mainContainer}>
        {/* image/top container */}
        <View style={styleSheet.imageContainer}>
          <Image
            style={(styleSheet.image, styleSheet.defaultImageBackground)}
            source={require('./img/Password.png')}
          />
        </View>

        <View style={styleSheet.bodyContainer}>
          {/* header content  */}
          <View style={styleSheet.titleContainer}>
            <Text style={styleSheet.titleText}>Let's secure your</Text>
            <Text style={styleSheet.titleText}>account</Text>
          </View>

          {/* enter password content */}
          <View style={styleSheet.textContainer}>
            <TextInput
              secureTextEntry={true}
              style={
                this.state.isPasswordValid
                  ? styleSheet.textInput
                  : styleSheet.textInvalidInput
              }
              placeholderTextColor="#5F5D70"
              placeholder="Enter a password"
              onChangeText={(text: string) => {
                this.setState({
                  password: text,
                  isPasswordValid: true,
                });
              }}
              value={this.state.password}
            />
          </View>

          {/* confirm password content */}
          <View style={styleSheet.textContainer}>
            <TextInput
              secureTextEntry={true}
              style={
                this.state.isConfirmPasswordValid
                  ? styleSheet.textInput
                  : styleSheet.textInvalidInput
              }
              placeholderTextColor="#5F5D70"
              placeholder="Confirm your password"
              onChangeText={(text: string) => {
                this.setState({
                  confirmPassword: text,
                  isConfirmPasswordValid: true,
                });
              }}
              value={this.state.confirmPassword}
            />
          </View>

          <View style={styles.alertContainer}>
            {/* alert image container */}
            <View style={styles.alertIconContainer}>
              <Image
                style={styles.alertImage}
                source={require('./img/alert-circle.png')}
              />
            </View>

            {/* alert text container */}
            <View style={styles.alertTextContainer}>
              <Text
                style={
                  this.state.isPasswordValid &&
                  this.state.isConfirmPasswordValid
                    ? styles.alertText
                    : styles.alertTextInvalid
                }>
                Your password must have a minimum of eight (8) characters in
                length, contain at least one (1) uppercase letter (A-Z) and one
                (1) Digit (0-9). Your password must be private.
              </Text>
            </View>
          </View>
        </View>

        {/* bottom bar */}
        <View style={[styleSheet.footerContainer, {marginTop: 175}]}>
          {/* slider icons */}
          <View style={styleSheet.sliderContainer}>
            <Image
              style={styleSheet.sliderIcon}
              source={require('../img/slider-inactive.png')}
            />
            <Image
              style={styleSheet.sliderIcon}
              source={require('../img/slider-active.png')}
            />
            <Image
              style={styleSheet.sliderIcon}
              source={require('../img/slider-inactive.png')}
            />
          </View>

          {/* next button */}
          <View style={styleSheet.touchableContainer}>
            <TouchableOpacity
              style={styleSheet.touchable}
              onPress={this.onNextClick}>
              <Text style={styleSheet.touchableContent}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  alertContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '3.5%',
  },
  alertIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  alertImage: {
    margin: 10,
  },
  alertTextContainer: {
    flex: 5,
  },
  alertText: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#343434',
    opacity: 0.4,
    marginRight: 36,
  },
  alertTextInvalid: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#E02020',
    opacity: 0.4,
    marginRight: 36,
  },
});

const mapStateToProps = state => ({
  signUpData: state.auth.signUpData,
});

export default connect(mapStateToProps)(NewPassword);
