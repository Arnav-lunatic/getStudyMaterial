import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface loadingState {
	isLoading: boolean
}

// Define the initial state using that type
const initialState: loadingState = {
    isLoading: false,
};

export const loadingSlice = createSlice({
	name: "loader",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
});

export const { setIsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
