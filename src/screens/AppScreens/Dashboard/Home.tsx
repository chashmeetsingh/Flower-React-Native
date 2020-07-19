import * as React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from 'react-native';
import {
  TabView,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import Dashboard from './Components/Dashboard';
import {withNavigation} from 'react-navigation';
import CalendarScreen from './Calendar/CalendarScreen';
import TabArticles from '../tabArticles/tabArticles';
import TabForums from '../tabForums/tabForums';
import Nutrition from './Components/Tabs/Nutrition';
import ComingSoon from "../ComingSoon/ComingSoon";
import {getState} from "../../../util/auth";

type Route = {
  key: string;
  title: string;
  icon: any;
  selectedIcon: any;
};

type State = NavigationState<Route>;

class Home extends React.Component<any, State> {
  // eslint-disable-next-line react/sort-comp
  // static title = 'Custom tab bar';
  // static backgroundColor = '#fafafa';
  // static tintColor = '#263238';
  // static appbarElevation = 4;
  // static statusBarStyle = 'dark-content' as 'dark-content';

  componentDidMount() {
    // getState();
  }

  state = {
    index: 0,
    routes: [
      {
        key: 'home',
        title: 'Home',
        icon: require('./Components/img/icn-home.png'),
        selectedIcon: require('./Components/img/icn-home-active.png'),
      },
      {
        key: 'calendar',
        title: 'Calendar',
        icon: require('./Components/img/icn-calendar.png'),
        selectedIcon: require('./Components/img/icn-calendar-active.png'),
      },
      {
        key: 'articles',
        title: 'Articles',
        icon: require('./Components/img/icn-articles.png'),
        selectedIcon: require('./Components/img/icn-articles-active.png'),
      },
      {
        key: 'forums',
        title: 'Forums',
        icon: require('./Components/img/icn-forum.png'),
        selectedIcon: require('./Components/img/icn-forum-active.png'),
      },
      {
        key: 'wellness',
        title: 'Wellness',
        icon: require('./Components/img/icn-wellness.png'),
        selectedIcon: require('./Components/img/icn-wellness-active.png'),
      },
    ],
  };

  private handleIndexChange = (index: number) =>
    this.setState({
      index,
    });

  private renderItem = ({
    navigationState,
    position,
  }: {
    navigationState: State;
    position: Animated.Node<number>;
  }) => ({route, index}: {route: Route; index: number}) => {
    const inputRange = navigationState.routes.map((_, i) => i);

    const activeOpacity = Animated.interpolate(position, {
      inputRange,
      outputRange: inputRange.map((i: number) => (i === index ? 1 : 0)),
    });
    const inactiveOpacity = Animated.interpolate(position, {
      inputRange,
      outputRange: inputRange.map((i: number) => (i === index ? 0 : 1)),
    });

    return (
      <View style={styles.tab}>
        <Animated.View style={[styles.item, {opacity: inactiveOpacity}]}>
          <Image source={route.icon} />
        </Animated.View>
        <Animated.View
          style={[styles.item, styles.activeItem, {opacity: activeOpacity}]}>
          <Image source={route.selectedIcon} />
        </Animated.View>
      </View>
    );
  };

  private renderTabBar = (
    props: SceneRendererProps & {navigationState: State},
  ) => (
    <View style={styles.tabbar}>
      {props.navigationState.routes.map((route: Route, index: number) => {
        return (
          <TouchableWithoutFeedback
            key={route.key}
            onPress={() => props.jumpTo(route.key)}>
            {this.renderItem(props)({route, index})}
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );

  private renderScene = SceneMap({
    home: Dashboard,
    calendar: CalendarScreen,
    articles: ComingSoon,
    forums: ComingSoon,
    wellness: Nutrition,
  });

  render() {
    const {navigate} = this.props.navigation;
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        tabBarPosition="bottom"
        onIndexChange={this.handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fafafa',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 60,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, .2)',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  activeItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  active: {
    color: '#F58015',
  },
  inactive: {
    color: 'rgba(52,52,52,0.2)',
  },
  icon: {
    height: 26,
    width: 26,
    fontSize: 26,
  },
  label: {
    fontSize: 10,
    marginTop: 3,
    marginBottom: 1.5,
    backgroundColor: 'transparent',
  },
});

export default withNavigation(Home);
