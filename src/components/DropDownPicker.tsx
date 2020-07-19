import React from "react";
import { Dropdown } from 'react-native-material-dropdown';
import {View,StyleSheet} from 'react-native';

interface DropDownData{
    value:string,
    label:string
}

interface DropDownPickerProps {
    data:DropDownData[],
    onValueChange:(selectedValue: string)=>void;
}

interface DropDownPickerStates {
    label: string
}

class DropDownPicker extends React.Component<DropDownPickerProps,DropDownPickerStates>{

    constructor(props){
        super(props);
        this.state = {
            label:this.props.data[0].value
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Dropdown
                    value={this.state.label}
                    data={this.props.data}
                    pickerStyle={{borderBottomColor:'transparent',borderWidth: 0}}
                    dropdownOffset={{ 'top': 0}}
                    containerStyle = {styles.dropdown}
                    onChangeText={(value)=> {this.setState({
                        label:value
                    });}}
                    itemColor={'#5F5D70'}
                    selectedItemColor={'#5F5D70'}
                    itemTextStyle={{color:'#5F5D70'}}
                    textColor={'#5F5D70'}

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'pink',
        marginVertical:8

    },
    dropdown: {
        width: '100%',
    }
});

export default DropDownPicker;