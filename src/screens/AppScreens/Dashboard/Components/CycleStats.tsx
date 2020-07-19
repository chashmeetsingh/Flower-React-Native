import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styleSheet from '../../Onboarding/Styles/styles';

class CycleStats extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.columnContainer}>
          <View style={styles.statsContainer}>
            <View style={styles.statsView}>
              <Text style={styles.statsHeader}>Period Date</Text>
              <Text style={styles.statsValue}>08 Oct</Text>
            </View>
            <View style={styles.statsView}>
              <Text style={styles.statsHeader}>Pregnancy Risk</Text>
              <Text style={styles.statsValue}>03 Nov</Text>
            </View>
          </View>
        </View>
        <View style={styles.columnContainer}>
          <View style={styles.statsContainer}>
            <View style={styles.statsView}>
              <Text style={styles.statsHeader}>Ovulation Date</Text>
              <Text style={styles.statsValue}>08 Oct</Text>
            </View>
            <View style={styles.statsView}>
              <Text style={styles.statsHeader}>Upcoming Cycle</Text>
              <Text style={styles.statsValue}>03 Nov</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  columnContainer: {
    flex: 1,
    alignContent: 'center',
  },
  upComingContainer: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'space-between',
    margin: '5%',
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  upComingHeader: {
    flex: 1,
    fontSize: 20,
    color: '#424242',
    fontWeight: '800',
    paddingVertical: '5%',
  },
  upComingDate: {
    flex: 1,
    fontSize: 20,
    color: '#F58015',
    fontWeight: '800',
  },
  upComingDescription: {
    flex: 1,
    fontSize: 17,
    color: '#5F5D70',
  },
  statsContainer: {
    flex: 1,
  },
  statsView: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    margin: '5%',
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  statsHeader: {
    flex: 1,
    fontSize: 17,
    color: '#5F5D70',
    alignSelf: 'center',
    marginVertical: '5%',
  },
  statsIcon: {},
  statsText: {},
  statsValue: {
    flex: 1,
    fontSize: 20,
    color: '#F58015',
    fontWeight: '800',
    alignSelf: 'center',
  },
  paginationContainer: {
    flex: 0,
    flexDirection: 'row',
  },
});

export default CycleStats;
