import * as React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-fa-icons';
import {connect} from 'react-redux';

class PeriodFrequency extends React.Component<any, any> {

    private birthControlOptions = [
        'Condoms',
        'Pill',
        'Patch',
        'Vaginal Ring',
        'Shot',
        'IUD',
        'Implant',
        'Withdrawal',
        'Fertility Awareness',
    ];

    private onOptionSelect = option => {
        let selectedOptions = this.state.selectedOptions;
        const index = selectedOptions.indexOf(option);
        if (index < 0) {
            selectedOptions.push(option);
        } else {
            selectedOptions.splice(index, 1);
        }
        this.setState({
            selectedOptions,
        });
    };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.PeriodFrequencyOptions}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
            paddingHorizontal: '6.0%',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigate('MenstrualCycle');
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="arrow-left" style={{marginRight: 5}} />
              <Text style={{color: '#424242'}}>Go Back</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate('MenstrualCycle');
            }}>
            <Icon
              name="check"
              style={{marginRight: 5, color: '#9BD419', fontSize: 17}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginTop: 10, paddingHorizontal: '6.0%'}}>
          <Text style={{color: '#424242', fontSize: 20, fontWeight: 'bold'}}>
            Period Frequency
          </Text>
        </View>
        <View
          style={{
            flex: 20,
            backgroundColor: '#FFFFFF',
            paddingVertical: '13%',
            paddingHorizontal: '6.0%',
          }}>
          <TouchableOpacity style={{marginVertical: 10,flexDirection:'row'}}>
            <Icon
              name="check"
              style={{marginRight: 5, color: '#9BD419', fontSize: 17}}
            />
            <Text style={{color: 'rgba(52,52,52,0.4)', fontSize: 17}}>
              Every 28 Days
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginVertical: 10}}>
            <Text style={{color: 'rgba(52,52,52,0.4)', fontSize: 17}}>
              Every 30 Days
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  PeriodFrequencyOptions: {
    backgroundColor: '#FBFAFF',
    flex: 1,
    fontFamily: 'Nunito',
    color: '#424242',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '4.0%',
  },
});

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(PeriodFrequency);
