import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserData {
    userName: string,
	isCaller: boolean,
}
const initialValue: UserData = {
	userName: '',
	isCaller: false,
};

export const userSlice = createSlice({
	name: 'userDetails',
	initialState: initialValue,
	reducers: {
		setUserName(state, action: PayloadAction<string>){
			state.userName = action.payload;
		},
		setIsCaller(state, action: PayloadAction<boolean>){
			state.isCaller = action.payload;
		}
	}
});

export const userReducer = userSlice.reducer;
export const {setUserName, setIsCaller} = userSlice.actions;