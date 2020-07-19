import React from "react";
import {View, Text, TouchableOpacity, TextInput, Switch} from 'react-native';
import styleSheet from "../Styles/styles";
import {isEmpty,isUndefined} from 'lodash';
import {connect} from 'react-redux';



interface PeriodHealthStates {
    birthControlReminder: boolean,
    weightReminder: boolean,
    pmsSymptomsReminder:boolean
}

interface PeriodHealthProps {
    birthControlReminder: boolean,
    weightReminder: boolean,
    pmsSymptomsReminder:boolean,
    birthControlValues: string,
    navigate:any,
    onBirthControlReminder:(value: boolean) => void,
    onWeightReminder:(value: boolean) => void,
    onPMSReminder:(value: boolean) => void,


}

class PeriodHealth extends React.Component<any,PeriodHealthStates>{

    constructor(props){
        super(props);
        this.state = {
            birthControlReminder:false,
            weightReminder:false,
            pmsSymptomsReminder:false
        }
    }

    private getBirthControlOptions = () => {
        const birthControlOptions = this.props.birthControlOptions;
        let birthControlValues = 'Select method(s)';
        if (isEmpty(birthControlOptions) || isUndefined(birthControlOptions)){
            return birthControlValues;
        }
        if (birthControlOptions.length === 1) {
            birthControlValues = `${birthControlOptions[0]}`
        } else {
            birthControlValues = `${birthControlOptions[0]} and ${birthControlOptions.length - 1} more`
        }
        return birthControlValues;
    };

    render() {
        const {navigate} = this.props;
        return (
            <View style={{marginVertical:10}}>
                <Text style={[styleSheet.titleText,{alignSelf:'center',color: '#424242'}]}>Birth Control & Flow Health</Text>
                <Text style={{fontSize: 17, color: '#424242', marginTop: '3%'}}>
                    What is your preferred method of birth control? Feel free to chose
                    more than one.
                </Text>
                <Text style={{fontSize: 17, color: '#424242', marginTop: '3%'}}>
                    Choose your method(s) of birth control
                </Text>
                <View style={[styleSheet.textContainer, {marginHorizontal: '0%'}]}>
                    <TouchableOpacity
                    onPress={this.props.onNavigateBirthControlMethods}>
                        <TextInput
                            style={[styleSheet.textInput]}
                            value={this.getBirthControlOptions()}
                            onFocus={this.props.onNavigateBirthControlMethods}
                            showSoftInputOnFocus={false}
                            // editable={false}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: '3%',
                        }}>
                        <Switch
                            onValueChange={this.props.onBirthControlReminder}
                            value={this.props.birthControlReminder}
                        />
                        <Text
                            style={{
                                fontSize: 17,
                                color: '#424242',
                                marginLeft: 5,
                            }}>
                            Would you like a reminder for your{'\n'} birth control{' '}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: '3%',
                        }}>
                        <Switch
                            onValueChange={this.props.onWeightReminder}
                            value={this.props.weightReminder}
                        />
                        <Text
                            style={{
                                fontSize: 17,
                                color: '#424242',
                                marginLeft: 5,
                            }}>
                            Weight{' '}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: '3%',
                        }}>
                        <Switch
                            onValueChange={this.props.onPMSReminder}
                            value={this.props.pmsSymptomsReminder}
                        />
                        <Text
                            style={{
                                fontSize: 17,
                                color: '#424242',
                                marginLeft: 5,
                            }}>
                            PMS Symptoms{' '}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    birthControlOptions: state.preferences.birthControlOptions,
});

export default connect(mapStateToProps)(PeriodHealth);