import * as React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-fa-icons';

interface DropDownScreenProps {
  confirmationClick: () => void;
  cancelClick: () => void;
  cancelButtonText: string;
}

class DropDownScreen extends React.Component<DropDownScreenProps, any> {
  render() {
    return (
      <View style={styles.DropDownScreen}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
            paddingHorizontal: '6.0%',
            backgroundColor:'red'
          }}>
          <TouchableOpacity onPress={this.props.cancelClick}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="arrow-left" style={{marginRight: 5}} />
              <Text style={{color: '#424242'}}>
                {this.props.cancelButtonText}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.confirmationClick}>
            <Icon
              name="check"
              style={{marginRight: 5, color: '#9BD419', fontSize: 17}}
            />
          </TouchableOpacity>
        </View>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  DropDownScreen: {
    backgroundColor: '#FBFAFF',
    flex: 1,
    fontFamily: 'Nunito',
    color: '#424242',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '4.0%',
  },
});

export default DropDownScreen;
