import { createAction } from '@reduxjs/toolkit';

export const LOGOUT_REQUEST_ACTION = createAction('LOGOUT_REQUEST');
export const LOGOUT_SUCCESS_ACTION = createAction('LOGOUT_SUCCESS');
export const LOGOUT_ERROR_ACTION = createAction('LOGOUT_ERROR');
