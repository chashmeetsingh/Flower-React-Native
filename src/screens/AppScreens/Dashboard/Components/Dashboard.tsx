import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native';
import styleSheet from '../../Onboarding/Styles/styles';
import Swiper from 'react-native-swiper';
import CycleStats from './CycleStats';
import TabComponent from './TabComponent';
import CycleGraph from './CycleGraph';
import Icon from 'react-native-fa-icons';
import {withNavigation} from 'react-navigation';
import Journal from './Tabs/Journal';
import {getSelectedTheme} from "../../Onboarding/ThemeSwitch/theme";
import {connect} from 'react-redux';

class Dashboard extends React.Component<any, any> {
  render() {
    const {navigate} = this.props.navigation;
    const theme = getSelectedTheme(this.props.selectedTheme);
    console.log('loginSuccess');
    console.log(this.props.loginSuccess);
    return (
      <View style={styleSheet.mainContainer}>
        <ImageBackground source={require('../../Onboarding/Preferences/img/preferences.png')} style={[styles.topContainer,{backgroundColor:theme.themeColor}]}>
          <View style={styles.headerContainer}>
            <Text style={{flex: 1}}></Text>
            <Text style={[styles.header,{color:theme.fontColor}]}>My Cycle - 17 Oct</Text>
            <TouchableOpacity
              onPress={() => {
                navigate('Calendar');
              }}>
              <Icon name="plus" style={styles.add} />
            </TouchableOpacity>
          </View>
          <View style={styles.sliderContainer}>
            <View style={{flex: 1.5, marginTop: 1}}>
              <CycleGraph theme={theme} />
            </View>
            <View style={{flex: 1}}>
              <CycleStats />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.bottomContainer}>
          <View style={styles.tabContainer}>
            <Journal />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 2,
    backgroundColor: '#FFE16E',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#FFE16E',
  },
  headerContainer: {
    flex: 0,
    alignContent: 'center',
    paddingVertical: '3%',
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'red',
    // display: 'flex'
  },
  header: {
    fontSize: 20,
    color: '#424242',
    fontWeight: '800',
    alignSelf: 'center',
    flex: 2,
    paddingBottom: 10,
    // backgroundColor: 'blue'
  },
  add: {
    fontSize: 20,
    color: 'rgba(52,52,52,0.4)',
    alignItems: 'flex-end',
    marginRight: 20,
    flex: 1,
    // backgroundColor: 'white',
    alignContent: 'flex-end',
    textAlign: 'right',
  },
  sliderContainer: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },

  wrapper: {},
  slide: {
    flex: 1,
  },
  text: {
    color: '#333',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({
  selectedTheme: state.theme.selectedTheme,
});


export default withNavigation(connect(mapStateToProps)(Dashboard));
