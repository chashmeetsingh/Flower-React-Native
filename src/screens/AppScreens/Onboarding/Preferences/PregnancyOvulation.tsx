import React from "react";
import {View, Text, TouchableOpacity, TextInput, Switch} from 'react-native';
import styleSheet from "../Styles/styles";

interface PeriodHealthProps {
    fertilityReminder:boolean,
    onFertilityReminder:(value:boolean)=>void,
    bodyTempReminder:boolean
    onBodyTempReminder:(value:boolean)=>void,
}

class PregnancyOvulation extends React.Component<PeriodHealthProps,{}> {


    constructor(props){
        super(props);
        this.state = {
            fertilityReminder:false,
            bodyTempReminder:false
        }
    }
    render() {
        return (
            <View style={{marginVertical: 10}}>
                <Text style={[styleSheet.titleText, {alignSelf: 'center', color: '#424242'}]}>Pregnancy tracking & Ovulation</Text>
                <Text style={{fontSize: 17, color: '#424242', marginTop: '3%'}}>
                    What would you like to see on the pregnancy and ovulation part of your app?
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: '3%',
                    }}>
                    <Switch
                        onValueChange={this.props.onFertilityReminder}
                        value={this.props.fertilityReminder}
                    />
                    <Text
                        style={{
                            fontSize: 17,
                            color: '#424242',
                            marginLeft: 5,
                        }}>
                        Fertility Reminder{' '}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: '3%',
                    }}>
                    <Switch
                        onValueChange={this.props.onBodyTempReminder}
                        value={this.props.bodyTempReminder}
                    />
                    <Text
                        style={{
                            fontSize: 17,
                            color: '#424242',
                            marginLeft: 5,
                        }}>
                        Basal body temperature information{' '}
                    </Text>
                </View>
            </View>
        );
    }
}

export default PregnancyOvulation;