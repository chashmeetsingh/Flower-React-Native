import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';

class WelcomePage extends React.Component<any, any> {
  componentDidMount() {
    const {navigate} = this.props.navigation;
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then((url) => {
        // @ts-ignore
        if(url === 'flower://welcome'){
          navigate('Welcome')
        }
      });
    } else {
      Linking.addEventListener('url', (event)=>{
        const {url} = event;
        if(url === 'flower://welcome'){
          navigate('Welcome')
        }
      });
    }
  }

  componentWillUnmount() {
    Linking.removeEventListener('url',()=>{});
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.app}>
        <View style={styles.imageLogo}>
          <Image source={require('./img/img-logo.png')} />
        </View>
        <View style={styles.content}>
          <Text style={styles.message}>Hi there</Text>
          <Text style={styles.message}>welcome to Flower!</Text>
        </View>
        <View style={[styles.content, {paddingTop: '2%'}]}>
          <Text style={styles.tagLine}>Empowering Women's Health</Text>
          <Text style={styles.tagLine}>with Flower</Text>
        </View>
        <View style={styles.startJourney}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigate('About');
            }}>
            <Text style={{fontSize: 17, color: '#5F5D70'}}>
              Start my Flower journey
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.link}
            onPress={() => {
              navigate('SignIn');
            }}>
            <Text>I already have an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingTop: '18.00%',
    fontFamily: 'Nunito',
  },
  imageLogo: {
    alignItems: 'center',
  },

  content: {
    alignItems: 'center',
    paddingTop: '8.0%',
  },
  message: {
    color: '#FDD12B',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 38,
  },
  tagLine: {
    color: '#5F5D70',
    fontSize: 22,
    lineHeight: 30,
  },
  startJourney: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '15.00%',
    width: '80.27%',
    backgroundColor: '#FDD12B',
    borderRadius: 22,
  },
  link: {
    margin: 20,
  },
});

export default WelcomePage;
