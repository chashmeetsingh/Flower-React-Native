import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Switch,
    Picker,
    ScrollView,
    TouchableOpacity,
    TextInput, ImageBackground, Image,
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import styleSheet from '../Styles/styles';
import {Preference} from '../../../../models/Preferences';
import {connect} from 'react-redux';
import {resetBirthControlPreferences, setPreferences} from "../../../../redux/preferences/preferencesActions";
import {isEqual, isEmpty, isUndefined,get} from 'lodash';
import {getSelectedTheme} from "../ThemeSwitch/theme";
import PeriodHealth from "./PeriodHealth";
import PregnancyOvulation from "./PregnancyOvulation";
import MentalHealth from "./MentalHealth";


interface PreferencesStates {
    birthControlMethods: string[];
    preferences: Preference;
    birthControlValues: string;
    selectedPreference: string
}

enum PreferencesType {
    PERIOD_HEALTH = 'PERIOD_HEALTH',
    PREGNANCY_OVULATION = 'PREGNANCY_OVULATION',
    MENTAL_HEALTH = 'MENTAL_HEALTH'
}

class Preferences extends React.Component<any, PreferencesStates> {
    constructor(props) {
        super(props);
        this.state = {
            birthControlMethods: [],
            preferences: {
                birthControlReminder: false,
                medicationReminder: false,
                bodyTemperatureInformation: false,
                fertilityReminders: false,
                dateOfLastPeriod: false,
                height: false,
                lengthOfCycle: false,
                lengthOfPeriod: false,
                pmsSymptoms: false,
                weight: false,
                articles: false,
                gynecologicalIssues: false,
                habitTracker: false,
                recipes: false,
                dailyJournalReminder:false,
                mentalHealthReminder:false,
                mentalHealthMedication:''
            },
            birthControlValues: 'Select method(s)',
            selectedPreference: PreferencesType.PERIOD_HEALTH
        };
    }

    componentDidMount(): void {
        this.props.dispatch(resetBirthControlPreferences());
    }

    private onMedicationReminder = (value: boolean) => {
        const preferences = this.state.preferences;
        preferences.medicationReminder = value;
        this.setState({
            preferences,
        });
    };

    private onBirthControlReminder = (value: boolean) => {
        const preferences = this.state.preferences;
        preferences.birthControlReminder = value;
        this.setState({
            preferences,
        });
    };

    private onFertilityReminder = (value: boolean) => {
        const preferences = this.state.preferences;
        preferences.fertilityReminders = value;
        this.setState({
            preferences,
        });
    };

    private onBodyTempInfo = (value: boolean) => {
        const preferences = this.state.preferences;
        preferences.bodyTemperatureInformation = value;
        this.setState({
            preferences,
        });
    };



    private onHabitTracker = (value: boolean) => {
        const preferences = this.state.preferences;
        preferences.habitTracker = value;
        this.setState({
            preferences,
        });
    };

    private onWeight = (value: boolean) => {
        const preferences = this.state.preferences;
        preferences.weight = value;
        this.setState({
            preferences,
        });
    };

    private onPmsSymptoms = (value: boolean) => {
        const preferences = this.state.preferences;
        preferences.pmsSymptoms = value;
        this.setState({
            preferences,
        });
    };

    private onDailyJournalReminder = (value: boolean) => {
        const preferences = this.state.preferences;
        preferences.dailyJournalReminder = value;
        this.setState({
            preferences,
        });
    };

    private onMentalHealthReminder = (value: boolean) => {
        const preferences = this.state.preferences;
        preferences.mentalHealthReminder = value;
        this.setState({
            preferences,
        });
    };

    private onMentalHealthChange = (value: string) => {
        const preferences = this.state.preferences;
        preferences.mentalHealthMedication = value;
        this.setState({
            preferences,
        });
    };

    private onNextClick = () => {
        const {dispatch,authUser} = this.props;
        const {preferences} = this.state
        const data = {
            user_id: get(authUser,'id',null),
            medication_rem: preferences.medicationReminder,
            birth_control_rem: preferences.birthControlReminder,
            birth_control_method: JSON.stringify(this.props.birthControlOptions),
            fertility_reminder: preferences.fertilityReminders,
            body_temp_reminder: preferences.bodyTemperatureInformation,
            gynec_issues: preferences.gynecologicalIssues,
            articles: preferences.articles,
            habit_trcker: preferences.habitTracker,
            pms_symptom: "preferences.pmsSymptoms",
            weight_reminder:preferences.weight
        };

        dispatch(setPreferences(data));
        this.props.navigation.navigate('MenstrualCycle');
    };

    private onSelectPreferenceType = (type: string) => {
        this.setState({
            selectedPreference: type
        })
    };

    render() {
        const theme = getSelectedTheme(this.props.selectedTheme);
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: theme.themeColor}}>
                    <ImageBackground source={require('./img/preferences.png')} style={{width: '100%', height: '100%'}}>
                        <View style={{flex: 1}}>
                            <View style={{alignItems: 'center', marginVertical: '7.39%'}}>
                                <Text style={[styleSheet.titleText, {color: theme.fontColor}]}>My Preferences</Text>
                            </View>
                            <View style={{alignItems: 'center', marginHorizontal: 10}}>
                                <Text style={[styleSheet.subTitleText, {color: theme.fontColor, fontWeight: '400'}]}>Please
                                    choose what you’d
                                    like to see on your app. Remember you can always go back and change your preferences
                                    in your settings.</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                // marginHorizontal: 10,
                                marginVertical: 30
                            }}>
                                <View style={{flexDirection: 'column'}}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.onSelectPreferenceType(PreferencesType.PERIOD_HEALTH)
                                        }}
                                        style={[styles.preferenceTypeImage, {backgroundColor: this.state.selectedPreference === PreferencesType.PERIOD_HEALTH ? theme.tertiaryColor : 'transparent'}]}>
                                        <Image source={require('./img/periodHealth.png')}/>
                                    </TouchableOpacity>
                                    <View style={{marginTop: 10,alignItems:'center'}}>
                                        <Text style={[styles.preferenceTypeText,{color:this.state.selectedPreference === PreferencesType.PERIOD_HEALTH ? theme.tertiaryColor : theme.fontColor}]}>Period</Text>
                                        <Text style={[styles.preferenceTypeText,{color:this.state.selectedPreference === PreferencesType.PERIOD_HEALTH ? theme.tertiaryColor : theme.fontColor}]}>Health</Text>
                                    </View>
                                </View>

                                <View style={{flexDirection: 'column'}}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.onSelectPreferenceType(PreferencesType.PREGNANCY_OVULATION)
                                        }}
                                        style={[styles.preferenceTypeImage, {backgroundColor: this.state.selectedPreference === PreferencesType.PREGNANCY_OVULATION ? theme.tertiaryColor : 'transparent'}]}>
                                        <Image source={require('./img/pregnancy.png')}/>
                                    </TouchableOpacity>
                                    <View style={{marginTop: 10,alignItems:'center'}}>
                                        <Text style={[styles.preferenceTypeText,{color:this.state.selectedPreference === PreferencesType.PREGNANCY_OVULATION ? theme.tertiaryColor : theme.fontColor}]}>Pregnancy</Text>
                                        <Text style={[styles.preferenceTypeText,{color:this.state.selectedPreference === PreferencesType.PREGNANCY_OVULATION ? theme.tertiaryColor : theme.fontColor}]}>& Ovulation</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'column'}}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.onSelectPreferenceType(PreferencesType.MENTAL_HEALTH)
                                        }}
                                        style={[styles.preferenceTypeImage, {backgroundColor: this.state.selectedPreference === PreferencesType.MENTAL_HEALTH ? theme.tertiaryColor : 'transparent'}]}>
                                        <Image source={require('./img/mentalHealth.png')}/>
                                    </TouchableOpacity>
                                    <View style={{marginTop: 10,alignItems:'center'}}>
                                        <Text style={[styles.preferenceTypeText,{color:this.state.selectedPreference === PreferencesType.MENTAL_HEALTH ? theme.tertiaryColor : theme.fontColor}]}>Mental</Text>
                                        <Text style={[styles.preferenceTypeText,{color:this.state.selectedPreference === PreferencesType.MENTAL_HEALTH ? theme.tertiaryColor : theme.fontColor}]}>Health</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.preferences}>
                            <View style={{marginHorizontal: 20}}>
                                {
                                    this.state.selectedPreference === PreferencesType.PERIOD_HEALTH &&
                                    <PeriodHealth
                                        navigate={this.props.navigation.navigate}
                                        birthControlReminder={this.state.preferences.birthControlReminder}
                                        onBirthControlReminder={this.onBirthControlReminder}
                                        onPMSReminder={this.onPmsSymptoms}
                                        pmsSymptomsReminder={this.state.preferences.pmsSymptoms}
                                        onWeightReminder={this.onWeight}
                                        weightReminder={this.state.preferences.weight}
                                        onNavigateBirthControlMethods={() => {
                                            this.props.navigation.navigate('BirthControlOptions');
                                        }}
                                    />
                                }

                                {
                                    this.state.selectedPreference === PreferencesType.PREGNANCY_OVULATION &&
                                    <PregnancyOvulation
                                        onBodyTempReminder={this.onBodyTempInfo}
                                        bodyTempReminder={this.state.preferences.bodyTemperatureInformation}
                                        onFertilityReminder={this.onFertilityReminder}
                                        fertilityReminder={this.state.preferences.fertilityReminders}
                                    />
                                }

                                {
                                    this.state.selectedPreference === PreferencesType.MENTAL_HEALTH &&
                                    <MentalHealth
                                        dailyJournalReminder={this.state.preferences.dailyJournalReminder}
                                        onJournalReminder={this.onDailyJournalReminder}
                                        habitTracking={this.state.preferences.habitTracker}
                                        onHabitTracking={this.onHabitTracker}
                                        medicationReminder={this.state.preferences.medicationReminder}
                                        onMedicationReminder={this.onMedicationReminder}
                                        mentalHealthMedications={this.state.preferences.mentalHealthReminder}
                                        onMentalHealthMedications={this.onMentalHealthReminder}
                                        mentalHealthMedication={this.state.preferences.mentalHealthMedication}
                                        onMentalHealthChange={this.onMentalHealthChange}
                                    />
                                }
                            </View>
                        </View>
                        <View style={styles.bottom}>
                            <TouchableOpacity style={{justifyContent: 'flex-end', width: '100%'}} onPress={this.onNextClick}>
                                <Text style={{fontSize: 17, color: '#424242'}}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    preferences: {
        backgroundColor: '#FFF',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        flex: 1.5,
    },
    preferenceTypeText: {
        color: '#424242',
        fontSize: 17,
        fontWeight: '500'
    },
    preferenceTypeImage: {
        flex: 1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    bottom: {
        flex: 1,
        marginBottom: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        marginLeft: '90%', // Remove this and do correctly
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = state => ({
    birthControlOptions: state.preferences.birthControlOptions,
    selectedTheme: state.theme.selectedTheme,
    authUser: state.auth.user
});

export default connect(mapStateToProps)(Preferences);
