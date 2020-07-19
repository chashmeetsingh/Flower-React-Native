import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {getProblemListForDay} from '../../../../redux/calendar/calendarActions';
import {isEqual} from 'lodash';

class CurrentEntry extends Component<any, any> {
  state = {
    journal: null,
    problems: [],
    symptoms: [],
  };

  componentDidMount() {
    if (this.props.journal) {
      this.setState({
        journal: this.props.journal[0].journal,
      });
    }
    this.getCurrentProblems();
  }

  componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
    if (!isEqual(this.props.journal, nextProps.journal[0].journal)) {
      this.setState({
        journal:
          nextProps.journal[0].journal != undefined
            ? nextProps.journal[0].journal
            : nextProps.journal[0],
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.problems != this.props.problems) {
      this.setState(
        {
          problems: this.props.problems ? this.props.problems : [],
        },
        () => this.generateProblemsWithType(),
      );
    }
  }

  getCurrentProblems() {
    this.props.dispatch(
      getProblemListForDay(this.props.token, this.props.date),
    );
  }

  generateProblemsWithType() {
    var symptoms = [];
    this.state.problems.map(problemTypes => {
      for (var items in problemTypes) {
        for (var item in problemTypes[items]) {
          if (problemTypes[items][item]['is_selected']) {
            symptoms.push(items + ' : ' + problemTypes[items][item]['name']);
          }
        }
      }
    });
    this.setState({
      symptoms: symptoms,
    });
  }

  render() {
    const symptomsList = this.state.symptoms.map((symptom, id) => {
      return (
        <View style={styles.itemContainer} key={id}>
          <Text style={styles.itemTitle}>{symptom}</Text>
          <Icon type="feather" color={'#E02020'} name="info" size={17} />
        </View>
      );
    });

    console.log('current journal', this.state.journal);

    return (
      <View style={{padding: 16}}>
        <View style={{flexDirection: 'row', marginBottom: 12}}>
          <Text style={styles.mySymptomsTitle}>My Symptoms</Text>
          <Text style={styles.cycleDay}>Cycle day 10</Text>
        </View>

        {symptomsList}

        {this.state.journal != null ? (
          <Button
            title={'View Journal Entry'}
            containerStyle={styles.viewEntryContainer}
            buttonStyle={styles.okButtonStyle}
            type={'solid'}
            onPress={() => {
              this.props.navigate('JournalReview', {
                journal: this.state.journal,
                hidePublish: true,
              });
            }}
          />
        ) : (
          <Button
            title={'Add Journal Entry'}
            type={'outline'}
            containerStyle={styles.addEntryContainer}
            buttonStyle={styles.addEntryButtonStyle}
            titleStyle={styles.addEntryTitleStyle}
            onPress={() => {
              this.props.navigate('JournalEntry', {date: this.props.date});
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  okButtonStyle: {
    borderRadius: 20,
    backgroundColor: '#F58015',
    height: 44,
  },
  mySymptomsTitle: {
    fontSize: 15,
    color: '#424242',
    fontWeight: '800',
    lineHeight: 20,
    flex: 1,
  },
  cycleDay: {
    fontSize: 15,
    color: '#424242',
    fontWeight: '800',
    lineHeight: 20,
    flex: 1,
    textAlign: 'right',
  },
  itemContainer: {
    backgroundColor: 'rgba(52,52,52,0.1)',
    borderRadius: 5,
    marginBottom: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    color: '#424242',
    fontSize: 17,
    lineHeight: 23,
    flexGrow: 1,
  },
  viewEntryContainer: {
    margin: 16,
    alignSelf: 'center',
    width: '50%',
  },
  addEntryContainer: {
    width: '50%',
    alignSelf: 'center',
  },
  addEntryButtonStyle: {
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#F58015',
  },
  addEntryTitleStyle: {
    color: '#F58015',
  },
});

const mapStateToProps = state => ({
  token: state.auth.userToken,
  problems: state.journals.currentProblems,
});

export default connect(mapStateToProps)(CurrentEntry);
