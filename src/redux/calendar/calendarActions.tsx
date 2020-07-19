import {CALENDAR} from '../../constants/actionTypes';
import {createJournal, getJournal, getProblems, getProblemsForDate} from '../../api/auth';
import {getAuthToken} from "../../util/auth";

export function createJournalEntry(id, title, description, journalDate, token) {
  return dispatch => {
    createJournal({
      payload: {
        id,
        title,
        description,
        journalDate,
        token,
      },
    })
      .then(res => {
        dispatch(createJournalEntrySuccess(res.data.journal));
      })
      .catch(error => {
        dispatch(createJournalEntryError(error));
      });
  };
}

export function createJournalEntrySuccess(response) {
  return {
    type: CALENDAR.CREATE_JOURNAL_ENTRY_SUCCESS,
    response,
  };
}

export function createJournalEntryError(response) {
  return {
    type: CALENDAR.CREATE_JOURNAL_ENTRY_ERROR,
    response,
  };
}

export function getJournalEntry(year, token) {
  return dispatch => {
    getJournal({
      payload: {
        year,
        token,
      },
    })
      .then(res => {
        dispatch(getJournalEntrySuccess(res.data.journal));
      })
      .catch(error => {
        dispatch(getJournalEntryError(error));
      });
  };
}

export function getJournalEntrySuccess(response) {
  return {
    type: CALENDAR.GET_JOURNAL_ENTRY_SUCCESS,
    response,
  };
}

export function getJournalEntryError(response) {
  return {
    type: CALENDAR.GET_JOURNAL_ENTRY_ERROR,
    response,
  };
}

export function getProblemList(token) {
  return dispatch => {
    getProblems({
      payload: {
        token,
      },
    })
      .then(res => {
        dispatch(getProblemListSuccess(res.data.problem_list));
      })
      .catch(error => {
        dispatch(getProblemListError(error));
      });
  };
}

export function getProblemListSuccess(response) {
  return {
    type: CALENDAR.GET_PROBLEM_LIST_SUCCESS,
    response,
  };
}

export function getProblemListError(response) {
  return {
    type: CALENDAR.GET_PROBLEM_LIST_ERROR,
    response,
  };
}

export function getProblemListForDay(token, date) {
  return dispatch => {
    getProblemsForDate({
      payload: {
        token,
        date,
      },
    })
      .then(res => {
        dispatch(getProblemListForDaySuccess(res.data.problem_details));
      })
      .catch(error => {
        dispatch(getProblemListForDayError(error));
      });
  };
}

export function getProblemListForDaySuccess(response) {
  return {
    type: CALENDAR.GET_PROBLEMS_FOR_DATE_SUCCESS,
    response,
  };
}

export function getProblemListForDayError(response) {
  return {
    type: CALENDAR.GET_PROBLEMS_FOR_DATE_ERROR,
    response,
  };
}

export function updateJournalEntry(response) {
  return {
    type: CALENDAR.GET_JOURNAL_ENTRY_SUCCESS,
    response,
  };
}
