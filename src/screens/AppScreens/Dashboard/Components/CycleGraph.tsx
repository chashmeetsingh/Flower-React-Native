import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Pie from 'react-native-pie';
import {IThemeStyles} from "../../Onboarding/ThemeSwitch/theme";

interface CycleGraphProps {
  theme: IThemeStyles
}

class CycleGraph extends React.Component<CycleGraphProps, any> {
  render() {
    let sectionsList = generateCalendarGraph(30);
    const {theme} = this.props;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Pie radius={120} innerRadius={100} sections={sectionsList} />
          <View style={styles.gauge}>
            <Text style={[styles.guageHeader,{color:theme.fontColor}]}>Cycle Day</Text>
            <Text style={[styles.guageDayCount,{color:theme.tertiaryColor}]}>10</Text>
            <Text style={[styles.gaugeText,{color:theme.fontColor}]}>What does</Text>
            <Text style={[styles.gaugeText,{color:theme.fontColor}]}>this mean?</Text>
          </View>
        </View>
      </View>
    );
  }
}

function generateCalendarGraph(days) {
  let percentageForBreaks = 0.2 * days;
  let percentageForDay = (100 - percentageForBreaks) / days;
  let dayElements: any = [];

  for (let index = 0; index < days; index++) {
    let element = {
      percentage: percentageForDay,
      color: 'rgba(52,52,52,0.2)',
    };
    if (index < 8) {
      element.color = '#F58015';
    }
    if (index > 11 && index < 18) {
      element.color = '#9161E1';
    }
    let borderElement = {
      percentage: 0.2,
      color: '#FFF',
    };
    dayElements.push(element);
    dayElements.push(borderElement);
  }

  return dayElements;
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  gauge: {
    position: 'absolute',
    marginTop: '13%',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  guageHeader: {
    fontSize: 15,
    color: '#424242',
  },
  guageDayCount: {
    fontSize: 34,
    color: '#F58015',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: 'rgba(52,52,52,0.4)',
    fontSize: 15,
  },
});

export default CycleGraph;
