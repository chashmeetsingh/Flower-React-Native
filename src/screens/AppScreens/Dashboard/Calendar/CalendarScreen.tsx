import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Agenda, LocaleConfig} from 'react-native-calendars';
import {withNavigation} from 'react-navigation';
import moment from 'moment';
import AddEntry from './AddEntry';
import CurrentEntry from './CurrentEntry';
import {connect} from 'react-redux';
import {getSelectedTheme} from '../../Onboarding/ThemeSwitch/theme';
import {
  getJournalEntry,
  getProblemList,
} from '../../../../redux/calendar/calendarActions';
import {isEqual} from 'lodash';

LocaleConfig.locales[LocaleConfig.defaultLocale].dayNamesShort = [
  'S',
  'M',
  'T',
  'W',
  'T',
  'F',
  'S',
];

class CalendarScreen extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      year: new Date().getFullYear(),
      journals: [],
      markedDates: {},
      currentDate: moment(new Date()).format('YYYY-MM-DD'),
      items: {},
      currentJournal: {},
    };
  }

  componentDidMount() {
    this.getJournalEntryData();
    this.getProblemsList();
  }

  componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
    if (!isEqual(nextProps.journals, this.props.journals)) {
      this.setState(
        {
          currentJournal: nextProps.journals.filter(journal => {
            return this.state.currentDate == journal.journal_date;
          }),
        },
        () => {
          console.log('current journal ', this.state.currentJournal);
          this.updateJournalsData();
        },
      );
    }
  }

  getJournalEntryData() {
    this.props.dispatch(getJournalEntry(this.state.year, this.props.token));
  }

  getProblemsList() {
    this.props.dispatch(getProblemList(this.props.token));
  }

  updateYear(year) {
    if (this.state.year != year) {
      this.setState(
        {
          year: year,
        },
        () => {
          this.getJournalEntryData();
        },
      );
    }
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.journals, this.props.journals);
    if (prevProps.journals != this.props.journals) {
      this.setState(
        {
          journals: this.props.journals ? this.props.journals : [],
        },
        () => this.updateJournalsData(),
      );
    }
  }

  updateJournalsData() {
    var markedDates = this.state.markedDates;
    var items = this.state.items;
    for (var journal in this.props.journals) {
      markedDates[this.props.journals[journal]['journal_date']] = {
        marked: true,
      };

      items[this.props.journals[journal]['journal_date']] = [
        {
          date: this.props.journals[journal]['journal_date'],
          journal: this.props.journals[journal],
        },
      ];
    }
    this.setState({
      markedDates: markedDates,
      items: items,
    });
  }

  updateCurrentDate(date) {
    this.setState({
      currentDate: date,
      currentJournal: date in this.state.items ? this.state.items[date] : null,
    });
  }

  render() {
    const theme = getSelectedTheme(this.props.selectedTheme);
    console.log('screen', this.state.currentJournal);
    return (
      <ImageBackground
        source={require('../../../../../assets/images/theme_background.png')}
        style={{flex: 1, backgroundColor: '#FDD12B'}}>
        <Agenda
          // specify how each item should be rendered in agenda
          renderItem={item => {
            if (this.state.currentDate == item.date) {
              return (
                <CurrentEntry
                  date={this.state.currentDate}
                  navigate={this.props.navigation.navigate}
                  journal={this.state.currentJournal}
                />
              );
            }
          }}
          // specify how each date should be rendered. day can be undefined if the item is not first in that day.
          renderDay={() => {
            return <View />;
          }}
          // specify how empty date content with no items should be rendered
          renderEmptyDate={() => {
            return <AddEntry />;
          }}
          // Callback that gets called when items for a certain month should be loaded (month became visible)
          loadItemsForMonth={date => this.updateYear(date.year)}
          // specify what should be rendered instead of ActivityIndicator
          renderEmptyData={() => {
            return <AddEntry />;
          }}
          onDayPress={day => this.updateCurrentDate(day.dateString)}
          // specify your item comparison function for increased performance
          rowHasChanged={(r1, r2) => {
            return true;
          }}
          markedDates={this.state.markedDates}
          items={this.state.items}
          // agenda theme
          theme={{
            calendarBackground: '#F58015',
            dayTextColor: theme.fontColor,
            textSectionTitleColor: '#F58015',
            todayTextColor: 'white',
            todayBackgroundColor: '#F58015',
            monthTextColor: theme.tertiaryColor,
            // textDayFontFamily: 'Nunito',
            // textMonthFontFamily: 'Nunito',
            // textDayHeaderFontFamily: 'Nunito',
            textDayFontWeight: '400',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '800',
            textDayFontSize: 17,
            textMonthFontSize: 17,
            textDayHeaderFontSize: 14,
            agendaDayTextColor: 'yellow',
            agendaDayNumColor: 'green',
            agendaTodayColor: 'red',
            // agendaKnobColor: 'blue'
          }}
        />
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  selectedTheme: state.theme.selectedTheme,
  token: state.auth.userToken,
  journals: state.journals ? state.journals.journals : [],
  currentProblems: state.journals ? state.journals.currentProblems : [],
});

export default withNavigation(connect(mapStateToProps)(CalendarScreen));
