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
import Icon from 'react-native-fa-icons';
import {connect} from 'react-redux';
import {themes} from '../ThemeSwitch/theme';
import {setSignUpData, verifyEmail} from '../../../../redux/auth/authActions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {isNull, isEqual} from 'lodash';
import {validateEmail} from '../../../../util/validator';

interface NameAndEmailStates {
  name: string;
  email: string;
  isValidEmail: boolean;
}

class NameAndEmail extends React.Component<any, NameAndEmailStates> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'sachin',
      email: 'sachin+12@venturit.com',
      isValidEmail: true,
      isValidName: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isNull(nextProps.verifyEmailStatus) && !isEqual(nextProps.verifyEmailStatus, this.props.verifyEmailStatus)) {
      if(nextProps.verifyEmailStatus){
        const data = {
          first_name: this.state.name,
          email: this.state.email,
        };
        this.props.dispatch(setSignUpData(data));
        this.props.navigation.navigate('CreatePassword');
      }else{
        this.setState(({
          isValidEmail: false
        }));
      }
    }
  }

  private onNextClick = () => {
    const data = {
      user: {
        name:this.state.name,
        email: this.state.email,
      },
    };
    this.setState({
      isValidEmail:true
    })
    this.props.dispatch(verifyEmail(data));
    // this.props.navigation.navigate('CreatePassword');
  };

  render() {
    return (
      <KeyboardAwareScrollView style={styleSheet.mainContainer}>
        {/* image/top container */}
        <View style={styleSheet.imageContainer}>
          <Image
            style={(styleSheet.image, styleSheet.defaultImageBackground)}
            source={require('./img/PersonalInfo.png')}
          />
        </View>
        <View style={styleSheet.bodyContainer}>
          <View style={styleSheet.titleContainer}>
            <Text style={styleSheet.titleText}>Let’s start with a</Text>
            <Text style={styleSheet.titleText}>presentation</Text>
          </View>

          <View style={styleSheet.textContainer}>
            <TextInput
              style={
                this.state.isValidName
                  ? styleSheet.textInput
                  : styleSheet.textInvalidInput
              }
              placeholderTextColor="#5F5D70"
              placeholder="What's your preferred name?"
              autoCorrect={false}
              value={this.state.name}
              onChangeText={(text: string) => {
                this.setState({name: text});
              }}
              onFocus={() => {
                if (!this.state.isValidName) {
                  this.setState({isValidName: true, name: ''});
                }
              }}
            />
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
          {
            !this.state.isValidEmail &&
            <View style={styleSheet.validationMessageContainer}>
              <Icon
                  name="exclamation-circle"
                  style={styleSheet.validationAlertIcon}
              />
              <Text style={styleSheet.validationMessageText}>
                Email Already Exists
              </Text>
            </View>
          }


          <View style={styles.socialLoginsContainer}>
            <Text style={styles.socialLoginsText}>or Sign In with</Text>
            <View style={styles.socialMediaIconWrapping}>
              <Icon name="facebook-square" style={styles.socialMediaIcons} />
              <Text />
              <Icon name="google-plus-square" style={styles.socialMediaIcons} />
            </View>
          </View>
        </View>

        {/* bottom bar */}
        <View style={[styleSheet.footerContainer, {marginTop: 100}]}>
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
  socialLoginsContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '5%',
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
});

const mapStateToProps = state => ({
  selectedTheme: state.theme.selectedTheme,
  verifyEmailStatus: state.auth.verifyEmailStatus,
});

export default connect(mapStateToProps)(NameAndEmail);
