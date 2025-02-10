import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface loginState {
	loggedInUser: {
		name: string;
		email: string;
	} | null;
}

// Define the initial state using that type
const initialState: loginState = {
	loggedInUser: null,
};

export const loginSlice = createSlice({
	name: "login",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		setLoggedInUser: (state, action: PayloadAction<{name: string, email: string} | null>) => {
			state.loggedInUser = action.payload;
		},
	},
});

export const { setLoggedInUser } = loginSlice.actions;

export default loginSlice.reducer;
