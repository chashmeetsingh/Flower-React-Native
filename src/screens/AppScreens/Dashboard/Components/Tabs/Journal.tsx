/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import styles from '../../../Onboarding/Styles/styles';
import Icon from 'react-native-fa-icons';
import {getMyJournals} from '../../../../../redux/dashboard/dashboardActions';
import {connect} from 'react-redux';
import SnapCarousel from "../SnapCarousel";

class Journal extends React.Component<any, any> {
    componentDidMount() {
        const {dispatch} = this.props;
        // dispatch(getMyJournals(this.props.user.id, 0));
    }


    render() {
        return (
            <View style={(styles.mainContainer, {flex: 1, flexDirection: 'row', width: '100%'})}>
                {/* <View
                    style={{
                        flex: 3,
                        flexDirection: 'column',
                    }}>
                    <View style={{flex: 1}}/>
                    <View
                        style={{
                            flex: 0,
                            marginHorizontal: '20%',
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigate('Feelings');
                            }}>
                            <View
                                style={{
                                    height: 50,
                                    width: 50,
                                    borderRadius: 100,
                                    backgroundColor: '#F58015',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Icon name="plus" style={{color: 'white', fontSize: 23}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}/>
                </View> */}
                <View style={{flex: 10, width: '100%'}}>
                    <SnapCarousel/>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    selectedTheme: state.theme.selectedTheme,
    journals: state.dashboard.journals,
    user: state.auth.user,
    loginError: state.auth.loginError,
});

export default connect(mapStateToProps)(Journal);
