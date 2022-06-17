import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    value: "",
  },
  reducers: {
    addingTask2: (state, action) => {
      state.value = [...state.value, action.payload];
      console.log("state.value.........", state.value);
    },
    removingTask2: (state, action) => {
      const newArray = state.value.filter((elm) => {
        console.log("action.payload", action.payload.id);
        console.log("state.value del filter", state.value);
        console.log("action.payload.id", action.payload.id);
        console.log("elm.id........", elm.id);
        return elm.id !== action.payload.id;
      });
      state.value = newArray;
    },
  },
});

export const { addingTask2 } = tasksSlice.actions;
export const { removingTask2 } = tasksSlice.actions;

export default tasksSlice.reducer;
