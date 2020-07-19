import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import moment from 'moment';

class JournalEntry extends Component<any, any> {
  height = Dimensions.get('window').height;
  width = Dimensions.get('window').width - 32 - 16;

  state = {
    id: '',
    title: '',
    description: '',
    journal_date: new Date(),
  };

  componentDidMount() {
    let journal = this.props.navigation.getParam('journal', null);
    if (journal != null) {
      this.setState({
        id: journal.id,
        title: journal.title,
        description: journal.description,
        journal_date: journal.journal_date,
      });
    }
  }

  reviewJournalEntry() {
    this.props.navigation.navigate('JournalReviewAgain', {
      journal: {
        id: this.state.id,
        title: this.state.title,
        description: this.state.description,
        journal_date: this.state.journal_date,
      },
      hidePublish: false,
    });
  }

  render() {
    return (
      <ImageBackground
        style={styles.outerContainer}
        source={require('./Images/back-1.jpg')}>
        <View style={{flex: 1}} />
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <View style={{flex: 1}}>
              <Text style={styles.headerText}>Entry No. 27</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={[styles.headerText, {textAlign: 'right'}]}>
                {moment(this.state.journal_date).format('DD MMM')}
              </Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Journal Heading"
              value={this.state.title}
              inputStyle={styles.textFieldLabelStyle}
              onChangeText={text => this.setState({title: text})}
            />
            <Input
              placeholder="Journal Description"
              inputStyle={[styles.textFieldLabelStyle, {marginTop: 8}]}
              containerStyle={{maxHeight: this.height * 0.3}}
              multiline={true}
              value={this.state.description}
              onChangeText={text => this.setState({description: text})}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <View style={{flex: 1, margin: 4}}>
              <Button
                title={'Review'}
                type={'outline'}
                onPress={() => this.reviewJournalEntry()}
                buttonStyle={styles.reviewButtonStyle}
                titleStyle={styles.reviewButtonTitleStyle}
              />
            </View>
            <View style={{flex: 1, margin: 4}}>
              <Button
                title={'Cancel'}
                titleStyle={styles.cancelTitleStyle}
                buttonStyle={styles.cancelButtonStyle}
                onPress={() => this.props.navigation.goBack()}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
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
  inputContainer: {
    margin: 8,
  },
  textFieldLabelStyle: {
    color: '#5F5D70',
    fontSize: 17,
  },
  buttonsContainer: {
    flexDirection: 'row',
    margin: 16,
    height: 52,
  },
  reviewButtonStyle: {
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#F58015',
  },
  cancelTitleStyle: {
    color: 'white',
  },
  cancelButtonStyle: {
    backgroundColor: '#F58015',
    borderRadius: 20,
    height: 44,
  },
  reviewButtonTitleStyle: {
    color: '#F58015',
  },
});

const mapStateToProps = state => ({
  token: state.auth.userToken,
});

export default connect(mapStateToProps)(JournalEntry);
