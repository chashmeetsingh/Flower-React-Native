import * as React from 'react';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import {Image, View} from 'react-native';

interface DatePickerProps {
  date: string;
  format: string;
  placeholder: string;
  onDateChange: (date: string) => void;
}

class Calendar extends React.Component<DatePickerProps, {}> {
  private iconComponent = <Image source={require('./img/calendar.png')} />;

  render() {
    return (
      <DatePicker
        style={{textAlign:'right'}}
        date={this.props.date}
        mode="date"
        placeholder={this.props.placeholder}
        format={this.props.format}
        maxDate={moment().format('MMMM Do')}
        showIcon={true}
        customStyles={{
          dateInput: {
            width: '13.40%',
            height: 40,
            borderColor: 'transparent',
            alignItems: 'flex-start',
          },
        }}
        onDateChange={this.props.onDateChange}
        confirmBtnText="Ok"
        cancelBtnText="Cancel"
        iconComponent={this.iconComponent}
      />
    );
  }
}

export default Calendar;
