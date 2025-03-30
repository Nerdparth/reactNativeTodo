import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSlice"; // Ensure correct import path

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer, // ✅ Fixes the structure
      },
});
