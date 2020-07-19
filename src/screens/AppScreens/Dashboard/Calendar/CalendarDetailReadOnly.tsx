import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Button} from 'react-native-elements';
import SymptonItem from './SymptonItem';

class CalendarDetailReadOnly extends Component<any, any> {
  private openMyJournal = () => {
    this.props.navigation.navigate('JournalReview');
  };

  render() {
    const {navigation} = this.props;

    return (
      <ImageBackground
        style={{flex: 1, display: 'flex'}}
        source={require('../../../../../assets/images/yellowbanner.png')}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{navigation.getParam('date')}</Text>
        </View>

        <View style={styles.symptomsCardContainer}>
          <Text style={styles.mySymptomsText}>My Symptoms</Text>

          <View style={styles.mySymptomsContainer}>
            <View style={{flex: 0.25}}>
              <SymptonItem
                isSelected={false}
                title={'Medium'}
                image={require('../../../../../assets/images/medium.png')}
              />
            </View>
            <View style={{flex: 0.25}}>
              <SymptonItem
                isSelected={false}
                title={'Cramps'}
                image={require('../../../../../assets/images/cramps.png')}
              />
            </View>
            <View style={{flex: 0.25}}>
              <SymptonItem
                isSelected={false}
                title={'Tender Breasts'}
                image={require('../../../../../assets/images/tender-breasts.png')}
              />
            </View>
            <View style={{flex: 0.25}}>
              <SymptonItem
                isSelected={false}
                title={'Pill Taken'}
                image={require('../../../../../assets/images/taken.png')}
              />
            </View>
          </View>

          <View style={styles.editButtonContainer}>
            <Button
              title={'Edit'}
              type={'outline'}
              containerStyle={{
                width: '50%',
              }}
              buttonStyle={{
                borderRadius: 20,
                borderWidth: 3,
                borderColor: '#F58015',
              }}
              titleStyle={{
                color: '#F58015',
              }}
              onPress={() => {
                this.props.navigation.navigate('CalendarDetail');
              }}
            />
          </View>

          <View style={{margin: 16}}>
            <Text style={styles.journalEntryText}>My Journal Entry</Text>
            <Text style={styles.journalHeading}>My Journal Heading</Text>
            <Text style={styles.journalDescription}>
              Seven Ways To Motivate Yourself 1. Explain your plans. Usually, by
              the time I tell my wife about the newsletter I’m going to write,
              I’m out of my slump and back at the keyboard. Find someone that
              listens well, and tell them what you want to do. If it is
              something that you really want, this will almost always get you
              motivated. 2. Stimulate desire. Imagine the rewards of your effort
              clearly.
            </Text>
            <Button
              title={'Read More'}
              containerStyle={styles.readMoreButtonContainer}
              type={'clear'}
              titleStyle={styles.readMoreTitle}
              onPress={() => this.openMyJournal()}
            />
          </View>
        </View>

        <View style={styles.okButtonContainer}>
          <Button
            title={'Ok'}
            containerStyle={{
              width: '50%',
            }}
            buttonStyle={styles.okButtonStyle}
            type={'solid'}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 8,
    // backgroundColor: 'white',
    borderRadius: 20,
    // marginBottom: 80,
    // marginLeft: 20,
    // marginRight: 20,
    // backgroundColor: 'black',
  },
  buttonWithImageHeading: {
    color: '#5F5D70',
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    marginTop: 16,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    height: 38,
    color: '#424242',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 38,
    textAlign: 'center',
  },
  symptomsCardContainer: {
    backgroundColor: 'white',
    margin: 16,
    flexGrow: 0,
    borderRadius: 20,
  },
  mySymptomsText: {
    color: '#424242',
    textAlign: 'center',
    fontSize: 28,
    margin: 10,
    // backgroundColor: 'red'
  },
  editButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: 16,
    marginBottom: 0,
  },
  journalEntryText: {
    color: '#424242',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  journalHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'rgba(52,52,52,0.4)',
    marginTop: 8,
  },
  readMoreButtonContainer: {
    flexWrap: 'wrap',
    alignContent: 'flex-end',
    display: 'flex',
    alignItems: 'flex-end',
  },
  readMoreTitle: {
    color: '#F58015',
    textDecorationLine: 'underline',
    fontSize: 17,
    lineHeight: 23,
  },
  okButtonStyle: {
    borderRadius: 20,
    backgroundColor: '#F58015',
    height: 44,
  },
  okButtonContainer: {
    // backgroundColor: 'red',
    flex: 2,
    alignItems: 'center',
  },
  journalDescription: {
    marginTop: 8,
    flexWrap: 'wrap',
    fontSize: 17,
  },
  mySymptomsContainer: {
    flexDirection: 'row',
    height: 'auto',
    // backgroundColor: 'red',
  },
});

export default withNavigation(CalendarDetailReadOnly);
