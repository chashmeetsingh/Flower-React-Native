import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView, Linking} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class WaterInfo extends Component<any, any> {
  state = {
    url:
      'https://www.healthline.com/nutrition/how-much-water-should-you-drink-per-day',
  };

  loadInBrowser = () => {
    Linking.openURL(this.state.url).catch(err =>
      console.error("Couldn't load page", err),
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Button
            containerStyle={styles.cancelButtonContainer}
            buttonStyle={styles.cancelButtonStyle}
            icon={<Icon name="times" size={24} color="#424242" />}
            onPress={() => this.props.navigation.goBack()}
          />
          <Text style={styles.infoText}>
            The body is about 60% water, give or take.
            {'\n'}
            {'\n'}
            You are constantly losing water from your body, primarily via urine
            and sweat. To prevent dehydration, you need to drink adequate
            amounts of water.
            {'\n'}
            {'\n'}
            There are many different opinions on how much water you should be
            drinking every day.
            {'\n'}
            {'\n'}
            Health authorities commonly recommend eight 8-ounce glasses, which
            equals about 2 liters, or half a gallon. This is called the 8×8 rule
            and is very easy to remember.
            {'\n'}
            {'\n'}
            However, some health gurus believe that you need to sip on water
            constantly throughout the day, even when you’re not thirsty.
            {'\n'}
            {'\n'}
            As with most things, this depends on the individual. Many factors
            (both internal and external) ultimately affect your need for water.
          </Text>
          <View style={styles.moreInfoView}>
            <Text style={styles.moreInfoText}>For more information visit:</Text>
            <Button
              buttonStyle={styles.moreInfoButtonStyle}
              titleStyle={styles.moreInfoTitleStyle}
              title={this.state.url}
              onPress={() => this.loadInBrowser()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  cancelButtonContainer: {
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
    marginLeft: 22,
  },
  cancelButtonStyle: {
    backgroundColor: 'transparent',
  },
  infoText: {
    margin: 32,
    fontSize: 17,
    lineHeight: 23,
    color: '#424242',
  },
  moreInfoView: {
    margin: 32,
  },
  moreInfoText: {
    color: '#424242',
    fontSize: 14,
    lineHeight: 17,
  },
  moreInfoButtonStyle: {
    backgroundColor: 'transparent',
    padding: 0,
    marginLeft: -14,
  },
  moreInfoTitleStyle: {
    color: '#F58015',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'left',
    margin: 0,
    textDecorationLine: 'underline',
  },
});
