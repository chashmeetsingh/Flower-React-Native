import {combineReducers} from 'redux';
import {themeReducer} from './theme/themeReducer';
import {authReducer} from './auth/authReducer';
import {dashboardReducer} from './dashboard/dashboardReducer';
import {preferenceReducer} from './preferences/preferencesReducer';
import {calendarReducer} from "./calendar/calendarReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  dashboard: dashboardReducer,
  preferences: preferenceReducer,
  journals: calendarReducer,
});

export default rootReducer;
