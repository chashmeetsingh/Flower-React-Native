import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-fa-icons';
import {includes, concat} from 'lodash';
import {connect} from 'react-redux';
import {
    resetBirthControlPreferences,
    setBirthControlPreferences
} from "../../../../redux/preferences/preferencesActions";


interface BirthControlOptionsState {
  selectedOptions: string[];
}

class BirthControlOptions extends React.Component<
  any,
  BirthControlOptionsState
> {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: this.props.birthControlOptions
    };
  }

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

  private onSelect = () => {
      const {dispatch} = this.props;
      dispatch(resetBirthControlPreferences());
      dispatch(setBirthControlPreferences(this.state.selectedOptions));
      this.props.navigation.navigate('MyPreferences');
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.BirthControlOptions}>
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
              navigate('MyPreferences');
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="arrow-left" style={{marginRight: 5}} />
              <Text style={{color: '#424242'}}>Go Back</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onSelect}>
            <Icon
              name="check"
              style={{marginRight: 5, color: '#9BD419', fontSize: 17}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginTop: 10, paddingHorizontal: '6.0%'}}>
          <Text style={{color: '#424242', fontSize: 20, fontWeight: 'bold'}}>
            Method of Birth Control
          </Text>
        </View>
        <View
          style={{
            flex: 20,
            backgroundColor: '#FFFFFF',
            paddingVertical: '13%',
            paddingHorizontal: '6.0%',
          }}>
          {this.birthControlOptions.map((option: string) => {
            return (
              <TouchableOpacity
                style={{marginVertical: 10}}
                onPress={() => {
                  this.onOptionSelect(option);
                }}>
                {includes(this.state.selectedOptions, option) ? (
                  <View style={{flexDirection: 'row'}}>
                    <Icon
                      name="check"
                      style={{marginRight: 5, color: '#9BD419', fontSize: 17}}
                    />
                    <Text style={{color: '#9BD419', fontSize: 17}}>
                      {option}
                    </Text>
                  </View>
                ) : (
                  <Text style={{color: 'rgba(52,52,52,0.4)', fontSize: 17}}>
                    {option}
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  BirthControlOptions: {
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
    birthControlOptions: state.preferences.birthControlOptions,
});

export default connect(mapStateToProps)(BirthControlOptions);
