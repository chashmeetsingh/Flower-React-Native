import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import styleSheet from '../Styles/styles';
import {connect} from 'react-redux';
import {setSignUpData} from '../../../../redux/auth/authActions';

interface InterestsStates {
  mentalHealth: boolean;
  pregnancy: boolean;
  birthControl: boolean;
  healthyDiet: boolean;
  sexualHealth: boolean;
}

class Interests extends React.Component<any, InterestsStates> {
  constructor(props) {
    super(props);
    this.state = {
      mentalHealth: false,
      pregnancy: false,
      birthControl: false,
      healthyDiet: false,
      sexualHealth: false,
    };
  }

  private onNextClick = () => {
    const {signUpData, dispatch} = this.props;
    signUpData.mental_helth = this.state.mentalHealth;
    signUpData.birth_control_reminders = this.state.birthControl;
    signUpData.helth_and_diet = this.state.healthyDiet;
    dispatch(setSignUpData(signUpData));
    this.props.navigation.navigate('ThemeSwitch');
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styleSheet.mainContainer}>
        <View style={styleSheet.imageContainer}>
          <Image
            style={(styleSheet.image, styleSheet.defaultImageBackground)}
            source={require('./img/interests.png')}
          />
        </View>

        <View style={styleSheet.bodyContainer}>
          <View style={styleSheet.titleContainer}>
            <Text style={styleSheet.titleText}>Let’s Personalize</Text>
            <Text style={styleSheet.titleText}>your App</Text>
          </View>

          {/* preferences section */}
          <View style={styles.preferencesContainer}>
            <Text style={styles.preferenceText}>What are your interests</Text>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                style={styles.checkbox}
                onClick={() => {
                  this.setState({
                    mentalHealth: !this.state.mentalHealth,
                  });
                }}
                isChecked={this.state.mentalHealth}
                rightText={'Mental Health'}
                rightTextStyle={{color: '#5F5D70'}}
              />
              <CheckBox
                style={styles.checkbox}
                onClick={() => {
                  this.setState({
                    pregnancy: !this.state.pregnancy,
                  });
                }}
                isChecked={this.state.pregnancy}
                rightText={'Pregnancy/Ovulation'}
                rightTextStyle={{color: '#5F5D70'}}
              />
              <CheckBox
                style={styles.checkbox}
                onClick={() => {
                  this.setState({
                    birthControl: !this.state.birthControl,
                  });
                }}
                isChecked={this.state.birthControl}
                rightText={'Birth Control Reminders'}
                rightTextStyle={{color: '#5F5D70'}}
              />
              <CheckBox
                style={styles.checkbox}
                onClick={() => {
                  this.setState({
                    healthyDiet: !this.state.healthyDiet,
                  });
                }}
                isChecked={this.state.healthyDiet}
                rightText={'Health and Diet'}
                rightTextStyle={{color: '#5F5D70'}}
              />
              <CheckBox
                style={styles.checkbox}
                onClick={() => {
                  this.setState({
                    sexualHealth: !this.state.sexualHealth,
                  });
                }}
                isChecked={this.state.sexualHealth}
                rightText={'Sexual Health'}
                rightTextStyle={{color: '#5F5D70'}}
              />
            </View>
          </View>
        </View>

        {/* bottom bar */}
        <View style={styleSheet.footerContainer}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signIn: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    fontFamily: 'Nunito',
    color: '#424242',
    display: 'flex',
  },
  image: {
    width: '100%',
    flex: 0,
    resizeMode: 'contain',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  preferencesContainer: {
    flex: 2,
    marginHorizontal: '10%',
    marginVertical: '10%',
  },
  preferenceText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#424242',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
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
});

const mapStateToProps = state => ({
  signUpData: state.auth.signUpData,
});

export default connect(mapStateToProps)(Interests);
