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

class VerifyEmail extends React.Component<any, any> {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styleSheet.mainContainer}>
        <View style={styleSheet.imageContainer}>
          <Image
            style={(styleSheet.image, styleSheet.defaultImageBackground)}
            source={require('../Onboarding/EmailConfirmation/img/Email.png')}
          />
        </View>

        <View style={styleSheet.bodyContainer}>
          <View style={styleSheet.titleContainer}>
            <Text style={styleSheet.titleText}>Check your inbox!</Text>
          </View>

          <View style={styleSheet.textContainer}>
            <Text style={styles.text}>
              No worries, we have sent the password recovery instructions to
              your email
            </Text>
            <Text style={styles.text}>{this.props.forgotPasswordEmail}</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigate('ResetPassword');
            }}>
            <Text style={styles.buttonText}>OK</Text>
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
  forgotPasswordEmail: state.auth.forgotPasswordEmail,
});

export default connect(mapStateToProps)(VerifyEmail);
