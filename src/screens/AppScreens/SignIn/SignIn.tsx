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
import {connect} from 'react-redux';
import {login} from '../../../redux/auth/authActions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {isNull} from 'lodash';
import {validateEmail} from '../../../util/validator';

interface SignInStates {
  email: string;
  password: string;
}

class SignIn extends React.Component<any, SignInStates> {
  constructor(props) {
    super(props);
    this.state = {
      email: 'cash1@gmail.com',
      password: 'password',
      isValidEmail: true,
      isPasswordValid: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isNull(nextProps.isLoggedIn) && nextProps.isLoggedIn) {
      this.props.navigation.navigate('Home');
    }
  }

  private onSignIn = () => {
    if (
      this.state.password != '' &&
      this.state.email != '' &&
      validateEmail(this.state.email)
    ) {
      const user = {
        user: {
          email: this.state.email,
          password: this.state.password,
        },
      };
      this.props.dispatch(login(user));
    } else {
      if (this.state.password == '') {
        this.setState(previousState => ({
          isPasswordValid: false,
        }));
      } else {
        this.setState(previousState => ({
          isPasswordValid: true,
        }));
      }
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
          <Image style={styleSheet.image} source={require('./img/login.png')} />
        </View>
        <View style={styleSheet.bodyContainer}>
          <View style={styleSheet.titleContainer}>
            <Text style={styleSheet.titleText}>Welcome Back</Text>
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
          <View style={styleSheet.textContainer}>
            <TextInput
              secureTextEntry={true}
              style={
                this.state.isPasswordValid
                  ? styleSheet.textInput
                  : styleSheet.textInvalidInput
              }
              placeholderTextColor="#5F5D70"
              placeholder="What's your password?"
              onChangeText={(text: string) => {
                this.setState({
                  password: text,
                  isPasswordValid: true,
                });
              }}
              value={this.state.password}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.onSignIn();
              }}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.socialLoginsContainer}>
            <Text style={styles.socialLoginsText}>or Sign In with</Text>
            <View style={styles.socialMediaIconWrapping}>
              <Icon name="facebook-square" style={styles.socialMediaIcons} />
              <Text />
              <Icon name="google-plus-square" style={styles.socialMediaIcons} />
            </View>
          </View>

          <View style={styles.signInOptionsContainer}>
            <TouchableOpacity
              style={{}}
              onPress={() => {
                navigate('NameAndEmail');
              }}>
              <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{}}
              onPress={() => {
                navigate('ForgotPassword');
              }}>
              <Text style={styles.forgotPassword}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  loginButtonContainer: {},
  loginButton: {},
  socialLoginsContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: '3%',
  },
  socialLoginsText: {
    fontSize: 15,
    color: '#424242',
  },
  socialMediaIconWrapping: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: '3%',
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
    marginHorizontal: 20,
    fontSize: 15,
    color: '#5F5D70',
  },
  forgotPassword: {
    marginHorizontal: 20,
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
  isLoggedIn: state.auth.isLoggedIn,
  loginError: state.auth.loginError,
});

export default connect(mapStateToProps)(SignIn);
