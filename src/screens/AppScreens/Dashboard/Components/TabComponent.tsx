import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styleSheet from '../../Onboarding/Styles/styles';

import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';
import Nutrition from './Nutrition/Nutrition';
import Workout from './Nutrition/Workout';

type State = NavigationState<{
  key: string;
  title: string;
}>;

class TabComponent extends React.Component<any, any> {
  state = {
    index: 0,
    routes: [
      {key: 'nutrition', title: 'Nutrition'},
      {key: 'workout', title: 'Workout'},
    ],
  };

  private handleIndexChange = (index: number) =>
    this.setState({
      index,
    });

  private renderTabBar = (
    props: SceneRendererProps & {navigationState: State},
  ) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );

  private renderScene = SceneMap({
    nutrition: Nutrition,
    workout: Workout,
  });

  // private renderScene = ({route}) => {
  //   switch (route.key) {
  //     case 'journal':
  //       return <Journal navigate={this.props.navigate} />;
  //     case 'articles':
  //       return <Articles />;
  //     case 'forums':
  //       return <Forums />;
  //     case 'nutrition':
  //       return <Nutrition />;
  //     default:
  //       return null;
  //   }
  // };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={this.handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  tabbar: {
    backgroundColor: '#FFF',
  },
  tab: {
    width: 120,
  },
  indicator: {
    backgroundColor: '#F58015',
  },
  label: {
    color: '#424242',
    fontWeight: '400',
  },
});

export default TabComponent;
