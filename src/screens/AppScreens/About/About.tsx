import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import styleSheet from '../Onboarding/Styles/styles';

class About extends React.Component<any, any> {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={[styles.aboutView]}>
        <View style={styles.image}>
          <Image source={require('./img/logo-white.png')} />
        </View>
        <View style={styleSheet.titleContainer}>
          <Text style={styles.titleText}>About Us</Text>
        </View>
        <View style={styleSheet.bodyContainer}>
          <View style={styles.aboutUsContainer}>
            <Text style={styles.aboutUsText}>
              “Flower” is a health app designed to empower women to take control
              of their health and well-being by offering features that relate to
              all aspects of health. We’re a team comprised of women and men
              from all around the world with one goal in mind: to provide an app
              interface that’s user friendly, affordable, and that offers
              features women can utilize to monitor their mental and physical
              health. The app is designed to be personalized according to the
              user’s individual preferences and needs by offering features and
              information relevant to each stage of life.
            </Text>
          </View>
        </View>
        <View style={[styles.buttonContainer]}>
          <TouchableOpacity
            style={[styleSheet.button, styles.button]}
            onPress={() => {
              navigate('NameAndEmail');
            }}>
            <Text style={styleSheet.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  aboutView: {
    flex: 1,
    fontFamily: 'Nunito',
    backgroundColor: '#FDD12B',
    color: '#5F5D70',
    display: 'flex',
    paddingTop: '10%',
  },
  image: {
    flex: 0,
    alignSelf: 'center',
    paddingBottom: '3.6%',
  },
  titleText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#424242',
  },
  aboutUsContainer: {
    flex: 0,
    paddingHorizontal: '10%',
  },
  aboutUsText: {
    fontSize: 17,
    color: '#424242',
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '10%',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
  },
});

export default About;
