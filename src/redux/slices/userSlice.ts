import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserData {
    userName: string,
}
const initialValue: UserData = {
	userName: '',
};

export const userSlice = createSlice({
	name: 'userDetails',
	initialState: initialValue,
	reducers: {
		setUserName(state, action: PayloadAction<string>){
			state.userName = action.payload;
		}
	}
});

export const userReducer = userSlice.reducer;
export const {setUserName} = userSlice.actions;