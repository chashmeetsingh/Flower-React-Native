import * as React from 'react';
import styleSheet from '../Onboarding/Styles/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';

import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {validatePassword} from '../../../util/validator';
import {changePassword} from '../../../redux/auth/authActions';

interface ChangePasswordStates {
  password: string;
  confirmPassword: string;
}

class ChangePassword extends React.Component<any, ChangePasswordStates> {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      isPasswordValid: true,
      isConfirmPasswordValid: true,
    };
  }

  private changePassword = () => {
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
      const data = {
        user: {
          email: this.props.forgotPasswordEmail,
          reset_password_token: '',
          password: this.state.password,
        },
      };
      this.props.dispatch(changePassword(data));
    } else {
      this.setState(previousState => ({
        isPasswordValid: false,
        isConfirmPasswordValid: false,
      }));
    }
  };

  render() {
    const {navigate, state} = this.props.navigation;
    return (
      <KeyboardAwareScrollView style={styleSheet.mainContainer}>
        {/* image/top container */}
        <View style={styleSheet.imageContainer}>
          <Image
            style={(styleSheet.image, styleSheet.defaultImageBackground)}
            source={require('../Onboarding/Password/img/Password.png')}
          />
        </View>

        <View style={styleSheet.bodyContainer}>
          {/* header content  */}
          <View style={styleSheet.titleContainer}>
            <Text style={styleSheet.titleText}>
              {state.routeName === 'ResetPassword'
                ? 'Change Password'
                : 'Create new password'}
            </Text>
          </View>

          <View style={styleSheet.textContainer}>
            <Text style={styleSheet.text}>
              Your new password must be different
            </Text>
            <Text style={styleSheet.text}>
              from your previously used passwords
            </Text>
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
              value={this.state.text}
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
              value={this.state.text}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                // navigate('Welcome');
                this.changePassword();
              }}>
              <Text style={styles.buttonText}>Confirm</Text>
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
  forgotPasswordEmail: state.auth.forgotPasswordEmail,
});

export default connect(mapStateToProps)(ChangePassword);
