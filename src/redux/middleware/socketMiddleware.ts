import { Middleware } from '@reduxjs/toolkit';
import { connectSocket } from '../slices/socketActions';


// const url = 'ws://localhost:8080/websocket';

// const ws: WebSocket | null = null;

export const socketMiddleware: Middleware = (storeApi) => (next) => (action) => {
	if(action.type === connectSocket.type){
		console.log('connecting websocket');
	}
	next(action);
};