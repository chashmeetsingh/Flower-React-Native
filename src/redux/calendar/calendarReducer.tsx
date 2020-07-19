import {CALENDAR} from '../../constants/actionTypes';

export const calendarReducer = (state = {}, action) => {
  switch (action.type) {
    case CALENDAR.CREATE_JOURNAL_ENTRY_SUCCESS:
      return {...state, response: action.response};
    case CALENDAR.GET_JOURNAL_ENTRY_SUCCESS:
      return {...state, journals: action.response};
    case CALENDAR.GET_PROBLEM_LIST_SUCCESS:
      console.log(action);
      return {...state, problems: action.response};
    case CALENDAR.GET_PROBLEMS_FOR_DATE_SUCCESS:
      return {...state, currentProblems: action.response};
    default:
      return state;
  }
};
