import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import styleSheet from '../../../Onboarding/Styles/styles';
import {connect} from 'react-redux';
import {getSelectedTheme} from "../../../Onboarding/ThemeSwitch/theme";

class Nutrition extends React.Component<any, any> {
    render() {
        const theme = getSelectedTheme(this.props.selectedTheme);
        return (
            <View style={styleSheet.mainContainer}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: theme.themeColor,
                            borderRadius: 100,
                            margin: 10,
                            alignItems: 'center',
                            alignContent: 'center',
                        }}>
                        <Text
                            style={{
                                flex: 0,
                                paddingTop: '20%',
                                color: theme.tertiaryColor,
                                fontSize: 17,
                                fontWeight: '900',
                                textAlign: 'center',
                            }}>
                            You’re on
                        </Text>
                        <Text
                            style={{
                                flex: 0,
                                alignContent: 'space-around',
                                color: theme.tertiaryColor,
                                fontSize: 17,
                                fontWeight: '900',
                                textAlign: 'center',
                            }}>
                            your period
                        </Text>
                        <Text
                            style={{
                                flex: 0,
                                alignContent: 'space-around',
                                color: theme.fontColor,
                                fontSize: 17,
                                fontWeight: '900',
                                textAlign: 'center',
                            }}>
                            What should
                        </Text>
                        <Text
                            style={{
                                flex: 1,
                                alignContent: 'space-around',
                                color: theme.fontColor,
                                fontSize: 17,
                                fontWeight: '900',
                                textAlign: 'center',
                            }}>
                            I eat?
                        </Text>
                    </View>
                    <View style={{flex: 1, margin: 10}}>
                        <Text style={{flex: 0, margin: 10, color: '#424242', fontSize: 14}}>
                            Many people have uncomfortable symptoms during menstruation. Some
                            foods can lessen these symptoms, while other foods can make them
                            worse.
                        </Text>
                        <Text
                            style={{
                                flex: 0,
                                margin: 10,
                                color: '#F58015',
                                fontSize: 17,
                                textDecorationLine: 'underline',
                            }}>
                            Read More
                        </Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.box}>
                        <ImageBackground
                            source={require('./img/breakfast.jpg')}
                            style={{width: '100%', height: '96%'}}
                            imageStyle={{borderRadius: 10}}>
                            <Text style={styles.header}>Breakfast</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.box}>
                        <ImageBackground
                            source={require('./img/lunch.jpg')}
                            style={{width: '100%', height: '96%'}}
                            imageStyle={{borderRadius: 10}}>
                            <Text style={styles.header}>Lunch</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.box}>
                        <ImageBackground
                            source={require('./img/dinner.jpg')}
                            style={{width: '100%', height: '96%'}}
                            imageStyle={{borderRadius: 10}}>
                            <Text style={styles.header}>Dinner</Text>
                        </ImageBackground>
                    </View>
                </View>
                <View style={{flex: 0.5}}>
                    <View style={styles.box}>
                        <Text style={styles.header}>Snacks</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        marginHorizontal: '3%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: '8%',
        zIndex: 999,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    header: {
        fontSize: 17,
        fontWeight: '800',
        color: '#424242',
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingHorizontal: '7.2%',
        textAlign: 'center',
    },
});

const mapStateToProps = state => ({
    selectedTheme: state.theme.selectedTheme,
});

export default connect(mapStateToProps)(Nutrition);

