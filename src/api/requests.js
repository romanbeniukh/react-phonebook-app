import axios from 'axios';
import * as endpoint from './endpoints';

export default {
  setAuthToken: token => {
    axios.defaults.headers.common.Authorization = token;
  },
  clearAuthToken: () => {
    axios.defaults.headers.common.Authorization = null;
  },
  login: async credentials => {
    const { data } = await axios.post(endpoint.LOGIN_API(), credentials);
    return data;
  },
  signup: async credentials => {
    const { data } = await axios.post(endpoint.SIGNUP_API(), credentials);
    return data;
  },
  logout: async () => {
    const { data } = await axios.post(endpoint.LOGOUT_API());
    return data;
  },
  refreshUser: async () => {
    const { data } = await axios.get(endpoint.CURRENT_USER_API());
    return data;
  },
  deleteUser: async () => {
    const { data } = await axios.delete(endpoint.DELETE_USER_API());
    return data;
  },
  getContacts: async () => {
    const { data } = await axios.get(endpoint.GET_CONTACTS());
    return data;
  },
  setContact: async contact => {
    const { data } = await axios.post(endpoint.SET_CONTACT(), contact);
    return data;
  },
  deleteContact: async id => {
    const { data } = await axios.delete(endpoint.DELETE_CONTACT(id));
    return data;
  },
};
