import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Boomi" },
  { id: 2, name: "Siva" },
  { id: 3, name: "Kavin" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
