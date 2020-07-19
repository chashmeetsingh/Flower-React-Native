import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-fa-icons';
import styleSheet from '../Styles/styles';
import {getSelectedTheme, themes} from '../ThemeSwitch/theme';
import {connect} from 'react-redux';
import FitImage from 'react-native-fit-image';
import ImageContainer from '../../../../components/ImageContainer';

class EmailConfirmation extends React.Component<any, any> {
  render() {
    const theme = getSelectedTheme(this.props.selectedTheme)
    const {navigate} = this.props.navigation;
    const {height, width} = Dimensions.get('window');
    return (
      <View style={styleSheet.mainContainer}>
        <ScrollView>
          <View style={styleSheet.imageContainer}>
            <Image
              source={require('./img/Email.png')}
              style={
                (styleSheet.image, {backgroundColor: theme.themeColor})
              }
            />
          </View>
          <View style={styleSheet.bodyContainer}>
            <View style={styleSheet.titleContainer}>
              <Text style={styleSheet.titleText}>Check your inbox</Text>
              <Text style={styleSheet.titleText}> to confirm your account</Text>
            </View>

            <View style={styleSheet.textContainer}>
              <Text style={styles.text}>
                We have sent an email with a confirmation link to your email
                address.
              </Text>
              <Text style={styles.text}>
                In order to complete the sign-up process, please click the
                confirmation link. If you do not receive a confirmation email,
                please check your spam folder.
              </Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: theme.buttonBackRoundColor,borderColor:theme.buttonBackRoundColor}]}
              onPress={() => {
                navigate('Welcome');
              }}>
              <Text style={[styles.buttonText,{color: theme.fontColor}]}>Resend Email</Text>
            </TouchableOpacity>
            {/*<TouchableOpacity*/}
            {/*    style={[styles.button,{borderColor: 'grey',}]}*/}
            {/*    onPress={() => {*/}
            {/*      navigate('Welcome');*/}
            {/*    }}>*/}
            {/*  <Text style={styles.buttonText}>Skip</Text>*/}
            {/*</TouchableOpacity>*/}
          </View>
        </ScrollView>
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
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: '35.14%',
    borderWidth: 3,
    borderColor: '#FDD12B',
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

export default connect(mapStateToProps)(EmailConfirmation);
