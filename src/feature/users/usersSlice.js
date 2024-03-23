import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', name: "Kavin" },
  { id: '1', name: "Boomi" },
  { id: '2', name: "Siva" },
 
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
