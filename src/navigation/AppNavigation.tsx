import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
import WelcomePage from '../screens/AppScreens/WelcomePage/WelcomePage';
import SignIn from '../screens/AppScreens/SignIn/SignIn';
import About from '../screens/AppScreens/About/About';
import NameAndEmail from '../screens/AppScreens/Onboarding/NameAndEmail/NameAndEmail';
import NewPassword from '../screens/AppScreens/Onboarding/Password/NewPassword';
import Interests from '../screens/AppScreens/Onboarding/Interests/Interests';
import ThemeSwitch from '../screens/AppScreens/Onboarding/ThemeSwitch/ThemeSwitch';
import TermsAndConditions from '../screens/AppScreens/Onboarding/TermsAndConditions/TermsAndConditions';
import Preferences from '../screens/AppScreens/Onboarding/Preferences/Preferenses';
import ForgotPassword from '../screens/AppScreens/ResetPassword/FogotPassword';
import VerifyEmail from '../screens/AppScreens/ResetPassword/VerifyEmail';
import EmailConfirmation from '../screens/AppScreens/Onboarding/EmailConfirmation/EmailConfirmation';
import Welcome from '../screens/AppScreens/Onboarding/Welcome/Welcome';
import BirthControlOptions from '../screens/AppScreens/Onboarding/Preferences/BirthControlOptions';
import MenstrualCycle from '../screens/AppScreens/Onboarding/MenstrualCycle/MenstrualCycle';
import PeriodFrequency from '../screens/AppScreens/Onboarding/MenstrualCycle/PeriodFrequency/PeriodFrequency';
import ChangePassword from '../screens/AppScreens/ResetPassword/ChangePassword';
import Home from '../screens/AppScreens/Dashboard/Home';
import Feelings from '../screens/AppScreens/Myjournal/Feelings';
import Water from '../screens/AppScreens/Myjournal/Water';
import Sleep from '../screens/AppScreens/Myjournal/Sleep';
import CalendarScreen from '../screens/AppScreens/Dashboard/Calendar/CalendarScreen';
import CalendarDetailReadOnly from '../screens/AppScreens/Dashboard/Calendar/CalendarDetailReadOnly';
import CalendarDetail from '../screens/AppScreens/Dashboard/Calendar/CalendarDetail';
import TabArticles from '../screens/AppScreens/tabArticles/tabArticles';
import WaterInfo from "../screens/AppScreens/Myjournal/WaterInfo";
import Workout from "../screens/AppScreens/Myjournal/Workout";
import JournalEntry from "../screens/AppScreens/Myjournal/JournalEntry";
import JournalReview from "../screens/AppScreens/Myjournal/JournalReview";
import CurrentEntry from "../screens/AppScreens/Dashboard/Calendar/CurrentEntry";
import MyPreferences from "../screens/AppScreens/Onboarding/Preferences/MyPreferences";
import AuthLoadingScreen from "../screens/AppScreens/AuthLoadingScreen/AuthLoadingScreen";

const MainStack = createStackNavigator(
    {
        WelcomePage: {screen: WelcomePage},
        SignIn: {screen: SignIn},
        About: {screen: About},
        NameAndEmail: {screen: NameAndEmail},
        CreatePassword: {screen: NewPassword},
        Interests: {screen: Interests},
        ThemeSwitch: {screen: ThemeSwitch},
        TermsAndConditions: {screen: TermsAndConditions},
        MyPreferences: {screen: Preferences},
        ForgotPassword: {screen: ForgotPassword},
        VerifyEmail: {screen: VerifyEmail},
        EmailConfirmation: {screen: EmailConfirmation},
        Welcome: {screen: Welcome},
        BirthControlOptions: {screen: BirthControlOptions},
        MenstrualCycle: {screen: MenstrualCycle},
        PeriodFrequency: {screen: PeriodFrequency},
        ResetPassword: {screen: ChangePassword},
        Home: {screen: Home},
        Feelings: {screen: Feelings},
        Water: {screen: Water},
        Sleep: {screen: Sleep},
        Calendar: {screen: CalendarScreen},
        CalendarStack: {screen: CalendarDetailReadOnly},
        CalendarDetail: {screen: CalendarDetail},
        ArticlesTab: {screen: TabArticles},
        WaterInfo: {screen: WaterInfo},
        Workout: {screen: Workout},
        JournalEntry: {screen: JournalEntry},
        JournalReview: {screen: JournalReview},
        JournalReviewAgain: {screen: JournalReview},
        CurrentEntry: {screen: CurrentEntry},
        Preferences: {screen: MyPreferences}
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
    },
);

const AuthStack = createStackNavigator({ WelcomeScreen: WelcomePage });

const AppStack = createDrawerNavigator(
    {
        MainStack: {screen: MainStack},
    },
    {
        drawerWidth: width - 50,
        drawerPosition: 'left',
        // contentComponent: props => <SideBar {...props} />,
    },
);

export default createAppContainer(
    createSwitchNavigator(
        {
            AppStack: AppStack,
            AuthLoading:AuthLoadingScreen,
            AuthStack:AuthStack
        },
        {
            initialRouteName: 'AuthLoading',
        },
    ),
);
