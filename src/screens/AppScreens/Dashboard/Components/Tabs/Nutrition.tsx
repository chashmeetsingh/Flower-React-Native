import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native';
import styleSheet from '../../../Onboarding/Styles/styles';
import SnapCarousel from '../SnapCarousel';
import Icon from 'react-native-fa-icons';
import TabComponent from '../TabComponent';
import {getSelectedTheme} from "../../../Onboarding/ThemeSwitch/theme";
import {connect} from 'react-redux';

class Nutrition extends React.Component<any, any> {
  render() {
    const theme = getSelectedTheme(this.props.selectedTheme);
    return (
        <View style={[styleSheet.mainContainer]}>
        <View style={[styles.topContainer,{backgroundColor:theme.themeColor}]}>
          <View style={styles.headerContainer}>
            <Text style={{flex: 1}}></Text>
            <Text style={[styles.header,{color:theme.fontColor}]}>My Cycle - 17 Oct</Text>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="exclamation-circle" style={styles.add} />
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
              <Text style={styles.infoHeader}>Weight</Text>
              <Text style={styles.infoText}>65 Kg</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoHeader}>Rec. Calories</Text>
              <Text style={styles.infoText}>2,000</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoHeader}>Food Restrictions</Text>
              <Text style={styles.infoText}>vegan + 2</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TabComponent/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: '#FBD042',
  },
  bottomContainer: {
    flex: 5,
    marginTop: '16%',
  },
  infoContainer: {
    flex: 0,
    flexDirection: 'row',
    alignContent: 'center',
    zIndex: 999,
  },
  infoBox: {
    flex: 1,
    marginHorizontal: '3%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: '8%',
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  infoHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#F58015',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingHorizontal: '7.2%',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 17,
    color: '#424242',
    paddingTop: '5%',
    paddingBottom: '10%',
    paddingHorizontal: '7.2%',
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
});

const mapStateToProps = state => ({
  selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps)(Nutrition);
