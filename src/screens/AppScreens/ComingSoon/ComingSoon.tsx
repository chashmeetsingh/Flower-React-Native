import React from "react";
import {View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation";
import {connect} from 'react-redux';
import {getSelectedTheme} from "../Onboarding/ThemeSwitch/theme";
import styleSheet from "../Onboarding/Styles/styles";

class ComingSoon extends React.Component<any, any> {

    render() {
        const theme = getSelectedTheme(this.props.selectedTheme);
        return (
            <ImageBackground source={require('./img/preferences.png')}
                             style={{backgroundColor: theme.themeColor, width: '100%', height: '100%',alignItems:'center'}}>
                <View style={{flex:1,marginTop:'20.27%'}}>
                    <Text style={[styleSheet.titleText,{color:theme.fontColor,fontSize: 28}]}>Coming Soon</Text>
                </View>
                <View style={{flex:2}}>
                    <Image source={require('./img/flower-pot.png')}></Image>
                </View>
                <View style={{flex:1,marginHorizontal:30}}>
                    <Text style={styleSheet.text}>This feature is not ready just yet, please enjoy the rest of the app while we get ready to launch our full version!</Text>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity
                        style={[styleSheet.button,{backgroundColor:theme.buttonBackRoundColor,paddingHorizontal:50}]}
                        onPress={() => {
                            // navigate('NameAndEmail');
                        }}>
                        <Text style={[styleSheet.buttonText,{color:theme.fontColor}]}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({})

const mapStateToProps = state => ({
    selectedTheme: state.theme.selectedTheme,
});

export default withNavigation(connect(mapStateToProps)(ComingSoon));