import { createAction } from '@reduxjs/toolkit';
import { socketSlice } from './socketSlice';

export const connectSocket  = createAction('socket/tryconnect');
export const {
	setIsSocketConnected
} = socketSlice.actions;
