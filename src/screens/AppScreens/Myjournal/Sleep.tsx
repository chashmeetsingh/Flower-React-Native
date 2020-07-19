import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native-elements';

export default class Sleep extends Component {
  render() {
    const width = Dimensions.get('window').width - 30 - 64 - 8;

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./Images/back-1.jpg')}
          style={styles.background}>
          <View style={styles.cardContainer}>
            <View style={styles.cardInnerContainer}>
              <Text style={styles.workoutHeading}>
                Did you get enough sleep last night?
              </Text>
              <View style={styles.innerCardContainer}>
                <View
                  style={[
                    styles.innerCard,
                    {width: width / 2, height: width / 2},
                  ]}>
                  <Text style={styles.timeText}>0 - 3</Text>
                  <Text style={styles.minutesText}>Hours</Text>
                </View>
                <View
                  style={[
                    styles.innerCard,
                    {width: width / 2, height: width / 2},
                  ]}>
                  <Text style={styles.timeText}>3 - 6</Text>
                  <Text style={styles.minutesText}>Hours</Text>
                </View>
              </View>
              <View style={styles.innerCardContainer}>
                <View
                  style={[
                    styles.innerCard,
                    {width: width / 2, height: width / 2},
                  ]}>
                  <Text style={styles.timeText}>6 - 8</Text>
                  <Text style={styles.minutesText}>Hours</Text>
                </View>
                <View
                  style={[
                    styles.innerCard,
                    {width: width / 2, height: width / 2},
                  ]}>
                  <Text style={styles.timeText}>8+</Text>
                  <Text style={styles.minutesText}>Hours</Text>
                </View>
              </View>
              <Button
                title={'Next'}
                buttonStyle={styles.nextButtonStyle}
                containerStyle={styles.nextButtonContainerStyle}
                titleStyle={styles.nextButtonTitleStyle}
              />
            </View>
          </View>
          <Button
            title={'Cancel'}
            buttonStyle={styles.cancelButtonStyle}
            containerStyle={styles.cancelButtonContainerStyle}
            titleStyle={styles.cancelButtonTitleStyle}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    // flex: 0.8,
    flexGrow: 0,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 35,
  },
  cancelButtonStyle: {
    borderRadius: 22,
    backgroundColor: '#F58015',
  },
  cancelButtonContainerStyle: {
    alignItems: 'center',
  },
  cancelButtonTitleStyle: {
    width: '50%',
  },
  cardInnerContainer: {
    margin: 32,
  },
  workoutHeading: {
    color: '#424242',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 30,
    textAlign: 'center',
  },
  innerCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
  },
  innerCard: {
    backgroundColor: '#FDD12B',
    margin: 4,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
    lineHeight: 46,
  },
  minutesText: {
    color: '#424242',
    fontSize: 17,
    lineHeight: 23,
  },
  infoText: {
    flex: 1,
    color: '#424242',
    fontSize: 17,
    lineHeight: 23,
    marginLeft: 4,
  },
  workoutImage: {
    margin: 4,
  },
  nextButtonStyle: {
    borderRadius: 22,
    backgroundColor: 'white',
  },
  nextButtonContainerStyle: {
    alignItems: 'center',
    marginTop: 8,
  },
  nextButtonTitleStyle: {
    width: '50%',
    color: '#F58015',
    textDecorationLine: 'underline',
  },
});
