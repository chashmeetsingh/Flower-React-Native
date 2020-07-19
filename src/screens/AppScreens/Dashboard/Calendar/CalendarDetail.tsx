import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import SymptonItem from './SymptonItem';

interface CalendarDetailStates {
  isModalVisible: boolean;
  bleeding: string;
  pain: string[];
  pill: string;
}

class CalendarDetail extends Component<any, CalendarDetailStates> {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      bleeding: 'light',
      pain: ['cramps'],
      pill: 'taken',
    };
  }

  render() {
    return (
      <ImageBackground
        style={{flex: 1, display: 'flex'}}
        source={require('../../../../../assets/images/yellowbanner.png')}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text
            style={{
              height: 38,
              color: '#424242',
              fontSize: 28,
              fontWeight: 'bold',
              lineHeight: 38,
              textAlign: 'center',
            }}>
            Today - 17 Oct
          </Text>
        </View>

        <View style={{borderRadius: 20, backgroundColor: 'white', flex: 8}}>
          <Text style={styles.heading}>Bleeding</Text>
          <View style={{flexDirection: 'row', height: 'auto'}}>
            <View style={{flex: 0.25}}>
              <SymptonItem
                isSelected={true}
                title={'Light'}
                image={require('../../../../../assets/images/light.png')}
              />
            </View>
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
                title={'Heavy'}
                image={require('../../../../../assets/images/heavy.png')}
              />
            </View>
            <View style={{flex: 0.25}}>
              <SymptonItem
                isSelected={false}
                title={'Spotting'}
                image={require('../../../../../assets/images/spotting.png')}
              />
            </View>
          </View>

          <Text style={styles.heading}>Pain</Text>
          <View style={{flexDirection: 'row', height: 'auto'}}>
            <View style={{flex: 0.33}}>
              <SymptonItem
                isSelected={true}
                title={'Cramps'}
                image={require('../../../../../assets/images/cramps.png')}
              />
            </View>
            <View style={{flex: 0.33}}>
              <SymptonItem
                isSelected={false}
                title={'Headache'}
                image={require('../../../../../assets/images/headache.png')}
              />
            </View>
            <View style={{flex: 0.34}}>
              <SymptonItem
                isSelected={false}
                title={'Tender Breasts'}
                image={require('../../../../../assets/images/tender-breasts.png')}
              />
            </View>
          </View>

          <Text style={styles.heading}>Pill</Text>
          <View style={{flexDirection: 'row', height: 'auto'}}>
            <View style={{flex: 0.25}}>
              <SymptonItem
                isSelected={true}
                title={'Taken'}
                image={require('../../../../../assets/images/taken.png')}
              />
            </View>
            <View style={{flex: 0.25}}>
              <SymptonItem
                isSelected={false}
                title={'Missed'}
                image={require('../../../../../assets/images/missed.png')}
              />
            </View>
            <View style={{flex: 0.25}}>
              <SymptonItem
                isSelected={false}
                title={'Double'}
                image={require('../../../../../assets/images/double.png')}
              />
            </View>
            <View style={{flex: 0.25}}>
              <SymptonItem
                isSelected={false}
                title={'Late'}
                image={require('../../../../../assets/images/late.png')}
              />
            </View>
          </View>

          <View style={{alignItems: 'center', marginVertical: 43}}>
            <Button
              title={'Done'}
              containerStyle={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#F58015',
                width: 174,
                borderRadius: 22,
              }}
              type={'clear'}
              titleStyle={{
                color: 'white',
                fontSize: 17,
                lineHeight: 23,
              }}
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modal: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalButton: {
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F58015',
    fontFamily: 'Nunito',
    fontSize: 17,
    lineHeight: 23,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 33,
    width: 174,
    color: 'white',
  },
  heading: {
    height: 30,
    marginTop: 34,
    color: '#424242',
    // fontFamily: 'Nunito',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  buttonWithImageHeading: {
    color: '#5F5D70',
    fontSize: 17,
    lineHeight: 23,
    textAlign: 'center',
  },
});

export default CalendarDetail;
