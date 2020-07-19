import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import moment from 'moment';
import DatePicker from '../../../../components/DatePicker';
import {connect} from 'react-redux';
import {themeColors, themes, themeStyles} from './theme';
import {changeTheme} from '../../../../redux/theme/themeActions';
import Icon from 'react-native-fa-icons';
import {setSignUpData, signUp} from "../../../../redux/auth/authActions";
import LinearGradient from 'react-native-linear-gradient';
import {isNull, isEqual} from 'lodash';

interface ThemeSwitcherStates {
    birthDay: string;
    selectedTheme: string;
}

class ThemeSwitch extends React.Component<any, ThemeSwitcherStates> {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            birthDay: moment().format('MMMM Do YYYY'),
            selectedTheme: this.props.selectedTheme,
        };
    }

    componentWillReceiveProps(nextProps) {
        if(!isNull(nextProps.signUpSuccess) && !isEqual(nextProps.signUpSuccess,this.props.signUpSuccess)){
            this.props.navigation.navigate('EmailConfirmation');
        }
    }

    private onThemeChange = (themeColor: string) => {
        const {dispatch} = this.props;
        this.setState({
            selectedTheme: themeColor,
        });
        dispatch(changeTheme(themeColor));
    };

    private getThemeIconDimensions = (themeColor: string) => {
        if (themeColor === this.state.selectedTheme) {
            return {
                height: 60,
                width: 60,
                borderRadius: 120,
            };
        } else {
            return {
                height: 40,
                width: 40,
                borderRadius: 80,
            };
        }
    };

    private onNextClick = () => {
        const {signUpData, dispatch} = this.props;
        signUpData.birth_date = this.state.birthDay;
        signUpData.color = this.state.selectedTheme;
        dispatch(signUp({user:signUpData}));
        // this.props.navigation.navigate('EmailConfirmation');
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.theming}>
                <View style={{flex: 2}}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '10.35%',
                        }}>
                        <Text style={{fontSize: 22, fontWeight: 'bold', color: '#424242'}}>
                            Oh! we almost forgot!
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 0.5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '10.35%',
                        }}>
                        <Text style={{fontSize: 17, color: '#424242'}}>
                            We just need a few more information
                        </Text>
                        <Text style={{fontSize: 17, color: '#424242'}}>
                            to get you started
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '20.11%',
                        }}>
                        <View style={{flex: 0.5}}>
                            <Text
                                style={{fontSize: 15, color: '#424242', fontWeight: 'bold'}}>
                                when is your birthday?
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <DatePicker
                                date={this.state.birthDay}
                                placeholder={'Select a date'}
                                format="MMMM Do YYYY"
                                onDateChange={date => {
                                    this.setState({birthDay: date});
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{flex: 3, marginTop: '8.06%'}}>
                    <View
                        style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 15, color: '#424242', fontWeight: 'bold'}}>
                            What’s your favorite color?
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 0.3,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.onThemeChange(themeColors.RED);
                            }}>
                            <LinearGradient colors={['#DE5959', '#E02020', '#FB5151']}
                                            style={{
                                                // padding: 5,
                                                // backgroundColor: themes.RED,
                                                height: this.getThemeIconDimensions(themeColors.RED).height,
                                                width: this.getThemeIconDimensions(themeColors.RED).width,
                                                borderRadius: this.getThemeIconDimensions(themeColors.RED)
                                                    .borderRadius,
                                            }}>
                                {this.state.selectedTheme === themeColors.RED && (
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            paddingVertical: 20,
                                        }}>
                                        <Icon name="check" style={{color: 'white', fontSize: 23}}/>
                                    </View>
                                )}
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flex: 0.3,
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            marginHorizontal: '15.00%',
                            flexDirection: 'row',
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.onThemeChange(themeColors.GREEN);
                            }}>
                            <LinearGradient colors={['#9BD419', '#D1F188']}
                                style={{
                                    // padding: 5,
                                    height: this.getThemeIconDimensions(themeColors.GREEN).height,
                                    width: this.getThemeIconDimensions(themeColors.GREEN).width,
                                    borderRadius: this.getThemeIconDimensions(themeColors.GREEN)
                                        .borderRadius,
                                    backgroundColor: themes.GREEN,
                                }}>
                                {this.state.selectedTheme === themeColors.GREEN && (
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            paddingVertical: 20,
                                        }}>
                                        <Icon name="check" style={{color: 'white', fontSize: 23}}/>
                                    </View>
                                )}
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.onThemeChange(themeColors.BLUE);
                            }}>
                            <LinearGradient colors={['#2B69EE', '#789EEF']}
                                style={{
                                    // padding: 5,
                                    height: this.getThemeIconDimensions(themeColors.BLUE).height,
                                    width: this.getThemeIconDimensions(themeColors.BLUE).width,
                                    borderRadius: this.getThemeIconDimensions(themeColors.BLUE)
                                        .borderRadius,
                                    backgroundColor: themes.BLUE,
                                }}>
                                {this.state.selectedTheme === themeColors.BLUE && (
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            paddingVertical: 20,
                                        }}>
                                        <Icon name="check" style={{color: 'white', fontSize: 23}}/>
                                    </View>
                                )}
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flex: 0.3,
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            marginHorizontal: '15.00%',
                            flexDirection: 'row',
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.onThemeChange(themeColors.ORANGE);
                            }}>
                            <LinearGradient colors={['#FDD12B', '#FED693']}
                                style={{
                                    // padding: 5,
                                    height: this.getThemeIconDimensions(themeColors.ORANGE).height,
                                    width: this.getThemeIconDimensions(themeColors.ORANGE).width,
                                    borderRadius: this.getThemeIconDimensions(themeColors.ORANGE)
                                        .borderRadius,
                                    backgroundColor: themes.ORANGE,
                                }}>
                                {this.state.selectedTheme === themeColors.ORANGE && (
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            paddingVertical: 20,
                                        }}>
                                        <Icon name="check" style={{color: 'white', fontSize: 23}}/>
                                    </View>
                                )}
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.onThemeChange(themeColors.PURPLE);
                            }}>
                            <LinearGradient colors={['#9161E1', '#9161E1']}
                                style={{
                                    // padding: 5,
                                    height: this.getThemeIconDimensions(themeColors.PURPLE).height,
                                    width: this.getThemeIconDimensions(themeColors.PURPLE).width,
                                    borderRadius: this.getThemeIconDimensions(themeColors.PURPLE)
                                        .borderRadius,
                                    backgroundColor: themes.PURPLE,
                                }}>
                                {this.state.selectedTheme === themeColors.PURPLE && (
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            paddingVertical: 20,
                                        }}>
                                        <Icon name="check" style={{color: 'white', fontSize: 23}}/>
                                    </View>
                                )}
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flex: 0.3,
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.onThemeChange(themeColors.YELLOW);
                            }}>
                            <LinearGradient colors={['#F58015', '#FFA049']}
                                style={{
                                    // padding: 5,
                                    height: this.getThemeIconDimensions(themeColors.YELLOW).height,
                                    width: this.getThemeIconDimensions(themeColors.YELLOW).width,
                                    borderRadius: this.getThemeIconDimensions(themeColors.YELLOW)
                                        .borderRadius,
                                    backgroundColor: themes.YELLOW,
                                }}>
                                {this.state.selectedTheme === themeColors.YELLOW && (
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            paddingVertical: 20,
                                        }}>
                                        <Icon name="check" style={{color: 'white', fontSize: 23}}/>
                                    </View>
                                )}
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        flex: 0.5,
                        flexDirection: 'row',
                        backgroundColor: '',
                        alignContent: 'center',
                    }}>
                    {/* slider icons */}
                    <View
                        style={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            backgroundColor: '',
                            marginLeft: '4.5%',
                            flexDirection: 'row',
                            paddingVertical: '1%',
                        }}>
                        <Image
                            style={{marginHorizontal: '2.5%', alignSelf: 'center'}}
                            source={require('../img/slider-inactive.png')}
                        />
                        <Image
                            style={{marginHorizontal: '2.5%', alignSelf: 'center'}}
                            source={require('../img/slider-active.png')}
                        />
                        <Image
                            style={{marginHorizontal: '2.5%', alignSelf: 'center'}}
                            source={require('../img/slider-inactive.png')}
                        />
                    </View>

                    {/* next button */}
                    <View style={{flex: 1, marginRight: '4.5%'}}>
                        <TouchableOpacity
                            style={{alignSelf: 'flex-end'}}
                            onPress={this.onNextClick}>
                            <Text
                                style={{
                                    fontSize: 17,
                                    color: '#5F5D70',
                                }}>
                                Next
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    theming: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        fontFamily: 'Nunito',
        color: '#424242',
        display: 'flex',
    },
});

const mapStatesToProps = state => ({
    selectedTheme: state.theme.selectedTheme,
    signUpData: state.auth.signUpData,
    signUpSuccess:state.auth.signUpSuccess
});

export default connect(mapStatesToProps)(ThemeSwitch);
