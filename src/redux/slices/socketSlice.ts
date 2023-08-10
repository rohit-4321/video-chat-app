import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SocketState {
    isConnected: boolean,
    message: string[],
}
const initialState: SocketState = {
	isConnected: false,
	message: []
};
export const socketSlice = createSlice({
	name: 'socketState',
	initialState,
	reducers: {
		setIsSocketConnected(state, action: PayloadAction<boolean>){
			state.isConnected = action.payload;
		}
	} 
});

export const socketReducer = socketSlice.reducer;