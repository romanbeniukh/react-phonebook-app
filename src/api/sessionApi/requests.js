import axios from 'axios';
import * as endpoint from './endpoints';

export default {
  login: async credentials => {
    const { data } = await axios.post(endpoint.LOGIN_API(), credentials);
    return data;
  },
  signup: async credentials => {
    const { data } = await axios.post(endpoint.SIGNUP_API(), credentials);
    return data;
  },
  logout: async token => {
    const options = {
      headers: {
        Authorization: token,
      },
    };
    const { data } = await axios.post(endpoint.LOGOUT_API(), null, options);
    return data;
  },
};
