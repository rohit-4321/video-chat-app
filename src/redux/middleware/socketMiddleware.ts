import { Middleware } from '@reduxjs/toolkit';
import { connectSocket, setIsSocketConnected } from '../slices/socketActions';


const url = 'ws://localhost:8080/conn';

let ws: WebSocket | null = null;

export const socketMiddleware: Middleware = (storeApi) => (next) => (action) => {
	if(action.type === connectSocket.type){
		const userName = storeApi.getState().userReducer.userName;
		if(!ws){
			ws = new WebSocket(url + `?name=${userName}`);
			ws.onopen = function(event) {
				storeApi.dispatch(setIsSocketConnected(true));
				console.log('Connection established');
			};
			ws.onerror = function(ev) {
				console.log('Error occurred');
				console.log(ev);
			};
			ws.onmessage = function(ev) {
				const data  = ev.data;
				console.log(data);
			};
		}
	}
	next(action);
};

