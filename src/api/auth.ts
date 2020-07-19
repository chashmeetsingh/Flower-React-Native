import {API_URL} from '../constants/urls';
import {post, get, put} from '../util/httpHandler';
import {getAuthToken} from "../util/auth";

export async function signIn(user: User) {
  try {
    console.log(user);
    console.log('user', API_URL.SIGN_IN);
    const response = await post(API_URL.SIGN_IN, user);
    return response;
  } catch (e) {
    throw e;
  }
}

export async function verifyEmail(data) {
  try {
    const response = await post(API_URL.VERIFY_EMAIL, data);
    console.log('SUCCESS', response);
    return response;
  } catch (e) {
    console.log('SUCCESS', e);
    throw e;
  }
}

export async function signUp(user) {
  try {
    const response = await post(API_URL.SIGN_UP, user);
    // return get(response, 'data.data', {});
    return response;
  } catch (e) {
    // throw get(e, 'response.data', {});
    throw e;
  }
}

export async function forgotPassword(forgotPassword) {
  try {
    const response = await post(API_URL.FORGOT_PASSWORD, forgotPassword,{headers:{Authorization: `bearer ${getAuthToken()}`}});
    // return get(response, 'data.data', {});
    return response;
  } catch (e) {
    // throw get(e, 'response.data', {});
    throw e;
  }
}

export async function changePassword(changePassword) {
  try {
    const response = await put(API_URL.FORGOT_PASSWORD, changePassword,{headers:{Authorization: `bearer ${getAuthToken()}`}});
    // return get(response, 'data.data', {});
    return response;
  } catch (e) {
    // throw get(e, 'response.data', {});
    throw e;
  }
}

export async function getMyJournalData(data) {
  var url =
    API_URL.GET_MY_JOURNALS +
    '?user_id=' +
    data.payload.user_id +
    '&per_page=' +
    10 +
    '&page_no=' +
    data.payload.page_no;

  try {
    const response = await get(url,{headers:{Authorization: `bearer ${getAuthToken()}`}});

    return response;
  } catch (e) {
    throw e;
  }
}

export async function getDashBoardArticle(data) {
  var url =
    API_URL.GET_ARTICLES +
    '?user_id=' +
    data.payload.user_id +
    '&per_page=' +
    10 +
    '&page_no=' +
    data.payload.page_no;

  try {
    const response = await get(url,{headers:{Authorization: `bearer ${getAuthToken()}`}});

    return response;
  } catch (e) {
    throw e;
  }
}

export async function getALLForums(data) {
  var url =
    API_URL.GET_FORUMS +
    '?user_id=' +
    data.payload.user_id +
    '&per_page=' +
    10 +
    '&page_no=' +
    data.payload.page_no;

  try {
    const response = await get(url,{headers:{Authorization: `bearer ${getAuthToken()}`}});

    return response;
  } catch (e) {
    throw e;
  }
}

export async function createJournal(journalEntry) {
  const {id, title, description, journalDate, token} = journalEntry.payload;
  const journal = {
    id: id,
    title: title,
    description: description,
    journalDate: journalDate,
  };
  try {
    const response = await post(API_URL.ADD_JOURNAL_ENTRY, journal, {headers:{Authorization: `bearer ${getAuthToken()}`}})
    // return get(response, 'data.data', {});
    return response;
  } catch (e) {
    // throw get(e, 'response.data', {});
    throw e;
  }
}

export async function getJournal(data) {
  const {year, token} = data.payload;
  try {
    const response = await get(API_URL.GET_JOURNAL_ENTRIES + '?year=' + year, {headers:{Authorization: `bearer ${getAuthToken()}`}});
    // return get(response, 'data.data', {});
    return response;
  } catch (e) {
    // throw get(e, 'response.data', {});
    throw e;
  }
}

export async function getProblems(data) {
  try {
    const response = await get(API_URL.GET_PROBLEM_LIST, {headers:{Authorization: `bearer ${getAuthToken()}`}});
    return response;
  } catch (e) {
    throw e;
  }
}

export async function getProblemsForDate(data) {
  const {token, date} = data.payload;
  console.log('TOKEN: ', data.payload);
  try {
    const response = await get(
      API_URL.GET_PROBLEMS_FOR_DATE + '?date=' + date,
        {headers:{Authorization: `bearer ${getAuthToken()}`}},
    );
    return response;
  } catch (e) {
    throw e;
  }
}
