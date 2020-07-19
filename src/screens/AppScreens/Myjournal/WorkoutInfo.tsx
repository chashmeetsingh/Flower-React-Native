import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView, Linking} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class WaterInfo extends Component<any, any> {
  state = {
    url:
      'https://www.betterhealth.vic.gov.au/health/healthyliving/physical-activity-for-women',
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
            Regular physical activity is vital for good physical and mental
            health. It helps improve your overall health and fitness, maintain a
            healthy weight, reduce your risk for many chronic diseases and
            promote good mental health.
            {'\n'}
            {'\n'}
            Australia's Physical Activity and Sedentary Behaviour Guidelines
            recommend that at least 30 minutes of moderate-intensity physical
            activity on most, preferably all, days is required for good health.
            This is the same for women and men. However, only 54 per cent of
            Australian women meet these guidelines.
            {'\n'}
            {'\n'}
            Some of the barriers to physical exercise that women face include
            family responsibilities, body image and perceptions of safety.
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
