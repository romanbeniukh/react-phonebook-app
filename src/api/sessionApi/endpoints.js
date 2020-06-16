const API_URL = 'https://goit-phonebook-api.herokuapp.com';

export const LOGIN_API = () => `${API_URL}/users/login`;
export const SIGNUP_API = () => `${API_URL}/users/signup`;
export const CURRENT_USER_API = () => `${API_URL}/users/current`;
export const LOGOUT_API = () => `${API_URL}/users/logout`;
export const GET_CONTACTS = () => `${API_URL}/contacts`;
export const SET_CONTACT = () => `${API_URL}/contacts`;
export const DELETE_CONTACT = id => `${API_URL}/contacts/${id}`;
