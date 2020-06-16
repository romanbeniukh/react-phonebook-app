import { createAction } from '@reduxjs/toolkit';

export const GET_CONTACTS_REQUEST_ACTION = createAction('GET_CONTACTS_REQUEST');
export const GET_CONTACTS_SUCCESS_ACTION = createAction('GET_CONTACTS_SUCCESS');
export const GET_CONTACTS_ERROR_ACTION = createAction('GET_CONTACTS_ERROR');
