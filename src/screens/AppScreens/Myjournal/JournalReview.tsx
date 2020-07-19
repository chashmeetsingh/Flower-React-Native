import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Button} from 'react-native-elements';
import moment from 'moment';
import {
  createJournalEntry,
  updateJournalEntry,
} from '../../../redux/calendar/calendarActions';
import {connect} from 'react-redux';
import {isEqual, filter} from 'lodash';

class JournalReview extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      journal: {},
      hidePublish: false,
    };
  }

  componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
    if (!isEqual(nextProps.response, this.props.response)) {
      var journals = this.props.journals.filter(journal => {
        return nextProps.response.id != journal.id;
      });

      journals.push(nextProps.response);
      this.setState({
        journal: nextProps.response,
      });
      console.log(journals);
      this.props.dispatch(updateJournalEntry(journals));
    }
  }

  componentDidMount() {
    const {navigation} = this.props;
    this.setState({
      journal: navigation.getParam('journal', {}),
      hidePublish: navigation.getParam('hidePublish', false),
    });
  }

  createOrUpdateJournal() {
    this.props.dispatch(
      createJournalEntry(
        this.state.journal.id,
        this.state.journal.title,
        this.state.journal.description,
        this.state.journal.journal_date,
        this.props.token,
      ),
    );
    this.props.navigation.navigate('JournalReview');
  }

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('./Images/back-1.jpg')}>
        <View style={{flex: 1}} />
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <View style={{flex: 1}}>
              <Text style={styles.headerText}>Entry No. 27</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={[styles.headerText, {textAlign: 'right'}]}>
                {moment(this.state.journal.journal_date).format('DD MMM')}
              </Text>
            </View>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.journalHeading}>
              {this.state.journal.title}
            </Text>
            {/*<View style={[styles.symptomsContainer, {}]}>*/}
            {/*  <View style={styles.symptomItem}></View>*/}
            {/*  <View style={styles.symptomItem}></View>*/}
            {/*  <View style={styles.symptomItem}></View>*/}
            {/*  <View style={styles.symptomItem}></View>*/}
            {/*</View>*/}
            <Text style={styles.journalDescription}>
              {this.state.journal.description}
            </Text>
            <View style={styles.buttonsContainer}>
              <View style={{flex: 1, margin: 4}}>
                <Button
                  title={'Edit'}
                  type={'outline'}
                  buttonStyle={styles.editButtonStyle}
                  titleStyle={styles.editTitleStyle}
                  onPress={() => {
                    this.props.navigation.navigate('JournalEntry', {
                      journal: this.state.journal,
                    });
                  }}
                />
              </View>
              {this.state.hidePublish ? null : (
                <View style={{flex: 1, margin: 4}}>
                  <Button
                    title={'Publish'}
                    titleStyle={styles.publishTitleStyle}
                    buttonStyle={styles.publishButtonStyle}
                    onPress={() => this.createOrUpdateJournal()}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 15,
    fontWeight: '800',
    lineHeight: 20,
    color: 'rgba(52,52,52,0.4)',
  },
  contentContainer: {
    backgroundColor: 'white',
    flex: 6,
  },
  headerContainer: {
    flexDirection: 'row',
    height: 20,
    margin: 16,
  },
  dataContainer: {
    // backgroundColor: 'red',
    margin: 16,
  },
  journalHeading: {
    color: '#424242',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 30,
    // backgroundColor: 'yellow',
  },
  symptomsContainer: {
    backgroundColor: 'blue',
    height: 55,
    flexDirection: 'row',
  },
  symptomItem: {
    // backgroundColor: 'black',
    margin: 2,
    flex: 1,
  },
  journalDescription: {
    marginTop: 8,
    color: '#5F5D70',
    fontSize: 17,
    lineHeight: 23,
    // backgroundColor: 'green'
  },
  buttonsContainer: {
    flexDirection: 'row',
    margin: 16,
    height: 52,
    // backgroundColor: 'black'
  },
  editButtonStyle: {
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#F58015',
  },
  editTitleStyle: {
    color: '#F58015',
  },
  publishTitleStyle: {
    color: 'white',
  },
  publishButtonStyle: {
    backgroundColor: '#F58015',
    borderRadius: 20,
    height: 44,
  },
});

const mapStateToProps = state => ({
  token: state.auth.userToken,
  response: state.journals.response,
  journals: state.journals.journals,
});

export default connect(mapStateToProps)(JournalReview);
