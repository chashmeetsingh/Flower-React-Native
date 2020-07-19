import React from "react";
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Switch} from 'react-native';
import CheckBox from 'react-native-check-box';
import styleSheet from "../Styles/styles";


interface MentalHealthStates {
    mentalHealthMedications: boolean,
    medicationReminder: boolean,
    habitTracking:boolean,
    dailyJournalReminder: boolean
}

interface MentalHealthProps {
    mentalHealthMedications: boolean,
    onMentalHealthMedications: (value: boolean) => void,
    medicationReminder: boolean,
    onMedicationReminder: (value: boolean) => void,
    habitTracking:boolean,
    onHabitTracking: (value: boolean) => void,
    dailyJournalReminder: boolean
    onJournalReminder: (value: boolean) => void,
    mentalHealthMedication:string,
    onMentalHealthChange:(medicine: string)=>void
}

class MentalHealth extends React.Component<MentalHealthProps,{}> {

    constructor(props){
        super(props);
        this.state = {
            mentalHealthMedications:false,
            medicationReminder:false,
            habitTracking:false,
            dailyJournalReminder:false
        }
    }

    render() {
        return (
            <View style={{marginVertical: 10}}>
                <Text style={[styleSheet.titleText, {alignSelf: 'center', color: '#424242'}]}>Mental Health</Text>
                <Text style={{fontSize: 17, color: '#424242', marginTop: '3%'}}>
                    Do you take any medication for your mental health?
                </Text>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:10}}>
                    <CheckBox
                        style={styles.checkbox}
                        onClick={()=>{this.props.onMentalHealthMedications((true))}}
                        isChecked={this.props.mentalHealthMedications}
                        rightText={'Yes'}
                        rightTextStyle={{color: '#5F5D70',fontSize: 17}}
                    />
                    <CheckBox
                        style={styles.checkbox}
                        onClick={()=>{this.props.onMentalHealthMedications((false))}}
                        isChecked={!this.props.mentalHealthMedications}
                        rightText={'No'}
                        rightTextStyle={{color: '#5F5D70',fontSize: 17}}
                    />
                </View>
                <TextInput
                    style={[styleSheet.textInput]}
                    value={this.props.mentalHealthMedication}
                    onChangeText={this.props.onMentalHealthChange}
                    placeholder={'What is the name of your medication?'}
                    // showSoftInputOnFocus={false}
                    // editable={false}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: '3%',
                    }}>
                    <Switch
                        onValueChange={this.props.onMedicationReminder}
                        value={this.props.medicationReminder}
                    />
                    <Text
                        style={{
                            fontSize: 17,
                            color: '#424242',
                            marginLeft: 5,
                        }}>
                        Medication Reminder{' '}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: '3%',
                    }}>
                    <Switch
                        onValueChange={this.props.onHabitTracking}
                        value={this.props.habitTracking}
                    />
                    <Text
                        style={{
                            fontSize: 17,
                            color: '#424242',
                            marginLeft: 5,
                        }}>
                        Habit Tracking{' '}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: '3%',
                    }}>
                    <Switch
                        onValueChange={this.props.onJournalReminder}
                        value={this.props.dailyJournalReminder}
                    />
                    <Text
                        style={{
                            fontSize: 17,
                            color: '#424242',
                            marginLeft: 5,
                        }}>
                        Daily journaling reminder{' '}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    checkbox: {
        backgroundColor: '#FFFFFF',
        width: '50%',
    },
})

export default MentalHealth;