import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styleSheet from '../../../Onboarding/Styles/styles';
import {connect} from 'react-redux';
import {getSelectedTheme} from "../../../Onboarding/ThemeSwitch/theme";

class Workout extends React.Component<any, any> {
  render() {
    const theme = getSelectedTheme(this.props.selectedTheme);
    return (
      <View style={styleSheet.mainContainer}>
        <Text
          style={{
            flex: 0,
            textAlign: 'center',
            color: '#F58015',
            fontSize: 17,
            fontWeight: '900',
            padding: 20,
          }}>
          Benefits of exercising on your period
        </Text>
        <View style={styles.infoContainer}>
          <View style={[styles.infoBox,{backgroundColor:theme.themeColor}]}>
            <Text style={[styles.infoText,{color:theme.fontColor}]}>Decrease</Text>
            <Text style={[styles.infoText,{color:theme.fontColor}]}>PMS</Text>
            <Text style={[styles.infoText,{color:theme.fontColor}]}>Symptoms</Text>
          </View>
          <View style={[styles.infoBox,{backgroundColor:theme.themeColor}]}>
            <Text style={[styles.infoText,{color:theme.fontColor}]}>Tap into</Text>
            <Text style={[styles.infoText,{color:theme.fontColor}]}>your</Text>
            <Text style={[styles.infoText,{color:theme.fontColor}]}>endorphins</Text>
          </View>
          <View style={[styles.infoBox,{backgroundColor:theme.themeColor}]}>
            <Text style={[styles.infoText,{color:theme.fontColor}]}>Experience</Text>
            <Text style={[styles.infoText,{color:theme.fontColor}]}>more</Text>
            <Text style={[styles.infoText,{color:theme.fontColor}]}>strength</Text>
            <Text style={[styles.infoText,{color:theme.fontColor}]}>and power</Text>
          </View>
        </View>
        <Text
          style={{
            flex: 0,
            textAlign: 'center',
            color: '#F58015',
            fontSize: 13,
            padding: 20,
          }}>
          More Info
        </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.box}>
            <ImageBackground
              source={require('./img/yoga.jpg')}
              style={{width: '100%', height: '96%'}}
              imageStyle={{borderRadius: 10}}>
              <Text style={styles.header}>Yoga</Text>
              <Text style={styles.subheader}>32 mins</Text>
            </ImageBackground>
          </View>
          <View style={styles.box}>
            <ImageBackground
              source={require('./img/pilates.jpg')}
              style={{width: '100%', height: '96%'}}
              imageStyle={{borderRadius: 10}}>
              <Text style={styles.header}>Pilates</Text>
              <Text style={styles.subheader}>40 mins</Text>
            </ImageBackground>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoBox: {
    flex: 1,
    marginHorizontal: '3%',
    alignItems: 'center',
    backgroundColor: '#FDD12B',
    borderRadius: 10,
    marginTop: '8%',
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  infoContainer: {
    flex: 0,
    flexDirection: 'row',
    alignContent: 'center',
    zIndex: 999,
  },
  infoText: {
    fontSize: 17,
    color: '#424242',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingHorizontal: '7.2%',
  },
  box: {
    flex: 1,
    marginHorizontal: '3%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: '8%',
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  header: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingHorizontal: '7.2%',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 17,
    fontWeight: '800',
    color: 'rgba(52,52,52,0.2)',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingHorizontal: '7.2%',
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps)(Workout);
