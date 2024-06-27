import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },

    removeTodo: (state, action: PayloadAction<String>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },

    taskComplete: (state, action: PayloadAction<String>) => {
      const task = state.todos.find((item) => item.id === action.payload);

      task!.isCompleted = !task?.isCompleted;
    },
  },
});

export const { addTodo, removeTodo, taskComplete } = todoSlice.actions;

export default todoSlice.reducer;
