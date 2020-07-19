import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {Input, Card, Image, Icon, Button} from 'react-native-elements';
import Dots from 'react-native-dots-pagination';
import SymptomsCard from './SymptomsCard';
import DropDownPicker from '../../../../components/DropDownPicker';
import {connect} from 'react-redux';

class AddEntry extends PureComponent<any,any> {
  state = {
    index: 0,
    currentCard: 0,
    cardData: [],
  };

  updateCurrentCard = index => {
    if (index == 3) return;
    this.setState({
      currentCard: index,
    });
  };

  swiper;
  picker;

  images = {
    Bleeding: require('../../../../../assets/images/bleeding.png'),
    Collection: require('../../../../../assets/images/collectionmethod.png'),
    Craving: require('../../../../../assets/images/cravings.png'),
    Digestion: require('../../../../../assets/images/digestion.png'),
    Cervical: require('../../../../../assets/images/fluid.png'),
    Hair: require('../../../../../assets/images/hair.png'),
    Pain: require('../../../../../assets/images/pain.png'),
    Skin: require('../../../../../assets/images/skin.png'),
    Pill: require('../../../../../assets/images/pill.png'),
  };

  updateIndex = () => {
    this.swiper.scrollBy(1);
    this.setState({
      index: this.state.index + 1,
      currentCard: 0,
    });
  };

  ref = el => {
    this.swiper = el;
  };

  renderCardWithSymtomType = (symptomType, id) => {
    if(this.props.problems){
      var data =this.props.problems.filter(symptom_type => {
        return symptom_type.name == symptomType;
      });
      console.log(data);
      if (data.length > 0) {
        return (
          <SymptomsCard
            headerImage={this.images[symptomType]}
            title={data[0].name}
            options={data[0].symptoms}
            multiSelect={data[0].multiSelect}
            updateCurrentCard={this.updateCurrentCard}
            currentCard={this.state.currentCard}
            id={id}
          />
        );
      }
      return null;
    }else{
      return null;
    }
    
  }

  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        ref={el => this.ref(el)}
        scrollEnabled={false}>
        <View style={styles.slide1}>
          <Text style={styles.headingText}>What are your symptoms, today?</Text>
          <Dots
            length={4}
            active={this.state.index}
            activeColor="#FDD12B"
            passiveDotWidth={10}
            activeDotWidth={14}
          />
          {this.renderCardWithSymtomType('Bleeding', 0)}
          {this.renderCardWithSymtomType('Collection', 1)}
          {this.renderCardWithSymtomType('Craving', 2)}
          <Icon
            name="arrowright"
            type="antdesign"
            color="#F58015"
            size={32}
            containerStyle={{margin: 16, alignSelf: 'center'}}
            onPress={this.updateIndex}
            underlayColor="transparent"
          />
        </View>
        <View style={styles.slide1}>
          <Text style={styles.headingText}>What are your symptoms, today?</Text>
          <Dots
            length={4}
            active={this.state.index}
            activeColor="#FDD12B"
            passiveDotWidth={10}
            activeDotWidth={14}
          />
          {this.renderCardWithSymtomType('Digestion', 0)}
          {this.renderCardWithSymtomType('Cervical', 1)}
          {this.renderCardWithSymtomType('Hair', 2)}
          <Icon
            name="arrowright"
            type="antdesign"
            color="#F58015"
            size={32}
            containerStyle={{margin: 16, alignSelf: 'center'}}
            onPress={this.updateIndex}
            underlayColor="transparent"
          />
        </View>
        <View style={styles.slide1}>
          <Text style={styles.headingText}>What are your symptoms, today?</Text>
          <Dots
            length={4}
            active={this.state.index}
            activeColor="#FDD12B"
            passiveDotWidth={10}
            activeDotWidth={14}
          />
          {this.renderCardWithSymtomType('Pain', 0)}
          {this.renderCardWithSymtomType('Skin', 1)}
          {this.renderCardWithSymtomType('Pill', 2)}
          <Icon
            name="arrowright"
            type="antdesign"
            color="#F58015"
            size={32}
            containerStyle={{margin: 16, alignSelf: 'center'}}
            onPress={this.updateIndex}
            underlayColor="transparent"
          />
        </View>
        <View style={styles.slide1}>
          <Text style={styles.headingText}>What are your symptoms, today?</Text>
          <Dots
            length={4}
            active={this.state.index}
            activeColor="#FDD12B"
            passiveDotWidth={10}
            activeDotWidth={14}
          />
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardTitleView}>
              <Image
                source={require('../../../../../assets/images/weight.png')}
                style={{width: 40, height: 40}}
              />
              <Text style={styles.cardHeading}>My weight today is,</Text>
            </View>
            <View style={[styles.optionsContainer, {flexDirection: 'row'}]}>
              <Input placeholder="0.0" containerStyle={{flex: 3}} />
              <DropDownPicker
                data={[
                  {
                    value: 'kg',
                    label: 'KG',
                  },
                  {
                    value: 'lb',
                    label: 'LB',
                  },
                ]}
                onValueChange={value => {
                  this.setState({weightUnit: value});
                }}
              />
            </View>
          </Card>
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardTitleView}>
              <Image
                source={require('../../../../../assets/images/temperature.png')}
                style={{width: 40, height: 40}}
              />
              <Text style={styles.cardHeading}>
                My Basal Body Temperature is,
              </Text>
            </View>
            <View style={styles.optionsContainer}>
              <Input placeholder="00.00" containerStyle={{flex: 3}} />
              <DropDownPicker
                data={[
                  {
                    value: 'C',
                    label: '°C',
                  },
                  {
                    value: 'F',
                    label: '°F',
                  },
                ]}
                onValueChange={value => {
                  this.setState({weightUnit: value});
                }}
              />
            </View>
          </Card>
          <Button
            title={'Ok'}
            containerStyle={{margin: 16, alignSelf: 'center', width: '50%'}}
            buttonStyle={styles.okButtonStyle}
            type={'solid'}
          />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: 'red',
  },
  slide1: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  headingText: {
    color: '#424242',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 30,
    margin: 20,
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: 'rgba(52,52,52,0.05)',
    borderRadius: 15,
    // width: '100%',
    marginLeft: 20,
    marginRight: 20,
    elevation: 0,
    borderColor: 'white',
    shadowColor: 'white',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0, //default is 1
    shadowRadius: 0, //default is 1
  },
  cardHeading: {
    color: '#424242',
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 23,
    flexGrow: 1,
    marginLeft: 8,
  },
  cardTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerCard: {
    margin: 10,
    padding: 4,
    borderWidth: 0,
    borderRadius: 4,

    elevation: 0,
    borderColor: 'white',
    shadowColor: 'white',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0, //default is 1
    shadowRadius: 0, //default is 1
  },
  optionsContainer: {
    flexDirection: 'row',
  },
  innerCardContent: {
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: 20,
    color: 'rgba(52,52,52,0.4)',
  },
  okButtonStyle: {
    borderRadius: 20,
    backgroundColor: '#F58015',
    height: 44,
  },
});

const mapStateToProps = state => ({
  token: state.auth.userToken,
  problems: state.journals.problems,
});

export default connect(mapStateToProps)(AddEntry);
