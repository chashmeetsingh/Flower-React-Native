import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styleSheet from '../../Onboarding/Styles/styles';
import Swiper from 'react-native-swiper';
import CycleStats from './CycleStats';
import TabComponent from './TabComponent';
import CycleGraph from './CycleGraph';
import Forums from './Tabs/Forums';

class ForumsView extends React.Component<any, any> {
  render() {
    // const {navigate} = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Forums</Text>
          </View>
          <View style={styles.searchContainer}>
            <Image
              style={styles.searchImage}
              source={require('./img/search.png')}></Image>
          </View>
        </View>
        <View style={styles.categoriesWrapper}>
          <View style={styles.categoryContainer}>
            <Text>Nutrition</Text>
          </View>

          <View style={styles.categoryContainer}>
            <Text>Beauty</Text>
          </View>

          <View style={styles.categoryContainer}>
            <Text>Health</Text>
          </View>

          <View style={styles.categoryContainer}>
            <Text>Selfcare</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.categoryDetailsContainer}>
            <View style={styles.categoryNameContainer}>
              <Text style={styles.categoryNameText}>Beauty</Text>
            </View>
            <View style={styles.categoryNameContainer}>
              <Text style={styles.categoryDetailsText}>34 forums found</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Forums></Forums>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    fontFamily: 'Nunito',
    backgroundColor: '#FFE16E',
  },
  topContainer: {
    flex: 0,
    backgroundColor: '#FFE16E',
    flexDirection: 'row',
  },
  bottomContainer: {
    flex: 3,
    backgroundColor: '#FBFAFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerContainer: {
    flex: 2,
    alignContent: 'flex-start',
    paddingVertical: '3%',
  },
  categoryNameContainer: {
    flex: 1,
    alignContent: 'flex-start',
    paddingLeft: '10%',
    paddingTop: '5%',
  },
  categoryNameText: {
    fontSize: 15,
    color: '#F58015',
    fontWeight: 'bold',
  },
  categoryDetailsText: {
    fontSize: 15,
    color: '#525252',
    fontWeight: 'bold',
  },
  categoryDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  searchContainer: {
    flex: 1,
    alignContent: 'flex-end',
    paddingHorizontal: '10%',
  },
  searchImage: {
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    marginTop: '15%',
  },
  categoriesWrapper: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#FFE16E',
    paddingHorizontal: '10%',
  },
  categoryContainer: {
    flex: 1,
    paddingVertical: '5%',
  },
  header: {
    fontSize: 20,
    color: '#424242',
    fontWeight: '800',
    alignSelf: 'flex-start',
    paddingHorizontal: '10%',
  },
  sliderContainer: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },

  wrapper: {},
  slide: {
    flex: 1,
  },
  text: {
    color: '#333',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default ForumsView;
