import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import styleSheet from '../Onboarding/Styles/styles';

class Water extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      waterLevel: 1,
    };
  }

  addWater() {
    this.setState({ waterLevel: this.state.waterLevel + 1 })
  }
  reduceWater() {
    this.setState({ waterLevel: this.state.waterLevel - 1 })
  }
  render() {
    return (
      <ImageBackground
        source={require('./Images/back-1.jpg')}
        style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <Text style={styles.title}>How much water have you had today?</Text>
          <View style={{ flexDirection: 'row', marginTop: '10%' }}>
            <View style={[styles.numberContainer, { marginLeft: '5%', marginRight: '5%' }]}>
              <Text style={[styles.addIcon, { marginTop: '20%', marginHorizontal: 58 }]}>{this.state.waterLevel}</Text>
              <Text style={styles.cupsLabel}>Cups</Text>
            </View>
            <View style={[styles.numberContainer, { paddingRight: 20 }]}>
              <TouchableOpacity onPress={this.addWater}>
                <Text style={[styles.addIcon, { marginLeft: '40%', marginTop: '20%', textAlign: 'center' }]}>+</Text>
                {/* <Image style={{ height: '10%', width: '10%' }} source={require('./Images/plus.svg')} /> */}
              </TouchableOpacity>
              <TouchableOpacity onPress={this.reduceWater}>
                <Text style={[styles.addIcon, { marginLeft: '57%', marginBottom: '25%' }]}>-</Text>
                {/* <Image style={{ height: '10%', width: '10%' }} source={require('./Images/minus.svg')} /> */}
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 2, flexDirection: 'row' }}>
            <View style={{ flex: 1}}>
              <Image style={{ height: '100%', resizeMode: 'contain' }} source={require('./Images/icn-water.png')} />
            </View>
            <View style={{ flex: 0}}>
              <Image style={{ resizeMode: 'contain', alignSelf: 'flex-end', marginVertical: '30%', marginRight: '10%' }} source={require('../Onboarding/Password/img/alert-circle.png')} />
            </View>
            <View style={{ flex: 1}}>
              <Text style={[styles.instructionText,{marginTop:'8%'}]}>Follow the 8x8 rule for better water drinking habits</Text>
            </View>
          </View>
          <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity >
              <Text style={styles.nextBtn}>Next</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styleSheet.button]}
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Text style={styleSheet.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#FFF',
    marginTop: '15%',
    marginBottom: '4%',
    marginLeft: '4%',
    marginRight: '4%',
    borderRadius: 35,
  },
  buttonContainer: {
    height: '2%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '1%',
    marginBottom: '10%',
  },
  title: {
    color: '#424242',
    // fontFamily: 'Nunito',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 30,
    textAlign: 'center',
    marginTop: '5%',
    marginHorizontal: 50
  },
  numberContainer: {
    height: '90%',
    width: '40%',
    borderRadius: 22,
    backgroundColor: '#FDD12B'
  },
  instructionText: {
    height:'80%',
    color: '#424242',
    // fontFamily: 'Nunito',
    fontSize: 17,
    marginVertical: '2%',
    marginLeft:'1%',
  },
  addIcon: {
    height: 34,
    width: 34,
    color: '#FFFFFF',
    fontSize: 34,
    lineHeight: 34,
  },
  cupsLabel: {
    color: '#424242',
    // fontFamily: 'Nunito',
    fontSize: 17,
    lineHeight: 23,
    textAlign: 'center',
    marginTop: '2%'
  },
  nextBtn: {
    color: '#F58015',
    // fontFamily: 'Nunito',
    fontSize: 17,
    lineHeight: 23,
    borderBottomColor: '#F58015',
    borderBottomWidth: 1.5
  }
});

export default Water;
