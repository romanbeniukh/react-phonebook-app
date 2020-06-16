import { createAction } from '@reduxjs/toolkit';

export const REFRESH_USER_REQUEST_ACTION = createAction('REFRESH_USER_REQUEST');
export const REFRESH_USER_SUCCESS_ACTION = createAction('REFRESH_USER_SUCCESS');
export const REFRESH_USER_ERROR_ACTION = createAction('REFRESH_USER_ERROR');
