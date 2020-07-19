import axios from 'axios';
import {BASE_URL} from '../constants/urls';

export async function get(url: string, options = {}) {
  console.log('GET url ', `${BASE_URL}${url}.json`);
  console.log('GET headers ', options);
  try {
    const response = await axios.get(`${BASE_URL}${url}`,options);
    return response;
  } catch (e) {
    throw e;
  }
}

export async function post(url, body, options) {
  console.log('POST Body ', body);
  console.log('POST url ', `${BASE_URL}${url}.json`);
  console.log('POST headers ', options);
  try {
    const response = await axios.post(`${BASE_URL}${url}.json`, body, options);
    console.log('POST success ', response);
    return response;
  } catch (e) {
    console.log('POST error ', e);
    throw e;
  }
}

export async function put(url, body, options = {}) {
  console.log('POST Body ', body);
  console.log('POST url ', `${BASE_URL}${url}.json`);
  try {
    const response = await axios.put(`${BASE_URL}${url}.json`, body, options);
    console.log('POST success ', response);
    return response;
  } catch (e) {
    console.log('POST error ', e);
    throw e;
  }
}
