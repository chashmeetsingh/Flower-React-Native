import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Picker, ScrollView
} from 'react-native';
import styleSheet from '../Styles/styles';
import CheckBox from 'react-native-check-box';
// import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import DatePicker from '../../../../components/DatePicker';
import {connect} from 'react-redux';
import {savePreferences, setPreferences} from "../../../../redux/preferences/preferencesActions";
import DropDownPicker from "../../../../components/DropDownPicker";
import {convertToHeightMetricUnits, convertToWeightMetricUnits, Metrics} from "../../../../util/unitConvertor";
import {getSelectedTheme} from "../ThemeSwitch/theme";

interface MenstrualCycleStates {
    dontRememberPeriodFrequency: boolean;
    dontRememberLastPeriodDate: boolean;
    dontRememberHowLongPeriod: boolean;
    lastPeriodDate: string;
    periodLength: string,
    cycleLength: string,
    weight: string,
    height: string,
    weightUnit: string,
    heightUnit: string,
    activityLevel: string
}

enum Activity_Level {
    SEDENTARY = 'Sedentary',
    LIGHT = 'Light',
    MODERATE = 'Moderate',
    ACTIVE = 'Active',
    VERY_ACTIVE = 'Very Active',
    EXTRA_ACTIVE = 'Extra Active'
}

class MenstrualCycle extends React.Component<any, MenstrualCycleStates> {
    constructor(props) {
        super(props);
        this.state = {
            dontRememberPeriodFrequency: false,
            dontRememberLastPeriodDate: false,
            dontRememberHowLongPeriod: false,
            lastPeriodDate: moment().format('MMMM Do'),
            periodLength: '',
            cycleLength: '',
            height: '',
            weight: '',
            heightUnit: 'cm',
            weightUnit: 'kg',
            activityLevel:''
        };
    }

    private savePreferences = () => {
        const {preferenceData, dispatch} = this.props;
        preferenceData.last_period_date = this.state.lastPeriodDate,
        preferenceData.period_length = parseInt(this.state.periodLength);
        preferenceData.cycle_length = parseInt(this.state.cycleLength);
        preferenceData.weight = this.state.weightUnit === Metrics.KG ? parseInt(this.state.weight) : convertToWeightMetricUnits(parseInt(this.state.weight));
        preferenceData.height = this.state.heightUnit === Metrics.METERS ? parseInt(this.state.height) : convertToHeightMetricUnits(parseInt(this.state.height));
        dispatch(savePreferences({user_preference:preferenceData}));
        // this.props.navigation.navigate('Home');
    };

    render() {
        const {navigate} = this.props.navigation;
        const theme = getSelectedTheme(this.props.selectedTheme);

        const activityLevels = [
            {
                label:`Sedentary: Little or no exercise`,
                value:Activity_Level.SEDENTARY
            },
            {
                label:`Light: Exercise 1-3 times/week`,
                value:Activity_Level.LIGHT
            },
            {
                label:`Moderate: Exercise 4-5 times/week`,
                value:Activity_Level.MODERATE
            },
            {
                label:`Active: Daily exercise`,
                value:Activity_Level.ACTIVE
            },
            {
                label:`Very Active: Exercise 6-7 times/week`,
                value:Activity_Level.VERY_ACTIVE
            },
            {
                label:`Extra Active: Very intense daily exercise`,
                value:Activity_Level.EXTRA_ACTIVE
            }
        ];

        return (
            <View style={styles.menstrualCycle}>
                <ScrollView>
                    <View style={{flex: 1.5}}>
                        <View
                            style={[
                                styleSheet.titleContainer,
                                {alignItems: 'center', justifyContent: 'center'},
                            ]}>
                            <Text style={styleSheet.titleText}>My Menstrual Cycle</Text>
                        </View>
                        <View style={[styleSheet.textContainer]}>
                            <Text style={styleSheet.text}>
                                We require some additional information so we can help you estimate
                                when your next period is coming.
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            paddingHorizontal: 20,
                        }}>
                        <Text style={styleSheet.subTitleText}>
                            How often do you get your period?
                        </Text>
                        <TextInput
                            style={[styleSheet.textInput]}
                            placeholder="days"
                            value={this.state.cycleLength}
                            onChangeText={(text: string) => {
                                this.setState({cycleLength: text});
                            }}
                            keyboardType={'numeric'}/>
                        <View style={styleSheet.checkboxWrapper}>
                            <CheckBox
                                style={styleSheet.checkbox}
                                onClick={() => {
                                    this.setState({
                                        dontRememberPeriodFrequency: !this.state
                                            .dontRememberPeriodFrequency,
                                    });
                                }}
                                isChecked={this.state.dontRememberPeriodFrequency}
                                rightText={"I don't remember"}
                                rightTextStyle={{color: '#5F5D70'}}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            paddingHorizontal: 20,
                            width: '100%'
                        }}>
                        <Text style={styleSheet.subTitleText}>
                            When was your last period?
                        </Text>

                        <DatePicker
                            date={this.state.lastPeriodDate}
                            placeholder={'Select a date'}
                            format="MMMM Do"
                            onDateChange={date => {
                                this.setState({lastPeriodDate: date});
                            }}

                        />
                        <View style={styleSheet.checkboxWrapper}>
                            <CheckBox
                                style={styleSheet.checkbox}
                                onClick={() => {
                                    this.setState({
                                        dontRememberLastPeriodDate: !this.state
                                            .dontRememberLastPeriodDate,
                                    });
                                }}
                                isChecked={this.state.dontRememberLastPeriodDate}
                                rightText={"I don't remember"}
                                rightTextStyle={{color: '#5F5D70'}}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            paddingHorizontal: 20,
                        }}>
                        <Text style={styleSheet.subTitleText}>
                            How long did your period last?
                        </Text>
                        <TextInput
                            style={[styleSheet.textInput]}
                            placeholder="days"
                            value={this.state.periodLength}
                            onChangeText={(text: string) => {
                                this.setState({periodLength: text});
                            }}
                            keyboardType={'numeric'}/>
                        <View style={styleSheet.checkboxWrapper}>
                            <CheckBox
                                style={styleSheet.checkbox}
                                onClick={() => {
                                    this.setState({
                                        dontRememberHowLongPeriod: !this.state
                                            .dontRememberHowLongPeriod,
                                    });
                                }}
                                isChecked={this.state.dontRememberHowLongPeriod}
                                rightText={"I don't remember"}
                                rightTextStyle={{color: '#5F5D70'}}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            paddingHorizontal: 20,
                        }}>
                        <Text style={styleSheet.subTitleText}>
                            Height and Weight
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput
                                style={[styleSheet.textInput, {flex: 1,marginRight:5}]}
                                placeholder="Weight"
                                value={this.state.weight}
                                onChangeText={(text: string) => {
                                    this.setState({weight: text});
                                }}
                                keyboardType={'numeric'}/>
                            <DropDownPicker
                                data={[{value: Metrics.KG, label: Metrics.KG}, {
                                    value: Metrics.POUNDS,
                                    label: Metrics.POUNDS
                                }]}
                                onValueChange={(value) => {
                                    this.setState({weightUnit: value}
                                    )
                                }}
                            />
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput
                                style={[styleSheet.textInput, {flex: 1,marginRight:5}]}
                                placeholder="Height"
                                value={this.state.height}
                                onChangeText={(text: string) => {
                                    this.setState({height: text});
                                }}
                                keyboardType={'numeric'}/>
                            <DropDownPicker
                                data={[{value: Metrics.CM, label: Metrics.CM}, {
                                    value: Metrics.METERS,
                                    label: Metrics.METERS
                                }]}
                                onValueChange={(value) => {
                                    this.setState({heightUnit: value}
                                    )
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            paddingHorizontal: 20,
                        }}>
                        <Text style={styleSheet.subTitleText}>
                            Activity Level
                        </Text>
                        <DropDownPicker
                            data={activityLevels}
                            onValueChange={(value) => {
                                this.setState({activityLevel: value}
                                )
                            }}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, {backgroundColor: theme.buttonBackRoundColor}]}
                            onPress={this.savePreferences}>
                            <Text style={[styles.buttonText,{color:theme.fontColor}]}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menstrualCycle: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        fontFamily: 'Nunito',
        color: '#424242',
        display: 'flex',
        marginTop: '4.0%',
        flexWrap: 'wrap',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        // marginBottom:10
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        width: '46.14%',
        backgroundColor: '#FDD12B',
        borderRadius: 22,
    },
    buttonText: {
        fontSize: 17,
        color: '#5F5D70',
    },
});

const mapStateToProps = state => ({
    preferenceData: state.preferences.preferences,
    selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps)(MenstrualCycle);
