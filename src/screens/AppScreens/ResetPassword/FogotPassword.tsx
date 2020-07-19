import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-fa-icons';
import styleSheet from '../Onboarding/Styles/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {forgotPassword} from '../../../redux/auth/authActions';
import {connect} from 'react-redux';
import {isEqual, isNull} from 'lodash';
import {validateEmail} from '../../../util/validator';

interface ForgotPasswordState {
  email: string;
}

class ForgotPassword extends React.Component<any, ForgotPasswordState> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isValidEmail: true,
    };
  }

  componentWillReceiveProps(nextProps): void {
    if (
      !isEqual(
        nextProps.forgotPasswordSuccess,
        this.props.forgotPasswordSuccess,
      ) &&
      isNull(nextProps.forgotPasswordSuccess)
    ) {
      this.props.navigation.navigate('VerifyEmail');
    }
  }

  private onForgotPassword = () => {
    if (this.state.email != '' && validateEmail(this.state.email)) {
      const data = {
        user: {
          email: this.state.email,
          reset: true,
        },
      };
      this.props.dispatch(forgotPassword(data));
    } else {
      if (this.state.email == '') {
        this.setState(previousState => ({
          isValidEmail: false,
          email: "Field can't be blank",
        }));
      } else {
        if (!validateEmail(this.state.email)) {
          this.setState(previousState => ({
            isValidEmail: false,
            email: 'Invalid email address',
          }));
        } else {
          this.setState(previousState => ({
            isValidEmail: true,
          }));
        }
      }
    }
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAwareScrollView style={styleSheet.mainContainer}>
        <View style={styleSheet.imageContainer}>
          <Image
            style={(styleSheet.image, styleSheet.defaultImageBackground)}
            source={require('../Onboarding/NameAndEmail/img/PersonalInfo.png')}
          />
        </View>

        <View style={styleSheet.bodyContainer}>
          <View style={styleSheet.titleContainer}>
            <Text style={styleSheet.titleText}>Forgot your password?</Text>
          </View>

          <View style={styleSheet.textContainer}>
            <Text style={styles.text}>
              Enter your registered email below to
            </Text>
            <Text style={styles.text}>
              receive instuctions on how to reset your
            </Text>
            <Text style={styles.text}>password</Text>
          </View>

          <View style={styleSheet.textContainer}>
            <TextInput
              style={
                this.state.isValidEmail
                  ? styleSheet.textInput
                  : styleSheet.textInvalidInput
              }
              placeholderTextColor="#5F5D70"
              placeholder="What's your email?"
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.email}
              onChangeText={(text: string) => {
                this.setState({email: text});
                if (!this.state.isValidEmail) {
                  if (validateEmail(text)) {
                    this.setState(previousState => ({isValidEmail: true}));
                  } else {
                    this.setState(previousState => ({isValidEmail: false}));
                  }
                }
              }}
              onFocus={() => {
                if (!this.state.isValidEmail) {
                  this.setState({isValidEmail: true, email: ''});
                }
              }}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.onForgotPassword();
              }}>
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.signInOptionsContainer}>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              navigate('SignIn');
            }}>
            <Text style={styles.backToLogin}>Back to login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
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
  forgotPasswordSuccess: state.auth.forgotPasswordSuccess,
  forgotPasswordError: state.auth.forgotPasswordSuccess,
});

export default connect(mapStateToProps)(ForgotPassword);
